'use client';
import { Body, LineMask } from './styles';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

const MaskText: React.FC<{ phrases: string[]; tag: string }> = ({ phrases, tag }) => {
  const animate = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      rotateX: 15,
      filter: 'blur(8px)',
    },
    open: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        delay: 0.15 * i, 
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.6, delay: 0.15 * i },
        scale: { duration: 0.8, delay: 0.15 * i, ease: 'backOut' },
        filter: { duration: 0.6, delay: 0.15 * i }
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      rotateX: 15,
      filter: 'blur(8px)',
      transition: { duration: 0.8 },
    },
  };
  const body = useRef<HTMLDivElement>(null);
  const isInView = useInView(body, { once: true, margin: '-10%' });
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <div ref={body}>
      {phrases.map((phrase, i) => (
        <div key={`${phrase}-${i}`} className="overflow-hidden">
          {/* <AnimatePresence> */}
            {/* {isInView && ( */}
              <motion.div
                custom={i}
                initial="initial"
                animate="open"
                exit="exit"
                variants={animate}
              >
                <Tag>
                  {phrase}
                </Tag>
              </motion.div>
            {/* )} */}
          {/* </AnimatePresence> */}
        </div>
      ))}
    </div>
  );
};

export default MaskText;
