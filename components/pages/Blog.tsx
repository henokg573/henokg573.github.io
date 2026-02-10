import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { getStoredBlogPosts, type BlogPost } from "./contentStore";

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  useEffect(() => {
    setPosts(getStoredBlogPosts());
  }, []);

  const formatDate = (value: string) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString();
  };

  const visiblePosts = posts.filter((post) => !post.hidden);
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
          <span>Blog</span>
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] rounded-full"></span>
        </h2>
      </header>

      <section>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {visiblePosts.map((post, index) => (
            <motion.li
              key={post.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                type="button"
                className="relative text-left bg-gradient-to-br from-[#383838] to-[#2b2b2c] rounded-2xl shadow-lg hover:shadow-xl transition-shadow block h-full overflow-hidden group"
              >
                <div className="absolute inset-[1px] bg-[#202022] rounded-2xl"></div>
                <div className="relative">
                  {/* Static image size */}
                  <figure className="w-[100px] h-[100px] rounded-xl overflow-hidden m-0 bg-[#101011] mx-auto">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </figure>

                  <div className="p-4 md:p-5 text-center">
                    <div className="flex items-center justify-between text-xs text-[#b3b3b3] mb-2">
                      <span className="uppercase tracking-wide">Blog</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-white leading-tight text-base sm:text-lg mb-2">
                      {post.title}
                    </h3>
                    <div className="mt-3 rounded-xl border border-[#2b2b2c] bg-[#101011] p-3">
                      <p className="text-white text-sm leading-relaxed italic">
                        <span className="text-red-400">“</span>
                        {expandedSet.has(post.id)
                          ? post.content
                          : `${post.content.slice(0, 140)}${post.content.length > 140 ? "…" : ""}`}
                        <span className="text-red-400">”</span>
                      </p>
                    </div>

                    {post.content.length > 140 && (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(post.id)}
                        className="mt-3 inline-flex items-center justify-center rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white hover:bg-green-500 transition-colors"
                      >
                        {expandedSet.has(post.id) ? "See less" : "See more"}
                      </button>
                    )}
                  </div>
                </div>
              </button>
            </motion.li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
}
