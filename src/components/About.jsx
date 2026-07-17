import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCode } from 'react-icons/fa';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-coca-red/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Scroll Reveal Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.84, y: 80 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-coca-red font-display text-sm font-bold tracking-widest uppercase mb-2">
            Get To Know
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-coca-red mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light text-center">
            Computer Science and Engineering undergraduate at SRM Institute of Science and Technology with strong skills in Python, Machine Learning, Salesforce, Full Stack Development, and Data Science. Passionate about solving real-world problems through technology and continuously learning modern software development practices.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {/* Education Card */}
            <div className="glass-card p-6 flex flex-col items-center text-center rounded-xl hover:border-coca-red/40 group">
              <div className="w-12 h-12 rounded-full bg-coca-red/10 flex items-center justify-center text-coca-red text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-1">Education</h3>
              <p className="text-gray-400 text-xs mb-1">SRM Institute of Science &amp; Tech</p>
              <p className="text-gray-500 text-[10px]">B.Tech CSE (2023 - Present)</p>
            </div>

            {/* CGPA Card */}
            <div className="glass-card p-6 flex flex-col items-center text-center rounded-xl hover:border-coca-red/40 group">
              <div className="w-12 h-12 rounded-full bg-coca-red/10 flex items-center justify-center text-coca-red text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaAward />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-1">Academics</h3>
              <p className="text-gray-400 text-xs mb-1">7.6 CGPA</p>
              <p className="text-gray-500 text-[10px]">Current Cumulative Grade</p>
            </div>

            {/* Specialization Card */}
            <div className="glass-card p-6 flex flex-col items-center text-center rounded-xl hover:border-coca-red/40 group">
              <div className="w-12 h-12 rounded-full bg-coca-red/10 flex items-center justify-center text-coca-red text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaCode />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-1">Focus Areas</h3>
              <p className="text-gray-400 text-xs mb-1">Machine Learning</p>
              <p className="text-gray-500 text-[10px]">Salesforce &amp; Python Dev</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
