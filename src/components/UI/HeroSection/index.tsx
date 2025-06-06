'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Pill,
  HeroTextContainer,
  HeroImageContainer,
  CarouselImageItem,
} from './styles';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';

import heroImage from '../../../../public/images/Iterate on a project (Inspect mode) - Select element.svg';
import projectsImage from '../../../../public/images/Projects.svg';
import designSystemImage from '../../../../public/images/Design System.svg';
import integrationsImage from '../../../../public/images/Integrations.svg';
import createPrototypeImage from '../../../../public/images/Create a prototype.svg';

import { motion } from 'framer-motion';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const images = [
    createPrototypeImage, // New far left
    projectsImage,
    heroImage, // Center
    designSystemImage,
    integrationsImage, // New far right
  ];
  const [currentIndex, setCurrentIndex] = useState(2); // Start with heroImage as center

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const imageVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.8,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.8,
      };
    },
  };

  const baseTransition = { type: 'spring', stiffness: 300, damping: 30 };

  return (
    <Wrapper>
      <Inner>
        <Pill>
          <span>Introducing Koïnè Prototyping Agent</span>
        </Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <HeroImageContainer>
          {images.map((img, index) => {
            const offset = index - currentIndex;
            let x = '0%';
            let opacity = 0;
            let scale = 0.7; // Default scale for far images
            let zIndex = 0;

            // Normalize offset to handle wrap-around for a 5-image setup
            let normalizedOffset = offset;
            if (images.length === 5) {
              if (offset < -2) normalizedOffset = offset + 5;
              if (offset > 2) normalizedOffset = offset - 5;
            }


            if (normalizedOffset === 0) {
              // Current image (center)
              x = '0%';
              opacity = 1;
              scale = 1;
              zIndex = 3; // Highest zIndex for the central image
            } else if (normalizedOffset === -1) {
              // Image to the immediate left
              x = '-50%'; // Adjust as needed
              opacity = 0.6;
              scale = 0.9;
              zIndex = 2;
            } else if (normalizedOffset === 1) {
              // Image to the immediate right
              x = '50%'; // Adjust as needed
              opacity = 0.6;
              scale = 0.9;
              zIndex = 2;
            } else if (normalizedOffset === -2) {
              // Image to the far left
              x = '-90%'; // Adjust as needed
              opacity = 0.3; // Faded
              scale = 0.8;
              zIndex = 1;
            } else if (normalizedOffset === 2) {
              // Image to the far right
              x = '90%'; // Adjust as needed
              opacity = 0.3; // Faded
              scale = 0.8;
              zIndex = 1;
            } else {
              // Should not happen with 5 images and correct normalization
              // but as a fallback, keep them out of view
              x = normalizedOffset < 0 ? '-150%' : '150%';
              opacity = 0;
              scale = 0.7;
              zIndex = 0;
            }

            if (isMobile) {
              // For mobile, only show the central image clearly
              if (normalizedOffset === 0) {
                x = '0%';
                opacity = 1;
                scale = 1;
                zIndex = 1;
              } else {
                x = normalizedOffset < 0 ? '-100%' : '100%';
                opacity = 0;
                scale = 0.8;
                zIndex = 0;
              }
            }

            return (
              <CarouselImageItem
                key={img.src}
                animate={{
                  x,
                  opacity,
                  scale,
                  zIndex,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <Image src={img} alt={`Koiné Carousel Image ${index + 1}`} layout="fill" objectFit="contain" />
              </CarouselImageItem>
            );
          })}
        </HeroImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
