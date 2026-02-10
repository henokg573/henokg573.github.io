import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Eye, ChevronDown, ExternalLink } from "lucide-react";

import {
  getStoredPortfolioProjects,
  type PortfolioProject,
} from "./contentStore";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  useEffect(() => {
    setProjects(getStoredPortfolioProjects());
  }, []);

  const visibleProjects = useMemo(
    () => projects.filter((project) => !project.hidden),
    [projects],
  );

  const categories = useMemo(() => {
    const unique = new Set(visibleProjects.map((project) => project.category));
    return ["All", ...Array.from(unique)];
  }, [visibleProjects]);

  const filteredProjects =
    selectedCategory === "All"
      ? visibleProjects
      : visibleProjects.filter(
          (project) => project.category === selectedCategory,
        );

  const expandedSet = useMemo(() => new Set(expandedIds), [expandedIds]);

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-10">
        <h2 className="text-2xl md:text-3xl text-white capitalize relative pb-3">
          <span>Portfolio</span>
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] rounded-full"></span>
        </h2>
      </header>

      <section>
        {/* Desktop filter list */}
        <ul className="hidden md:flex gap-6 mb-8 flex-wrap">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`transition-colors ${
                  selectedCategory === category
                    ? "text-[#ffdb70]"
                    : "text-[#d4d4d4] hover:text-[#b3b3b3]"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile filter dropdown */}
        <div className="relative mb-6 md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl px-4 py-3 flex justify-between items-center text-[#d4d4d4]"
          >
            <span>{selectedCategory}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <ul className="absolute top-full left-0 right-0 mt-2 bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl p-1.5 z-10">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-[#d4d4d4] hover:bg-[#2b2b2c] transition-colors"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Projects grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id || project.title + index}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="group"
            >
              <div className="block h-full flex flex-col items-center">
                {/* Static minimal image */}
                <figure className="relative w-[150px] h-[150px] rounded-2xl overflow-hidden mb-4 bg-[#101011]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#383838] p-4 rounded-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <Eye className="w-6 h-6 text-[#ffdb70]" strokeWidth={3} />
                  </div>
                </figure>

                <div className="flex-1 flex flex-col items-center text-center">
                  <div className="flex items-start justify-between gap-2 mb-2 w-full px-2">
                    <h3 className="text-white capitalize leading-tight flex-1">
                      {project.title}
                    </h3>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 mt-1"
                      >
                        <ExternalLink className="w-4 h-4 text-[#b3b3b3] group-hover:text-[#ffdb70] transition-colors" />
                      </a>
                    ) : (
                      <ExternalLink className="w-4 h-4 text-[#b3b3b3] group-hover:text-[#ffdb70] transition-colors flex-shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-[#b3b3b3] text-sm mb-2">
                    {project.category}
                  </p>
                  <div className="mt-3 rounded-xl border border-[#2b2b2c] bg-[#101011] p-3">
                    <p className="text-white text-sm leading-relaxed italic">
                      <span className="text-red-400">“</span>
                      {expandedSet.has(project.id)
                        ? project.description
                        : `${project.description.slice(0, 140)}${project.description.length > 140 ? "…" : ""}`}
                      <span className="text-red-400">”</span>
                    </p>
                  </div>
                  {project.description.length > 140 && (
                    <button
                      type="button"
                      onClick={() => toggleExpanded(project.id)}
                      className="mt-3 inline-flex items-center justify-center rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white hover:bg-green-500 transition-colors"
                    >
                      {expandedSet.has(project.id) ? "See less" : "See more"}
                    </button>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
}
