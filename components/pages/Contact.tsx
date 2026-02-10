import { motion } from 'motion/react';
import { useState } from 'react';
import { Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ fullname: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const isFormValid = formData.fullname && formData.email && formData.message;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-10">
        <h2 className="text-2xl md:text-3xl text-white capitalize relative pb-3">
          Contact
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-[#ffdb70] to-[#ffbb56] rounded-full"></span>
        </h2>
      </header>

      <section className="mb-10">
        <figure className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden border border-[#2b2b2c]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7883.813237290002!2d38.803937157094744!3d8.888273914568382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b82a7e392203f%3A0xb05f440eacc98f9f!2sAddis%20Ababa%20Science%20and%20Technology%20University!5e0!3m2!1sen!2set!4v1719393348888!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section>
        <h3 className="text-xl md:text-2xl text-white mb-6">Contact Form</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full name"
              value={formData.fullname}
              onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
              required
              className="bg-transparent border border-[#2b2b2c] rounded-2xl px-5 py-3 text-white placeholder:text-[#6e6e6e] focus:border-[#ffdb70] outline-none transition-colors"
            />

            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-transparent border border-[#2b2b2c] rounded-2xl px-5 py-3 text-white placeholder:text-[#6e6e6e] focus:border-[#ffdb70] outline-none transition-colors"
            />
          </div>

          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={6}
            className="w-full bg-transparent border border-[#2b2b2c] rounded-2xl px-5 py-3 text-white placeholder:text-[#6e6e6e] focus:border-[#ffdb70] outline-none transition-colors resize-y min-h-[100px] max-h-[200px]"
          />

          <button
            type="submit"
            disabled={!isFormValid}
            className="relative bg-gradient-to-br from-[#383838] to-[#2b2b2c] text-[#ffdb70] px-5 py-3 rounded-2xl shadow-lg hover:bg-gradient-to-br hover:from-[#ffdb70] hover:to-[#ffbb56] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-3 ml-auto group"
          >
            <div className="absolute inset-[1px] bg-gradient-to-br from-[#2b2b2c] to-[#202022] rounded-2xl group-hover:from-[#ffbb56] group-hover:to-[#ffa32e] transition-all"></div>
            <Send className="w-4 h-4 relative z-10 group-hover:text-white transition-colors" />
            <span className="relative z-10 capitalize group-hover:text-white transition-colors">
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
            </span>
          </button>
        </form>
      </section>
    </motion.article>
  );
}
