export type BlogPost = {
  id: string;
  title: string;
  image: string;
  content: string;
  date: string;
  hidden?: boolean;
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
  hidden?: boolean;
};

const BLOG_KEY = 'hg_blog_posts_v1';
const PORTFOLIO_KEY = 'hg_portfolio_projects_v1';

export const defaultBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Design conferences in 2022',
    image: 'https://images.unsplash.com/photo-1592758080692-b6a5dbe9c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzA3MDgwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Highlights from the year’s most inspiring design conferences and the ideas that shaped modern product thinking.',
    date: '2022-10-12',
  },
  {
    id: 'blog-2',
    title: 'Best fonts every designer',
    image: 'https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc3MDYzMzE0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'A curated shortlist of font pairings that improve readability and brand consistency across digital products.',
    date: '2022-09-28',
  },
  {
    id: 'blog-3',
    title: 'Design digest #80',
    image: 'https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDU5NDY2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Weekly roundup of tools, trends, and case studies you can apply to your next UX sprint.',
    date: '2022-09-18',
  },
  {
    id: 'blog-4',
    title: 'UI interactions of the week',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzA2NjE3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'A look at micro-interactions and animation patterns that add clarity and delight to web experiences.',
    date: '2022-08-31',
  },
  {
    id: 'blog-5',
    title: 'The forgotten art of spacing',
    image: 'https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA2Mzg2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Spacing builds rhythm and hierarchy. Here’s how to use it to make your layouts breathe.',
    date: '2022-08-14',
  },
  {
    id: 'blog-6',
    title: 'Design',
    image: 'https://images.unsplash.com/photo-1592758080692-b6a5dbe9c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzA3MDgwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'A quick note on keeping your design systems consistent as your product grows.',
    date: '2022-08-01',
  },
];

export const defaultPortfolioProjects: PortfolioProject[] = [
  {
    id: 'project-1',
    title: 'ISO 27001:2022 Implementation',
    category: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA2Mzg2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Led ISO/IEC 27001:2022 implementation projects for financial institutions, including policy development, risk assessment, and internal audits.',
  },
  {
    id: 'project-2',
    title: 'Wefekomech Web App',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzA2NjE3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Mentorship and incubation platform with comprehensive learning management features. Led UI/UX design and front-end development.',
  },
  {
    id: 'project-3',
    title: 'Digital Energy Meter System',
    category: 'Applications',
    image: 'https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc3MDYzMzE0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'IoT-based digital energy meter for Ethiopian Electric Utility integrating hardware and software for real-time electricity consumption monitoring.',
  },
  {
    id: 'project-4',
    title: 'Shemachoch Platform',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDU5NDY2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Local Ethiopian community service platform connecting users with service providers. Designed complete user experience and interface.',
  },
  {
    id: 'project-5',
    title: 'Fanos App',
    category: 'Applications',
    image: 'https://images.unsplash.com/photo-1592758080692-b6a5dbe9c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzA3MDgwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Mobile application providing educational and community features. Responsible for complete UI/UX design and prototyping.',
  },
  {
    id: 'project-6',
    title: 'EasyGate Access Control',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA2Mzg2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Telegram bot automating service management and user access control. Full-stack development with focus on security.',
  },
  {
    id: 'project-7',
    title: 'Bank GRC Framework',
    category: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzA2NjE3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Governance, Risk, and Compliance analysis for Bank of Abyssinia strengthening information security and regulatory compliance.',
  },
  {
    id: 'project-8',
    title: 'Traffic Management System',
    category: 'Applications',
    image: 'https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc3MDYzMzE0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Machine learning-based traffic management system using security cameras for campus monitoring and analysis.',
  },
  {
    id: 'project-9',
    title: 'Hospital Management System',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDU5NDY2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Comprehensive hospital management web application handling patient records, appointments, and medical staff coordination.',
  },
];

const isBrowser = typeof window !== 'undefined';

export const getStoredBlogPosts = (): BlogPost[] => {
  if (!isBrowser) {
    return defaultBlogPosts;
  }
  try {
    const raw = window.localStorage.getItem(BLOG_KEY);
    if (!raw) {
      return defaultBlogPosts;
    }
    const parsed = JSON.parse(raw) as BlogPost[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return defaultBlogPosts;
    }
    return parsed;
  } catch {
    return defaultBlogPosts;
  }
};

export const getStoredPortfolioProjects = (): PortfolioProject[] => {
  if (!isBrowser) {
    return defaultPortfolioProjects;
  }
  try {
    const raw = window.localStorage.getItem(PORTFOLIO_KEY);
    if (!raw) {
      return defaultPortfolioProjects;
    }
    const parsed = JSON.parse(raw) as PortfolioProject[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return defaultPortfolioProjects;
    }
    return parsed;
  } catch {
    return defaultPortfolioProjects;
  }
};

export const saveBlogPosts = (posts: BlogPost[]) => {
  if (!isBrowser) {
    return;
  }
  window.localStorage.setItem(BLOG_KEY, JSON.stringify(posts));
};

export const savePortfolioProjects = (projects: PortfolioProject[]) => {
  if (!isBrowser) {
    return;
  }
  window.localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(projects));
};
