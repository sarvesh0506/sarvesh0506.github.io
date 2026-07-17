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
      className="fixed top-0 left-0 w-14 h-14 pointer-events-none z-[9999]"
      style={{
        left: cursorX,
        top: cursorY,
        translateX: "-15%",
        translateY: "-15%",
      }}
    >
      <img 
        src="/coke_cap_cursor.png" 
        alt="Coca-Cola Cap Pointer" 
        className="w-full h-full object-contain filter drop-shadow-[0_3px_8px_rgba(228,30,38,0.4)]"
      />
    </motion.div>
  );
}
