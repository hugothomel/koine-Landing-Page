'use client';
import { Body, LineMask } from './styles';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const MaskText = ({ phrases, tag }: { phrases: string[]; tag: string }) => {
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
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: '-10%', amount: 0.4 });
  return (
    <Body ref={body}>
      {phrases.map((phrase, index) => {
        return (
          <LineMask key={index}>
            {tag === 'h1' ? (
              <motion.h1
                variants={animate}
                initial="initial"
                animate={isInView ? 'open' : ''}
                custom={index}
              >
                {phrase}
              </motion.h1>
            ) : tag === 'h2' ? (
              <motion.h2
                variants={animate}
                initial="initial"
                animate={isInView ? 'open' : ''}
                custom={index}
              >
                {phrase}
              </motion.h2>
            ) : tag === 'h3' ? (
              <motion.h3
                variants={animate}
                initial="initial"
                animate={isInView ? 'open' : ''}
                custom={index}
              >
                {phrase}
              </motion.h3>
            ) : (
              <motion.p
                variants={animate}
                initial="initial"
                animate={isInView ? 'open' : ''}
                custom={index}
              >
                {phrase}
              </motion.p>
            )}
          </LineMask>
        );
      })}
    </Body>
  );
};

export default MaskText;
