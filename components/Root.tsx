import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export function Root() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] py-4 px-3 pb-20 lg:py-15 lg:px-12">
      <div className="max-w-[1200px] mx-auto lg:flex lg:gap-6 lg:items-start">
        <Sidebar />
        <div className="w-full lg:min-w-[75%]">
          <Navbar />
          <div className="bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl p-4 md:p-8 shadow-lg">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
