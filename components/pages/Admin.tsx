import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import {
  getStoredBlogPosts,
  getStoredPortfolioProjects,
  saveBlogPosts,
  savePortfolioProjects,
  type BlogPost,
  type PortfolioProject,
} from './contentStore';

const ADMIN_USER = (import.meta.env.VITE_ADMIN_USER ?? '').trim();
const ADMIN_PASS = (import.meta.env.VITE_ADMIN_PASS ?? '').trim();
const AUTH_KEY = 'hg_admin_auth_v1';

type TabKey = 'blog' | 'portfolio';

const createId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

export function Admin() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<TabKey>('blog');

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>([]);

  const [blogTitle, setBlogTitle] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogDate, setBlogDate] = useState('');
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);

  const [projectTitle, setProjectTitle] = useState('');
  const [projectCategory, setProjectCategory] = useState('');
  const [projectImage, setProjectImage] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (typeof globalThis !== 'undefined' && 'localStorage' in globalThis) {
      setIsAuthed(globalThis.localStorage.getItem(AUTH_KEY) === 'true');
    }
  }, []);

  useEffect(() => {
    if (isAuthed) {
      setBlogPosts(getStoredBlogPosts());
      setPortfolioProjects(getStoredPortfolioProjects());
    }
  }, [isAuthed]);

  const categories = useMemo(() => {
    const unique = new Set(portfolioProjects.map((project) => project.category));
    return Array.from(unique);
  }, [portfolioProjects]);

  const handleLogin = () => {
    setError('');
    setNotice('');
    const normalizedUser = username.trim().toLowerCase();
    const normalizedAdmin = ADMIN_USER.trim().toLowerCase();
    if (normalizedUser === normalizedAdmin && password.trim() === ADMIN_PASS) {
      setIsAuthed(true);
      if (typeof globalThis !== 'undefined' && 'localStorage' in globalThis) {
        globalThis.localStorage.setItem(AUTH_KEY, 'true');
      }
      return;
    }
    setError('Invalid credentials.');
  };

  const handleLogout = () => {
    setIsAuthed(false);
    if (typeof globalThis !== 'undefined' && 'localStorage' in globalThis) {
      globalThis.localStorage.removeItem(AUTH_KEY);
    }
  };

  const handleAddBlog = () => {
    if (!blogTitle.trim() || !blogImage.trim() || !blogContent.trim()) {
      setError('Please fill in blog title, image, and content.');
      return;
    }
    const basePost = {
      title: blogTitle.trim(),
      image: blogImage.trim(),
      content: blogContent.trim(),
      date: blogDate.trim() || new Date().toISOString().slice(0, 10),
    };
    const updated = editingBlogId
      ? blogPosts.map((post) => (
        post.id === editingBlogId
          ? { ...post, ...basePost }
          : post
      ))
      : [{ id: createId('blog'), ...basePost }, ...blogPosts];
    setBlogPosts(updated);
    saveBlogPosts(updated);
    setBlogTitle('');
    setBlogImage('');
    setBlogContent('');
    setBlogDate('');
    setEditingBlogId(null);
    setError('');
    setNotice(editingBlogId ? 'Blog post updated.' : 'Blog post saved locally.');
  };

  const handleToggleBlogHidden = (id: string) => {
    const updated = blogPosts.map((post) => (
      post.id === id
        ? { ...post, hidden: !post.hidden }
        : post
    ));
    setBlogPosts(updated);
    saveBlogPosts(updated);
  };

  const handleAddProject = () => {
    if (!projectTitle.trim() || !projectCategory.trim() || !projectImage.trim() || !projectDescription.trim()) {
      setError('Please fill in project title, category, image, and description.');
      return;
    }
    const baseProject = {
      title: projectTitle.trim(),
      category: projectCategory.trim(),
      image: projectImage.trim(),
      description: projectDescription.trim(),
      link: projectLink.trim() || undefined,
    };
    const updated = editingProjectId
      ? portfolioProjects.map((project) => (
        project.id === editingProjectId
          ? { ...project, ...baseProject }
          : project
      ))
      : [{ id: createId('project'), ...baseProject }, ...portfolioProjects];
    setPortfolioProjects(updated);
    savePortfolioProjects(updated);
    setProjectTitle('');
    setProjectCategory('');
    setProjectImage('');
    setProjectDescription('');
    setProjectLink('');
    setEditingProjectId(null);
    setError('');
    setNotice(editingProjectId ? 'Project updated.' : 'Project saved locally.');
  };

  const handleToggleProjectHidden = (id: string) => {
    const updated = portfolioProjects.map((project) => (
      project.id === id
        ? { ...project, hidden: !project.hidden }
        : project
    ));
    setPortfolioProjects(updated);
    savePortfolioProjects(updated);
  };

  const handleEditBlog = (post: BlogPost) => {
    setActiveTab('blog');
    setEditingBlogId(post.id);
    setBlogTitle(post.title);
    setBlogImage(post.image);
    setBlogContent(post.content);
    setBlogDate(post.date);
    setNotice('Editing blog post.');
  };

  const handleEditProject = (project: PortfolioProject) => {
    setActiveTab('portfolio');
    setEditingProjectId(project.id);
    setProjectTitle(project.title);
    setProjectCategory(project.category);
    setProjectImage(project.image);
    setProjectDescription(project.description);
    setProjectLink(project.link ?? '');
    setNotice('Editing project.');
  };

  const handleCancelEdit = () => {
    setEditingBlogId(null);
    setEditingProjectId(null);
    setBlogTitle('');
    setBlogImage('');
    setBlogContent('');
    setBlogDate('');
    setProjectTitle('');
    setProjectCategory('');
    setProjectImage('');
    setProjectDescription('');
    setProjectLink('');
    setNotice('');
  };

  const handleImageUpload = (
    file: File | null,
    onSuccess: (value: string) => void,
  ) => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (result) {
        onSuccess(result);
        setNotice('Image loaded from file.');
      }
    };
    reader.readAsDataURL(file);
  };

  const downloadJson = (name: string, data: unknown) => {
    if (typeof globalThis === 'undefined' || !('document' in globalThis)) {
      return;
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl text-white capitalize relative pb-3">
            <span>Admin Dashboard</span>
            <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] rounded-full"></span>
          </h2>
          <p className="text-white text-sm mt-2">Manage blog posts and portfolio items (stored in your browser).</p>
        </div>
        {isAuthed && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-[#2b2b2c] text-white hover:text-green-300 transition-colors"
          >
            Logout
          </button>
        )}
      </header>

      {isAuthed ? (
        <div className="space-y-8">
          <div className="bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-white text-sm font-medium">Export content for GitHub</p>
              <p className="text-green-300 text-xs">Download JSON and paste into the code file before deploying.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => downloadJson('blog-posts.json', blogPosts)}
                className="px-3 py-2 rounded-xl bg-[#2b2b2c] text-white text-sm"
              >
                Export blogs
              </button>
              <button
                onClick={() => downloadJson('portfolio-projects.json', portfolioProjects)}
                className="px-3 py-2 rounded-xl bg-[#2b2b2c] text-white text-sm"
              >
                Export projects
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-4 py-2 rounded-xl text-sm ${
                activeTab === 'blog'
                  ? 'bg-[#2b2b2c] text-green-300'
                  : 'bg-[#2b2b2c] text-white'
              }`}
            >
              Blog posts
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-4 py-2 rounded-xl text-sm ${
                activeTab === 'portfolio'
                  ? 'bg-[#2b2b2c] text-green-300'
                  : 'bg-[#2b2b2c] text-white'
              }`}
            >
              Portfolio projects
            </button>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}
          {notice && <p className="text-green-300 text-sm">{notice}</p>}

          {activeTab === 'blog' ? (
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6">
              <div className="bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg">
                    {editingBlogId ? 'Edit blog post' : 'Add blog post'}
                  </h3>
                  {editingBlogId && (
                    <button
                      onClick={handleCancelEdit}
                      className="text-xs text-white hover:text-green-300"
                    >
                      Cancel edit
                    </button>
                  )}
                </div>
                <div>
                  <label htmlFor="blog-title" className="text-white text-sm">Title</label>
                  <input
                    id="blog-title"
                    value={blogTitle}
                    onChange={(event) => setBlogTitle(event.target.value)}
                    className="mt-2 w-full bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white placeholder:text-green-300"
                    placeholder="Post title"
                  />
                </div>
                <div>
                  <label htmlFor="blog-image" className="text-white text-sm">Image URL</label>
                  <input
                    id="blog-image"
                    value={blogImage}
                    onChange={(event) => setBlogImage(event.target.value)}
                    className="mt-2 w-full bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white placeholder:text-green-300"
                    placeholder="https://..."
                  />
                  <div className="mt-3">
                    <label htmlFor="blog-image-file" className="text-white text-xs">Or upload image file</label>
                    <input
                      id="blog-image-file"
                      type="file"
                      accept="image/*"
                      onChange={(event) => handleImageUpload(event.target.files?.[0] ?? null, setBlogImage)}
                      className="mt-2 w-full text-xs text-white"
                    />
                    <p className="text-[11px] text-white mt-1">Uploads are stored as inline data URLs in your browser.</p>
                  </div>
                </div>
                <div>
                  <label htmlFor="blog-date" className="text-white text-sm">Date</label>
                  <input
                    id="blog-date"
                    type="date"
                    value={blogDate}
                    onChange={(event) => setBlogDate(event.target.value)}
                    className="mt-2 w-full bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="blog-content" className="text-white text-sm">Content</label>
                  <textarea
                    id="blog-content"
                    value={blogContent}
                    onChange={(event) => setBlogContent(event.target.value)}
                    className="mt-2 w-full min-h-[140px] bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white placeholder:text-green-300"
                    placeholder="Write your post summary..."
                  />
                </div>
                <button
                  onClick={handleAddBlog}
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] text-black font-semibold"
                >
                  {editingBlogId ? 'Update blog' : 'Publish blog'}
                </button>
              </div>

              <div className="bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl p-6">
                <h3 className="text-white text-lg mb-1">Existing posts</h3>
                <p className="text-xs text-green-300 mb-4">Hide removes a post from the public page but keeps it in storage.</p>
                <ul className="space-y-4 max-h-[480px] overflow-y-auto pr-2">
                  {blogPosts.map((post) => (
                    <li key={post.id} className="bg-[#101011] border border-[#2b2b2c] rounded-xl p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-white text-sm font-medium flex items-center gap-2">
                            <span>{post.title}</span>
                            {post.hidden && (
                              <span className="text-[10px] uppercase tracking-wide text-red-400">Hidden</span>
                            )}
                          </p>
                          <p className="text-white text-xs mt-1">{post.date}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleEditBlog(post)}
                            className="text-xs text-white hover:text-green-300"
                          >
                            Edit
                          </button>
                          {post.hidden ? (
                            <button
                              onClick={() => handleToggleBlogHidden(post.id)}
                              className="text-xs text-green-300 hover:text-green-200"
                            >
                              Show
                            </button>
                          ) : (
                            <button
                              onClick={() => handleToggleBlogHidden(post.id)}
                              className="text-xs text-red-400 hover:text-red-300"
                            >
                              Hide
                            </button>
                          )}
                        </div>
                      </div>
                      <p className="text-white text-sm mt-2">{post.content}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6">
              <div className="bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg">
                    {editingProjectId ? 'Edit portfolio project' : 'Add portfolio project'}
                  </h3>
                  {editingProjectId && (
                    <button
                      onClick={handleCancelEdit}
                      className="text-xs text-white hover:text-green-300"
                    >
                      Cancel edit
                    </button>
                  )}
                </div>
                <div>
                  <label htmlFor="project-title" className="text-white text-sm">Title</label>
                  <input
                    id="project-title"
                    value={projectTitle}
                    onChange={(event) => setProjectTitle(event.target.value)}
                    className="mt-2 w-full bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white placeholder:text-green-300"
                    placeholder="Project title"
                  />
                </div>
                <div>
                  <label htmlFor="project-category" className="text-white text-sm">Category</label>
                  <input
                    id="project-category"
                    value={projectCategory}
                    onChange={(event) => setProjectCategory(event.target.value)}
                    className="mt-2 w-full bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white placeholder:text-green-300"
                    placeholder={categories[0] || 'Web Development'}
                  />
                </div>
                <div>
                  <label htmlFor="project-image" className="text-white text-sm">Image URL</label>
                  <input
                    id="project-image"
                    value={projectImage}
                    onChange={(event) => setProjectImage(event.target.value)}
                    className="mt-2 w-full bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white placeholder:text-green-300"
                    placeholder="https://..."
                  />
                  <div className="mt-3">
                    <label htmlFor="project-image-file" className="text-white text-xs">Or upload image file</label>
                    <input
                      id="project-image-file"
                      type="file"
                      accept="image/*"
                      onChange={(event) => handleImageUpload(event.target.files?.[0] ?? null, setProjectImage)}
                      className="mt-2 w-full text-xs text-white"
                    />
                    <p className="text-[11px] text-white mt-1">Uploads are stored as inline data URLs in your browser.</p>
                  </div>
                </div>
                <div>
                  <label htmlFor="project-description" className="text-white text-sm">Description</label>
                  <textarea
                    id="project-description"
                    value={projectDescription}
                    onChange={(event) => setProjectDescription(event.target.value)}
                    className="mt-2 w-full min-h-[140px] bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white placeholder:text-green-300"
                    placeholder="What did you build?"
                  />
                </div>
                <div>
                  <label htmlFor="project-link" className="text-white text-sm">Link (optional)</label>
                  <input
                    id="project-link"
                    value={projectLink}
                    onChange={(event) => setProjectLink(event.target.value)}
                    className="mt-2 w-full bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white placeholder:text-green-300"
                    placeholder="https://project-url.com"
                  />
                </div>
                <button
                  onClick={handleAddProject}
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] text-black font-semibold"
                >
                  {editingProjectId ? 'Update project' : 'Publish project'}
                </button>
              </div>

              <div className="bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl p-6">
                <h3 className="text-white text-lg mb-1">Existing projects</h3>
                <p className="text-xs text-green-300 mb-4">Hide removes a project from the public page but keeps it in storage.</p>
                <ul className="space-y-4 max-h-[480px] overflow-y-auto pr-2">
                  {portfolioProjects.map((project) => (
                    <li key={project.id} className="bg-[#101011] border border-[#2b2b2c] rounded-xl p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-white text-sm font-medium flex items-center gap-2">
                            <span>{project.title}</span>
                            {project.hidden && (
                              <span className="text-[10px] uppercase tracking-wide text-red-400">Hidden</span>
                            )}
                          </p>
                          <p className="text-white text-xs mt-1">{project.category}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleEditProject(project)}
                            className="text-xs text-white hover:text-green-300"
                          >
                            Edit
                          </button>
                          {project.hidden ? (
                            <button
                              onClick={() => handleToggleProjectHidden(project.id)}
                              className="text-xs text-green-300 hover:text-green-200"
                            >
                              Show
                            </button>
                          ) : (
                            <button
                              onClick={() => handleToggleProjectHidden(project.id)}
                              className="text-xs text-red-400 hover:text-red-300"
                            >
                              Hide
                            </button>
                          )}
                        </div>
                      </div>
                      <p className="text-white text-sm mt-2">{project.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-xl bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl p-6">
          <h3 className="text-white text-lg mb-4">Login</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="admin-username" className="text-white text-sm">Username</label>
              <input
                id="admin-username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="mt-2 w-full bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white placeholder:text-green-300"
                placeholder="admin"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="text-white text-sm">Password</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full bg-[#101011] border border-[#2b2b2c] rounded-xl px-4 py-2 text-white placeholder:text-green-300"
                placeholder="admin123"
              />
            </div>
            {!ADMIN_USER || !ADMIN_PASS ? (
              <p className="text-red-400 text-sm">
                Missing .env credentials. Restart the dev server after updating .env.
              </p>
            ) : null}
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              onClick={handleLogin}
              className="w-full py-2 rounded-xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] text-black font-semibold"
            >
              Sign in
            </button>
            
          </div>
        </div>
      )}
    </motion.article>
  );
}
