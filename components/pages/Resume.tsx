import { motion } from 'motion/react';
import { BookOpen, Briefcase, Award } from 'lucide-react';

const education = [
  {
    title: 'Addis Ababa Science and Technology University',
    period: '2019 — 2024',
    degree: 'BSc. in Electrical and Computer Engineering (Computer Engineering)',
    description: 'Graduated with a degree in Electrical and Computer Engineering, specializing in computer engineering.',
  },
  {
    title: 'Cisco Networking Academy',
    period: '2023 — present',
    degree: 'Junior Network Technician & Cybersecurity',
    description: 'Certified Junior Network Technician and Cybersecurity fundamentals. Currently pursuing advanced Cisco certifications in networking and cloud computing.',
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    period: '2024 — present',
    degree: 'Cybersecurity Specialist',
    description: 'Comprehensive cybersecurity training covering security frameworks, risk management, and incident response.',
  },
];

const certifications = [
  {
    title: 'ISO 27001:2022 Lead Auditor',
    issuer: 'Professional Certification',
    year: '2024',
  },
  {
    title: 'Junior Network Technician',
    issuer: 'Cisco',
    year: '2024',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Cisco',
    year: '2024',
  },
  {
    title: 'CCEP (Certified Cybersecurity Entry-level Practitioner)',
    issuer: 'EC-Council',
    year: '2024',
  },
  {
    title: 'CNSP (Certified Network Security Practitioner)',
    issuer: 'EC-Council',
    year: '2024',
  },
];

const experience = [
  {
    title: 'Cybersecurity Consultant & ISO Auditor (Trainee)',
    company: 'Zsecuredtech Trading PLC',
    period: '2024 — Present',
    description: 'Working as a Cybersecurity Consultant and ISO Implementation Trainee, supporting organizations in building stronger information security and compliance frameworks. Actively contributed to ISO/IEC 27001:2022 implementation projects, including policy development, risk assessment, internal audits, and preparation for certification. Also involved in the ISO 9001:2015 and ISO 27001:2022 initiative at Gadaa Bank, assisting in the alignment of both ISO standards. This role strengthened my skills in cybersecurity governance, documentation development, and management system implementation while applying the knowledge gained from my professional certifications.',
  },
  {
    title: 'GRC Analyst (Governance, Risk, and Compliance)',
    company: 'Bank of Abyssinia',
    period: '2024',
    description: 'Worked as a Governance, Risk, and Compliance (GRC) specialist at Bank of Abyssinia, where I contributed to strengthening the bank\'s information security and regulatory compliance framework. My key responsibilities included assessing operational and cybersecurity risks, reviewing internal policies, and ensuring alignment with national banking regulations and industry standards. This experience enhanced my understanding of risk management, compliance monitoring, and cybersecurity governance within the financial sector.',
  },
  {
    title: 'Learning Experience Designer (LXD) and Developer',
    company: 'Wefekomech Web App & Digital Energy Meter',
    period: '2024 — 2025',
    description: 'Worked on development projects including Wefekomech Web App, a mentorship and incubation platform, and the Digital Energy Meter App for Ethiopian Electric Utility. Led UI/UX design and front-end development, integrating software with hardware systems.',
  },
  {
    title: 'Electrical Engineering Intern',
    company: 'Sigma Engineering Technologies',
    period: 'June 2023 — September 2023',
    description: 'Gained hands-on experience in electrical installations, maintenance, and troubleshooting. Assisted in installing electrical systems, circuit breakers, and control panels while ensuring compliance with safety regulations.',
  },
];

const skills = [
  { name: 'Cybersecurity & Risk Management', level: 85 },
  { name: 'ISO 27001 Implementation & Auditing', level: 80 },
  { name: 'Networking & Cloud Computing', level: 75 },
  { name: 'UI/UX Design', level: 90 },
  { name: 'Web Development', level: 70 },
  { name: 'Problem Solving & Analysis', level: 85 },
];

export function Resume() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl md:text-3xl text-white capitalize relative pb-3">
          <span>Resume</span>
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] rounded-full"></span>
        </h2>
        <a
          href="/components/Resume.pdf"
          download="Henok-Girma-Resume.pdf"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] px-4 py-2 text-sm font-semibold text-black"
        >
          Download Resume
        </a>
      </header>

      {/* Experience Section */}
      <section className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
            <div className="absolute inset-[1px] bg-[#202022] rounded-lg"></div>
            <Briefcase className="w-5 h-5 text-[#ffdb70] relative z-10" />
          </div>
          <h3 className="text-xl md:text-2xl text-white">Work Experience</h3>
        </div>

        <ol className="ml-16 space-y-5 relative before:content-[''] before:absolute before:left-[-30px] before:top-0 before:bottom-0 before:w-px before:bg-[#383838]">
          {experience.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative before:content-[''] before:absolute before:left-[-33px] before:top-2 before:w-1.5 before:h-1.5 before:bg-gradient-to-r before:from-[#ffdb70] before:to-[#ffbb56] before:rounded-full before:shadow-[0_0_0_4px_#383838]"
            >
              <h4 className="text-white mb-1 leading-tight">{item.title}</h4>
              <p className="text-[#ffdb70] text-sm mb-2">{item.company}</p>
              <span className="text-[#d9a846] text-sm mb-2 block">{item.period}</span>
              <p className="text-[#d4d4d4] text-sm leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
            <div className="absolute inset-[1px] bg-[#202022] rounded-lg"></div>
            <BookOpen className="w-5 h-5 text-[#ffdb70] relative z-10" />
          </div>
          <h3 className="text-xl md:text-2xl text-white">Education</h3>
        </div>

        <ol className="ml-16 space-y-5 relative before:content-[''] before:absolute before:left-[-30px] before:top-0 before:bottom-0 before:w-px before:bg-[#383838]">
          {education.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative before:content-[''] before:absolute before:left-[-33px] before:top-2 before:w-1.5 before:h-1.5 before:bg-gradient-to-r before:from-[#ffdb70] before:to-[#ffbb56] before:rounded-full before:shadow-[0_0_0_4px_#383838]"
            >
              <h4 className="text-white mb-1 leading-tight">{item.title}</h4>
              <p className="text-[#ffdb70] text-sm mb-2">{item.degree}</p>
              <span className="text-[#d9a846] text-sm mb-2 block">{item.period}</span>
              <p className="text-[#d4d4d4] text-sm leading-relaxed">{item.description}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Certifications Section */}
      <section className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
            <div className="absolute inset-[1px] bg-[#202022] rounded-lg"></div>
            <Award className="w-5 h-5 text-[#ffdb70] relative z-10" />
          </div>
          <h3 className="text-xl md:text-2xl text-white">Certifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] p-4 rounded-xl shadow-lg"
            >
              <div className="absolute inset-[1px] bg-gradient-to-br from-[#2b2b2c] to-[#202022] rounded-xl"></div>
              <div className="relative">
                <h4 className="text-white mb-1 text-sm">{cert.title}</h4>
                <p className="text-[#d4d4d4] text-xs mb-1">{cert.issuer}</p>
                <span className="text-[#ffdb70] text-xs">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h3 className="text-xl md:text-2xl text-white mb-6">Technical Skills</h3>

        <div className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] p-5 rounded-2xl shadow-lg">
          <div className="absolute inset-[1px] bg-gradient-to-br from-[#2b2b2c] to-[#202022] rounded-2xl"></div>
          <ul className="relative space-y-4">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h5 className="text-white text-sm">{skill.name}</h5>
                  <data className="text-[#d4d4d4] text-sm">{skill.level}%</data>
                </div>
                <div className="bg-[#383838] h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] rounded-full"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </motion.article>
  );
}
