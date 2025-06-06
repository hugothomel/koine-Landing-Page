'use client';
import { useEffect, useRef, useState } from 'react';
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

// Data for the scrubbing animation
const slideData = [
  {
    title: "AI-Powered Creation",
    subtitle: "Intelligent Prototyping",
    description: "Transform concepts into interactive prototypes at the speed of thought with our intelligent AI assistant.",
    image: "/svgs/onboarding/onboarding_1.svg"
  },
  {
    title: "Seamless Integration", 
    subtitle: "Connected Workflows",
    description: "Connect with Figma, Notion, Linear and other tools to create a unified workflow that accelerates innovation.",
    image: "/svgs/onboarding/onboarding_2.svg"
  },
  {
    title: "Universal Access",
    subtitle: "Breaking Barriers",
    description: "Break down barriers between disciplines. Whether you're a strategist, marketer, or founder - create without limits.",
    image: "/svgs/onboarding/onboarding_3.svg"
  },
  {
    title: "Instant Collaboration",
    subtitle: "Team Ready",
    description: "Generate interactive prototypes with documentation and development tickets ready for your team to execute.",
    image: "/svgs/onboarding/onboarding_4.svg"
  }
];

const ScrubbingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Create main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=400vh',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Calculate which slide should be active based on scroll progress
            const progress = self.progress;
            const slideIndex = Math.floor(progress * slideData.length);
            const clampedIndex = Math.min(slideIndex, slideData.length - 1);
            
            if (clampedIndex !== currentSlide) {
              setCurrentSlide(clampedIndex);
            }
          }
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

      // Create animation sequence for each slide
      slideData.forEach((_, index) => {
        const slideDuration = 1 / slideData.length; // Each slide takes 25% of timeline
        const slideStart = index * slideDuration;
        
        // Fade in content for this slide
        tl.to([titleRef.current, subtitleRef.current, descriptionRef.current], {
          y: 0,
          opacity: 1,
          duration: slideDuration * 0.3,
          ease: 'power2.out'
        }, slideStart)
        .to(imageRef.current, {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: slideDuration * 0.4,
          ease: 'back.out(1.7)'
        }, slideStart + slideDuration * 0.1)
        .to(imageRef.current, {
          scale: 1.1,
          rotation: 5,
          duration: slideDuration * 0.3,
          ease: 'power2.inOut'
        }, slideStart + slideDuration * 0.4)
        .to(imageRef.current, {
          scale: 1,
          rotation: 0,
          duration: slideDuration * 0.3,
          ease: 'power2.inOut'
        }, slideStart + slideDuration * 0.6);
        
        // Fade out content (except for last slide)
        if (index < slideData.length - 1) {
          tl.to([titleRef.current, subtitleRef.current, descriptionRef.current, imageRef.current], {
            opacity: 0,
            y: -20,
            scale: 0.9,
            duration: slideDuration * 0.2,
            ease: 'power2.inOut'
          }, slideStart + slideDuration * 0.8);
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [currentSlide]);

  const currentSlideData = slideData[currentSlide];

  return (
    <Wrapper ref={sectionRef}>
      <Inner>
        <TextContainer>
          <Title ref={titleRef}>{currentSlideData.title}</Title>
          <Subtitle ref={subtitleRef}>{currentSlideData.subtitle}</Subtitle>
          <Description ref={descriptionRef}>
            {currentSlideData.description}
          </Description>
        </TextContainer>
        <ImageContainer ref={imageRef}>
          <Image 
            src={currentSlideData.image} 
            alt={currentSlideData.title} 
            fill
            style={{ objectFit: 'contain' }}
          />
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default ScrubbingSection; 