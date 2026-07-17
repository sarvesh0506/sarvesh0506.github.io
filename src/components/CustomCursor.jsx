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
      className="fixed top-0 left-0 w-12 h-12 pointer-events-none -translate-x-1/2 -translate-y-[10%] z-[9999] drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]"
      style={{
        left: cursorX,
        top: cursorY,
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Metal Bottle Cap */}
        <path d="M 47,10 L 53,10 L 53,14 L 47,14 Z" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="0.5" />
        
        {/* Glass Contour Bottle Shape */}
        <path 
          d="M 47,14 L 53,14 Q 55,17 52,22 L 52,28 Q 53,32 59,40 Q 57,50 57,56 Q 55,68 54,82 L 54,85 L 46,85 L 46,82 Q 45,68 43,56 Q 43,50 41,40 Q 47,32 48,28 L 48,22 Q 45,17 47,14 Z" 
          fill="#E41E26" 
          stroke="#FFFFFF" 
          strokeWidth="1.2" 
        />
        
        {/* White Label Band */}
        <path d="M 42.3,47 C 46,49 54,49 57.7,47 L 57,57 C 54,59 46,59 43,57 Z" fill="#FFFFFF" />
        
        {/* Red Script Text (Coca-Cola) */}
        <text 
          x="50" 
          y="53" 
          fill="#E41E26" 
          fontFamily="'Brush Script MT', 'Dancing Script', 'Playwrite', cursive, sans-serif" 
          fontSize="4.8" 
          fontWeight="900" 
          textAnchor="middle" 
          transform="rotate(-5 50 53)"
          letterSpacing="-0.2"
        >
          Coca-Cola
        </text>
        
        {/* Tiny ribbon under text */}
        <path d="M 45,54.5 Q 50,52.5 55,54.5" stroke="#E41E26" strokeWidth="0.4" fill="none" />
      </svg>
    </motion.div>
  );
}
