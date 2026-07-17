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
      className="fixed top-0 left-0 w-9 h-9 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] drop-shadow-[0_0_12px_rgba(228,30,38,0.85)]"
      style={{
        left: cursorX,
        top: cursorY,
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#E41E26" stroke="#FFFFFF" stroke-width="2" />
        <path d="M15,62 C30,62 35,38 52,38 C68,38 72,52 85,42 C75,54 65,58 52,58 C38,58 30,48 15,62 Z" fill="#FFFFFF" />
      </svg>
    </motion.div>
  );
}
