import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('pointermove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('pointermove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] drop-shadow-[0_4px_10px_rgba(0,0,0,0.55)]"
      style={{
        left: cursorX,
        top: cursorY,
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Metal Bottle Cap Crimped Skirt (Teeth) */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i * 2 * Math.PI) / 20;
          const x = 50 + 41 * Math.cos(angle);
          const y = 50 + 41 * Math.sin(angle);
          return <circle key={i} cx={x} cy={y} r="6" fill="#D1D5DB" />;
        })}
        
        {/* Main Red Cap Surface */}
        <circle cx="50" cy="50" r="38" fill="#E41E26" stroke="#B71C1C" strokeWidth="1" />
        
        {/* Cap Rim Inner Graphic */}
        <circle cx="50" cy="50" r="33" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
        
        {/* Dynamic Ribbon Logo Wave */}
        <path d="M22,58 C32,58 36,42 50,42 C64,42 68,54 78,46 C70,54 62,56 50,56 C38,56 32,48 22,58 Z" fill="#FFFFFF" />
      </svg>
    </motion.div>
  );
}
