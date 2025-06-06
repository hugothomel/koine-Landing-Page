'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Pill,
  HeroTextContainer,
  HeroImageContainer,
  CarouselImageItem,
  CarouselNav,
  CarouselButton,
} from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
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

import { motion } from 'framer-motion';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const images = [heroImage, projectsImage, designSystemImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

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
            let scale = 0.8;
            let zIndex = 0;

            if (offset === 0) { // Current image
              x = '0%';
              opacity = 1;
              scale = 1;
              zIndex = 2;
            } else if (offset === -1 || (currentIndex === 0 && index === images.length - 1)) { // Previous image
              x = '-60%';
              opacity = 0.4;
              scale = 0.8;
              zIndex = 1;
            } else if (offset === 1 || (currentIndex === images.length - 1 && index === 0)) { // Next image
              x = '60%';
              opacity = 0.4;
              scale = 0.8;
              zIndex = 1;
            } else { // Other images (far left/right)
              x = offset < 0 ? '-120%' : '120%';
              opacity = 0;
              scale = 0.7;
              zIndex = 0;
            }
            
            if (isMobile && offset !== 0) {
                opacity = 0; 
                x = offset < 0 ? '-100%' : '100%';
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
        <CarouselNav>
          <CarouselButton onClick={prevImage}>Previous</CarouselButton>
          <CarouselButton onClick={nextImage}>Next</CarouselButton>
        </CarouselNav>
        {/* <GetStartedButton padding="1rem 2rem" /> */}
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
