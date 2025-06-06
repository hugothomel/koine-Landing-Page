'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  margin-top: 6.25rem;
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: contain;
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: var(--primary);
    font-size: 1rem;
    font-weight: 400;
    vertical-align: middle;
  }

  img {
    filter: none;
    vertical-align: middle;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-size: 6rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #bdbdbd;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const HeroImageContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  max-width: 50rem; /* Viewport width for the centered image */
  height: 400px; /* Or use aspect-ratio, e.g., aspect-ratio: 16 / 9; */
  position: relative;
  overflow: hidden; /* Crucial for clipping side images */

  /* Remove direct img styling here if CarouselImageItem handles it */
`;

export const CarouselImageItem = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Each item takes full width of HeroImageContainer */
  height: 100%; /* Each item takes full height of HeroImageContainer */
  display: flex;
  justify-content: center;
  align-items: center;

  img { /* Styling for the Next/Image component if needed directly */
    display: block; /* Remove extra space below image */
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const CarouselNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem; /* Adjust spacing from image */
`;

export const CarouselButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-default);
  border-radius: 0.5rem;
  background: var(--Background);
  color: var(--text-primary);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: var(--light-gray);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
