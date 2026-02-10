import { NavLink } from 'react-router';

const navItems = [
  { label: 'About', path: '/' },
  { label: 'Resume', path: '/resume' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:static bg-[#1e1e1fc0] lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none border-t lg:border-0 border-[#2b2b2c] rounded-t-xl lg:rounded-none z-50 lg:mb-6">
      <ul className="flex justify-center items-center gap-2 lg:gap-8 px-2 py-0">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `block px-2 py-5 lg:py-0 text-sm transition-colors ${
                  isActive
                    ? 'text-[#ffdb70]'
                    : 'text-[#d4d4d4] hover:text-[#b3b3b3]'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
