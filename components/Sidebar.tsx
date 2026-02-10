import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Phone, Calendar, MapPin, Linkedin, Github, Twitter, ChevronDown } from 'lucide-react';
import henokImage from './henok.png';

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const nameClickTimes = useRef<number[]>([]);

  const handleNameClick = () => {
    const now = Date.now();
    nameClickTimes.current = [...nameClickTimes.current, now].filter(
      (timestamp) => now - timestamp < 600
    );
    if (nameClickTimes.current.length >= 3) {
      nameClickTimes.current = [];
      navigate('/admin');
    }
  };

  return (
    <aside className={`bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl p-4 md:p-8 shadow-lg mb-4 lg:mb-0 lg:sticky lg:top-15 overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[600px]' : 'max-h-28 lg:max-h-none'}`}>
      <div className="relative">
        <div className="flex items-center gap-4 lg:flex-col lg:text-center">
          <div className="bg-gradient-to-br from-[#383838] to-[#2b2b2c] rounded-2xl lg:rounded-3xl p-1 flex-shrink-0">
            <img 
              src={henokImage}
              alt="Henok Girma" 
              className="w-20 h-20 lg:w-36 lg:h-36 rounded-2xl lg:rounded-3xl object-cover"
            />
          </div>

          <div className="flex-1 lg:flex-none">
            <button
              type="button"
              onClick={handleNameClick}
              className="text-white text-xl md:text-2xl font-medium mb-2 lg:mb-3 hover:text-[#ffdb70] transition-colors"
            >
              Henok Girma
            </button>
            <p className="bg-[#2b2b2c] text-[#e4e4e4] text-xs px-3 py-1 rounded-lg inline-block mb-1">
              Junior Cybersecurity & ISO Consultant
            </p>
            <p className="bg-[#2b2b2c] text-[#e4e4e4] text-xs px-3 py-1 rounded-lg inline-block mb-1 hidden lg:inline-block">
              LXD Designer & Web Developer and Developer
            </p>
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-gradient-to-br from-[#383838] to-[#2b2b2c] text-[#ffdb70] p-2 md:p-3 rounded-tl-none rounded-br-2xl rounded-tr-2xl shadow-lg hover:bg-gradient-to-br hover:from-[#ffdb70] hover:to-[#ffbb56] transition-all lg:hidden"
          >
            <span className="text-xs md:text-sm hidden md:inline">Show Contacts</span>
            <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className={`mt-6 ${isExpanded ? 'block' : 'hidden'} lg:block`}>
          <div className="h-px bg-[#383838] mb-6"></div>

          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-4">
              <div className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
                <div className="absolute inset-[1px] bg-[#202022] rounded-lg"></div>
                <Mail className="w-4 h-4 text-[#ffdb70] relative z-10" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#b3b3b3] text-xs uppercase mb-1">Email</p>
                <a href="mailto:henokgirma573@gmail.com" className="text-white text-sm hover:text-[#ffdb70] transition-colors break-all">
                  henokgirma573@gmail.com
                </a>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
                <div className="absolute inset-[1px] bg-[#202022] rounded-lg"></div>
                <Phone className="w-4 h-4 text-[#ffdb70] relative z-10" />
              </div>
              <div className="flex-1">
                <p className="text-[#b3b3b3] text-xs uppercase mb-1">Phone</p>
                <a href="tel:+251926360609" className="text-white text-sm hover:text-[#ffdb70] transition-colors">
                  +251 (926) 36-0609
                </a>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
                <div className="absolute inset-[1px] bg-[#202022] rounded-lg"></div>
                <Calendar className="w-4 h-4 text-[#ffdb70] relative z-10" />
              </div>
              <div className="flex-1">
                <p className="text-[#b3b3b3] text-xs uppercase mb-1">Birthday</p>
                <time className="text-white text-sm">Sep 15, 2000</time>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
                <div className="absolute inset-[1px] bg-[#202022] rounded-lg"></div>
                <MapPin className="w-4 h-4 text-[#ffdb70] relative z-10" />
              </div>
              <div className="flex-1">
                <p className="text-[#b3b3b3] text-xs uppercase mb-1">Location</p>
                <address className="text-white text-sm not-italic">
                  Addis Ababa, Ethiopia
                </address>
              </div>
            </li>
          </ul>

          <div className="h-px bg-[#383838] mb-6"></div>

          <ul className="flex gap-4 justify-start lg:justify-center">
            <li>
              <a 
                href="https://www.linkedin.com/in/henok-girmahambisa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#b3b3b3] hover:text-[#d4d4d4] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/henokg573" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#b3b3b3] hover:text-[#d4d4d4] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a 
                href="https://twitter.com/henokg573" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#b3b3b3] hover:text-[#d4d4d4] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}