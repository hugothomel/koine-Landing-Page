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
  max-width: 1400px;
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
  flex: 0 0 400px;
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
  width: 100%;
  height: 700px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
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
    // Ensure all refs are populated before starting GSAP animations
    if (!sectionRef.current || !titleRef.current || !subtitleRef.current || !descriptionRef.current || !imageRef.current) {
      return;
    }

    // Capture current refs to avoid issues if component unmounts during async GSAP setup (though less likely here)
    const currentSectionRef = sectionRef.current;
    const currentTitleRef = titleRef.current;
    const currentSubtitleRef = subtitleRef.current;
    const currentDescriptionRef = descriptionRef.current;
    const currentImageRef = imageRef.current;

    const ctx = gsap.context(() => {
      // Initial state for elements before any animation starts (applies to the first slide's content)
      gsap.set([currentTitleRef, currentSubtitleRef, currentDescriptionRef], {
        y: 50,
        opacity: 0
      });
      gsap.set(currentImageRef, {
        scale: 0.8,
        rotation: -10,
        opacity: 0
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: currentSectionRef,
          start: 'top top',
          end: `+=${slideData.length * 1500}vh`, // Each slide gets roughly 300vh of scroll space
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          snap: {
            snapTo: "labels", // Snap to the closest label in the timeline
            duration: { min: 0.2, max: 0.8 }, // Duration of the snap animation (can be a range)
            delay: 0.1, // Delay before snapping
            ease: "power1.inOut" // Easing for the snap animation
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const slideIndex = Math.floor(progress * slideData.length);
            const clampedIndex = Math.min(slideIndex, slideData.length - 1);
            
            // Update React state to change content. GSAP continues animating the same elements.
            // This does not re-trigger the useEffect because of the empty dependency array.
            setCurrentSlide(clampedIndex);
          }
        }
      });

      slideData.forEach((_, index) => {
        const P_slide = 1 / slideData.length; // Proportion of timeline for one slide
        const slideTimelineStart = index * P_slide; // Start time for this slide in the main timeline

        // Define the start of the "hold" period for this slide
        const holdStartTime = slideTimelineStart + P_slide * 0.20;

        // Add a label at the start of the hold period for snapping
        tl.addLabel(`slide-${index}-hold`, holdStartTime);

        // Entry Animations (0% to 20% of this slide's time slot)
        tl.fromTo([currentTitleRef, currentSubtitleRef, currentDescriptionRef],
          { y: 50, opacity: 0 }, // FROM state
          { 
            y: 0, 
            opacity: 1, 
            duration: P_slide * 0.20, 
            ease: 'power2.out'
          },
          slideTimelineStart) // Position at the start of this slide's segment
        .fromTo(currentImageRef,
          { scale: 0.8, rotation: -10, opacity: 0 }, // FROM state
          { 
            scale: 1, 
            rotation: 0, 
            opacity: 1, 
            duration: P_slide * 0.20, 
            ease: 'back.out(1.7)'
          },
          slideTimelineStart); // Concurrent with text entry

        // Hold & Wiggle Animations (20% to 80% of this slide's time slot)
        // This phase has a duration of P_slide * 0.60
        
        tl.to(currentImageRef, { // First part of wiggle
            scale: 1.1,
            rotation: 5,
            duration: P_slide * 0.30, 
            ease: 'power2.inOut'
          }, holdStartTime)
        .to(currentImageRef, { // Second part of wiggle
            scale: 1,
            rotation: 0,
            duration: P_slide * 0.30,
            ease: 'power2.inOut'
          }, holdStartTime + P_slide * 0.30); // Starts after the first wiggle finishes
        
        // Exit Animations (80% to 100% of this slide's time slot)
        // Only apply if it's NOT the last slide (the last slide should remain visible)
        if (index < slideData.length - 1) {
          const exitStartTime = slideTimelineStart + P_slide * 0.80;
          tl.to([currentTitleRef, currentSubtitleRef, currentDescriptionRef], {
            opacity: 0,
            y: -20, // Text elements animate upwards on exit
            duration: P_slide * 0.20,
            ease: 'power2.inOut'
          }, exitStartTime)
          .to(currentImageRef, {
            opacity: 0,
            scale: 0.9,
            rotation: 5, // Image element scales down and rotates slightly on exit
            duration: P_slide * 0.20,
            ease: 'power2.inOut'
          }, exitStartTime); // Concurrent with text exit
        }
      });

    }, currentSectionRef); // Scope GSAP context to the main section element

    return () => {
      if (ctx && ctx.revert) {
        ctx.revert(); // Clean up GSAP animations and ScrollTrigger on component unmount
      }
    };
  }, []); // Empty dependency array: ensures this effect runs only once on mount and unmount

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