import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Outer ring spring configuration for smooth lag
  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

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
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-coca-red pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-coca-red pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none shadow-[0_0_8px_#E41E26]"
        style={{
          left: cursorX,
          top: cursorY,
        }}
      />
      {/* Ambient Glow */}
      <motion.div
        className="cursor-glow"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />
    </>
  );
}
