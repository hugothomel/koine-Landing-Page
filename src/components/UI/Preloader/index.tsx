'use client';
import Image from 'next/image';
import ic_import from '../../../../public/svgs/ic_import.svg';

import { Wrapper, Inner, SecondOverlay } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const word = ['K', 'o', 'ï', 'n', 'è']; // Koïnè letters

  const spans = useRef<any>([]); // Create a ref to store the span elements
  const imageRef = useRef(null);
  const secondOverlayRef = useRef(null);
  const wrapperRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial dramatic states for each letter
    spans.current.forEach((span: HTMLElement, index: number) => {
      if (span) {
        gsap.set(span, {
          opacity: 0,
          y: 150,
          scale: 0.2,
          rotationX: 120,
          rotationZ: 45,
          filter: 'blur(20px)',
          color: 'var(--primary)',
          textShadow: '0 0 30px var(--primary)',
          transformOrigin: 'center center'
        });
      }
    });
    
    // First animate the icon rotation
    tl.to(imageRef.current, {
      rotate: '360deg',
      ease: 'back.out(1.7)',
      duration: 1.4,
    });
    
    // Move the icon up
    tl.to(imageRef.current, {
      y: '-100%',
      ease: 'back.out(1.7)',
      duration: 0.8,
    });
    
    // Spectacular entrance animation for "Koïnè" letters
    tl.to(spans.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      rotationZ: 0,
      filter: 'blur(0px)',
      duration: 1.8,
      stagger: {
        amount: 0.6,
        from: 'random',
        ease: 'power3.out'
      },
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.3')
    
    // Shimmer effect across letters
    .to(spans.current, {
      textShadow: '0 0 20px var(--primary), 0 0 40px var(--primary), 0 0 60px var(--primary)',
      duration: 0.4,
      stagger: 0.05,
      ease: 'power2.inOut'
    }, '-=1.2')
    
    // Color transition to final state with glow
    .to(spans.current, {
      color: 'var(--primary)',
      textShadow: '0 2px 8px rgba(111, 111, 230, 0.4), 0 0 20px rgba(111, 111, 230, 0.2)',
      duration: 0.8,
      stagger: 0.03,
      ease: 'power2.inOut'
    }, '-=0.8')
    
    // Floating animation
    .to(spans.current, {
      y: -12,
      rotation: (index) => (index % 2 === 0 ? 2 : -2),
      duration: 1.5,
      stagger: 0.08,
      ease: 'sine.inOut',
      repeat: 1,
      yoyo: true
    }, '-=0.4')
    
    // Final settle and prepare for exit
    .to(spans.current, {
      y: 0,
      rotation: 0,
      duration: 0.4,
      ease: 'power2.out'
    })
    
    // Exit animation - letters fly up dramatically
    .to(spans.current, {
      y: '-200%',
      opacity: 0,
      scale: 0.8,
      rotationY: 180,
      filter: 'blur(10px)',
      duration: 1.0,
      stagger: 0.04,
      ease: 'power2.in'
    }, '+=0.1');
    
    // Animate both overlays to reveal the main content
    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'back.out(1.7)',
      duration: 1,
      stagger: 0.2,
      onComplete: () => {
        setComplete(true);
      },
    }, '-=0.8');

    // Fine-tune the second overlay timing
    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 1,
      delay: -0.9,
    });

    // Add cursor follow effect (optional enhancement)
    const handleMouseMove = (e: MouseEvent) => {
      if (textContainerRef.current) {
        const rect = (textContainerRef.current as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        spans.current.forEach((span: HTMLElement, index: number) => {
          if (span) {
            const spanRect = span.getBoundingClientRect();
            const spanX = spanRect.left + spanRect.width / 2 - rect.left;
            const spanY = spanRect.top + spanRect.height / 2 - rect.top;
            const distance = Math.sqrt((x - spanX) ** 2 + (y - spanY) ** 2);
            const influence = Math.max(0, 100 - distance);
            
            gsap.to(span, {
              scale: 1 + (influence * 0.002),
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });
      }
    };

    // Add mouse interaction
    document.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setComplete]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          <Image ref={imageRef} src={ic_import} alt="import icon" />
          <div ref={textContainerRef}>
            {word.map((letter, i) => (
              <div
                key={i}
                ref={(element) => (spans.current[i] = element)}
                style={{
                  display: 'inline-block',
                  transformStyle: 'preserve-3d',
                  cursor: 'default'
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </Inner>
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef}></SecondOverlay>
    </>
  );
};

export default Preloader;
