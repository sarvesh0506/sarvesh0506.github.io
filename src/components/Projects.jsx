import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTimes } from 'react-icons/fa';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Real-Time Data Drift Detection",
    description: "Developed a real-time system to monitor deployed Machine Learning models by detecting data drift using Population Stability Index (PSI) and Kolmogorov-Smirnov Test (KS Test). Alerts engineering teams when data distributions skew.",
    image: "/drift.png",
    technologies: ["Python", "Flask", "Scikit-learn", "NumPy", "Pandas", "SciPy", "Matplotlib"],
    github: "https://github.com/sarvesh0506",
    longDescription: "This project solves a critical problem in Machine Learning engineering: silent model degradation. When models are deployed in production, incoming real-world data distributions drift away from the training distribution over time, leading to lower prediction accuracy. This system acts as a real-time monitor that consumes incoming data streams, calculates statistical indicators, and triggers alerts if data drift is detected.",
    keyFeatures: [
      "Statistical Drift Profiling: Calculates Population Stability Index (PSI) and Kolmogorov-Smirnov (KS) tests between reference and production datasets.",
      "Real-time Dashboarding: Renders continuous metric streams representing feature-level distribution differences.",
      "Automatic Alert Engine: Integrates alert notifications (email/slack) to warn engineers when deviation limits are exceeded.",
      "High Performance Streaming: Designed to evaluate statistical skews on thousands of samples per second."
    ]
  },
  {
    id: 2,
    title: "Driver Drowsiness Detection System",
    description: "Built a real-time driver monitoring system using facial landmark detection and Eye Aspect Ratio (EAR) to detect drowsiness and fatigue. Automatically triggers alarm audio alerts to prevent road accidents.",
    image: "/drowsiness.png",
    technologies: ["Python", "OpenCV", "Dlib"],
    github: "https://github.com/sarvesh0506",
    longDescription: "Fatigue is one of the leading causes of road accidents worldwide. This project focuses on building a real-time, lightweight computer vision application that can run on edge devices inside vehicles to monitor driver alertness. By analyzing facial landmarks, the model calculates physical metrics to evaluate drowsiness in real time and trigger immediate audible warnings.",
    keyFeatures: [
      "Facial Landmark Estimation: Utilizes Dlib's pre-trained 68 landmark predictor to accurately track facial coordinates.",
      "Eye Aspect Ratio (EAR) Calculation: Tracks the distance between eyelids to identify eye blinks and long-duration eye closure.",
      "Auditory Alarm Integration: Instantly triggers alert sound loops if eyelids remain closed for a consecutive sequence of frames.",
      "Lightweight Optimization: Optimized using OpenCV processing threads to ensure real-time performance of 30+ frames per second on standard laptop webcams."
    ]
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] bg-coca-red/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.84, y: 80 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-coca-red font-display text-sm font-bold tracking-widest uppercase mb-2">
            My Creations
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white">
            Recent Projects
          </h2>
          <div className="w-16 h-1 bg-coca-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onClick={() => setActiveProject(project)}
              className="glass-card flex flex-col rounded-2xl overflow-hidden hover:border-coca-red/40 group h-full cursor-pointer transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Project Content Info */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Title */}
                  <h3 className="font-display font-black text-white text-xl md:text-2xl mb-3 group-hover:text-coca-red transition-colors duration-300">
                    {project.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-coca-red/10 border border-coca-red/20 text-coca-red uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase bg-transparent text-white border border-white/10 hover:border-coca-red hover:text-coca-red transition-all duration-300"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <span className="text-coca-red group-hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1.5">
                    Read Review <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal / Detailed Review Popup */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="glass-card max-w-2xl w-full rounded-2xl border border-white/10 relative overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Top Banner Accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-coca-red to-coca-dark" />

              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl p-2 rounded-full hover:bg-white/5 transition-colors duration-300 cursor-pointer"
              >
                <FaTimes />
              </button>

              {/* Content Container (Scrollable) */}
              <div className="p-8 overflow-y-auto custom-scrollbar flex-grow">
                {/* Title */}
                <h3 className="font-display font-black text-white text-2xl md:text-3xl mb-2 pr-8">
                  {activeProject.title}
                </h3>
                <p className="text-coca-red font-display text-xs font-bold uppercase tracking-widest mb-6">
                  Detailed Project Review
                </p>

                {/* Long description */}
                <div className="mb-6">
                  <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-2">Overview</h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-light text-justify">
                    {activeProject.longDescription}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-3">Key Features & Technical Breakdown</h4>
                  <ul className="space-y-2">
                    {activeProject.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-300 text-sm font-light leading-relaxed">
                        <span className="text-coca-red mt-1.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-3">Technologies Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-coca-red/10 border border-coca-red/20 text-coca-red uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="p-6 border-t border-white/5 bg-matte-black/40 flex justify-between items-center gap-4">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase bg-coca-red text-white hover:bg-coca-dark transition-all duration-300 shadow-[0_0_15px_rgba(228,30,38,0.2)]"
                >
                  <FaGithub /> View GitHub
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase bg-transparent text-gray-400 border border-white/10 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
