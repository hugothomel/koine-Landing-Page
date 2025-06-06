'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import styled from 'styled-components';

// Styled components (as provided by the user)
export const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 500px;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 400px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
  height: 400px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;


// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrubbingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Create main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom center',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Initial state - elements are hidden/transformed
      gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current], {
        y: 50,
        opacity: 0
      });
      
      gsap.set(imageRef.current, {
        scale: 0.8,
        rotation: -10,
        opacity: 0
      });

      // Animation sequence
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.1')
      .to(imageRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.7)'
      }, '-=0.2')
      .to(descriptionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.1')
      .to(imageRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: 'power2.inOut'
      })
      .to(imageRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper ref={sectionRef}>
      <Inner>
        <TextContainer>
          <Title ref={titleRef}>Scrubbing Animation</Title>
          <Subtitle ref={subtitleRef}>Scroll-controlled Timeline</Subtitle>
          <Description ref={descriptionRef}>
            This section demonstrates a GSAP timeline controlled by scroll position with pin enabled. 
            The entire section stays locked in view while the animation plays based on scroll progress.
          </Description>
        </TextContainer>
        <ImageContainer ref={imageRef}>
          <Image 
            src="/images/big_banner.png" 
            alt="Scrubbing demo" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default ScrubbingSection; 