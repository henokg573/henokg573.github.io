import { motion } from 'motion/react';
import { useState } from 'react';
import { X, Download, Mail } from 'lucide-react';

const services = [
  {
    icon: '🔒',
    title: 'Cybersecurity & Risk Management',
    description: 'ISO 27001:2022 implementation, risk assessment, internal audits, and cybersecurity governance for financial institutions and enterprises.',
  },
  {
    icon: '📋',
    title: 'ISO 27001 Consulting & Auditing',
    description: 'Lead auditor trainee providing ISO/IEC 27001:2022 compliance frameworks, documentation, and management system implementation.',
  },
  {
    icon: '🌐',
    title: 'Network Engineering & Cloud',
    description: 'Network infrastructure design, cloud computing solutions, and database management with Cisco certification.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design & Web Development',
    description: 'User-centered design, wireframing, prototyping, and full-stack web development using modern frameworks and tools.',
  },
];

const testimonials = [
  {
    name: 'Galana Garoma',
    role: 'Colleague & Collaborator',
    text: 'I have had the privilege of studying and collaborating with Henok Girma for the past five years. He has consistently demonstrated exceptional talent and dedication in the tech field. His diverse skill set, ranging from cybersecurity to UI/UX design and secure network management, makes him a valuable asset to any team.',
  },
  {
    name: 'Henok Belachew',
    role: 'Project Partner',
    text: 'Henok\'s technical expertise and teamwork were crucial in successfully developing significant projects including a machine learning-based traffic management system and the Shemachoch app. His commitment to excellence and ability to tackle complex challenges make him invaluable to any professional opportunity.',
  },
  {
    name: 'Esrael Eshetu',
    role: 'Engineering Colleague',
    text: 'Working with Henok on the digital energy meter project for Ethiopian Electric Utility showcased his versatile skills in both hardware and software development. His exceptional technical abilities, problem-solving mindset, and commitment to excellence have been key factors in our project successes.',
  },
];

export function About() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="mb-12 text-center lg:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
        >
          Henok Girma
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] bg-clip-text text-transparent mb-4"
        >
          Cybersecurity Consultant | ISO 27001 Auditor | UI/UX Designer
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#d4d4d4] mb-8 max-w-3xl mx-auto lg:mx-0"
        >
          Securing systems, designing intuitive user experiences, and building scalable web solutions.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a
            href="/components/Resume.pdf"
            download="Henok-Girma-Resume.pdf"
            className="relative bg-gradient-to-br from-[#ffdb70] to-[#ffbb56] text-[#1e1e1f] px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#ffdb70]/20 transition-all flex items-center justify-center gap-2 group"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>
          <a
            href="mailto:henokgirma573@gmail.com"
            className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <div className="absolute inset-[1px] bg-gradient-to-br from-[#2b2b2c] to-[#202022] rounded-xl"></div>
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Contact Me</span>
          </a>
        </motion.div>
      </section>

      <div className="h-px bg-[#383838] mb-10"></div>

      {/* About Me Section */}
      <header className="mb-8">
        <h2 className="text-2xl md:text-3xl text-white capitalize relative pb-3">
          About me
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] rounded-full"></span>
        </h2>
      </header>

      <section className="mb-10 text-[#d4d4d4] space-y-4">
        <p>
          I am Henok Girma, an Electrical and Computer Engineering graduate and ISO 27001 certified professional with a deep passion for technology, networking, cybersecurity, and web development. I have hands-on experience in UI/UX design, full-stack development, IT support, and cybersecurity.
        </p>

        <p>
          Currently, I work at Zsecuredtech Trading PLC as a junior cybersecurity and ISO consultant, implementing cybersecurity measures and practicing ISO 27001 auditing. I am highly motivated to combine my technical skills, project experience, and ISO knowledge to grow as a professional cybersecurity and ISO consultant, delivering efficient, secure, and user-friendly technology solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-10">
        <h3 className="text-xl md:text-2xl text-white mb-6">What I Do</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] p-5 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-[1px] bg-gradient-to-br from-[#2b2b2c] to-[#202022] rounded-2xl"></div>
              <div className="relative flex gap-4 md:items-start">
                <div className="text-4xl flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h4 className="text-white mb-2">{service.title}</h4>
                  <p className="text-[#d4d4d4] text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="mb-10">
        <h3 className="text-xl md:text-2xl text-white mb-6">Testimonials</h3>

        <ul className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#ffdb70] scrollbar-track-[#2b2b2c]">
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              className="min-w-full md:min-w-[calc(50%-8px)] snap-center"
            >
              <div
                onClick={() => setSelectedTestimonial(index)}
                className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] p-6 pt-12 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all h-full"
              >
                <div className="absolute inset-[1px] bg-gradient-to-br from-[#2b2b2c] to-[#202022] rounded-2xl"></div>
                <div className="relative">
                  <div className="absolute -top-8 left-4 bg-gradient-to-br from-[#383838] to-[#2b2b2c] rounded-2xl shadow-lg p-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#ffdb70] to-[#ffbb56] rounded-2xl flex items-center justify-center text-2xl font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>

                  <h4 className="text-white mb-1">{testimonial.name}</h4>
                  <p className="text-[#b3b3b3] text-sm mb-3">{testimonial.role}</p>
                  <p className="text-[#d4d4d4] text-sm leading-relaxed line-clamp-3">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonial Modal */}
      {selectedTestimonial !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80"
            onClick={() => setSelectedTestimonial(null)}
          />
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-[#1e1e1f] border border-[#2b2b2c] rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
          >
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-4 right-4 bg-[#2b2b2c] hover:bg-[#383838] rounded-lg p-2 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-gradient-to-br from-[#383838] to-[#2b2b2c] rounded-2xl shadow-lg p-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#ffdb70] to-[#ffbb56] rounded-2xl flex items-center justify-center text-3xl font-semibold">
                    {testimonials[selectedTestimonial].name.charAt(0)}
                  </div>
                </div>
                <svg className="w-8 h-8 text-[#ffdb70]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              <div className="flex-1">
                <h4 className="text-xl text-white mb-1">{testimonials[selectedTestimonial].name}</h4>
                <p className="text-sm text-[#b3b3b3] mb-4">{testimonials[selectedTestimonial].role}</p>
                <p className="text-[#d4d4d4] leading-relaxed">
                  {testimonials[selectedTestimonial].text}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.article>
  );
}
