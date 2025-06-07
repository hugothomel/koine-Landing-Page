'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  /* margin-top: 6.25rem; Removed */

  /* @media (max-width: 480px) {
    margin-top: 5rem; Removed
  }

  @media (max-width: 375px) {
    margin-top: 4rem; Removed
  } */
`;

export const Inner = styled.div`
  background: var(--Background);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const EllipseBase = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(128px);
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  opacity: 0.4;
`;

export const Ellipse1 = styled(EllipseBase)`
  top: -15%;
  left: 30%;
  width: 40vw;
  height: 40vw;
  max-width: 600px;
  max-height: 600px;
  opacity: 0.4;
`;

export const Ellipse2 = styled(EllipseBase)`
  top: 20%;
  right: -10%;
  width: 30vw;
  height: 30vw;
  max-width: 400px;
  max-height: 400px;
  filter: blur(64px);
  opacity: 0.3;
`;

export const Ellipse3 = styled(EllipseBase)`
  bottom: -10%;
  left: 10%;
  width: 25vw;
  height: 25vw;
  max-width: 300px;
  max-height: 300px;
  filter: blur(32px);
  opacity: 0.35;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.25rem;

  @media (max-width: 480px) {
    margin-top: 5rem;
  }

  @media (max-width: 375px) {
    margin-top: 4rem;
  }
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

  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem;
    gap: 0.375rem;
    margin-bottom: 0.75rem;

    span {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 375px) {
    padding: 0.25rem 0.5rem;
    gap: 0.25rem;
    margin-bottom: 0.5rem;

    span {
      font-size: 0.8rem;
    }
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  max-width: 56rem;
  width: 100%;
  padding: 0 1rem;

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

  @media (max-width: 480px) {
    gap: 0.75rem;
    padding: 0 1rem 1rem;
    h1 {
      font-size: 2rem;
      line-height: 1.1;
      font-weight: 400;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.4rem;
    }
  }

  @media (max-width: 375px) {
    gap: 0.5rem;
    padding: 0 0.75rem 0.75rem;
    h1 {
      font-size: 1.75rem;
      line-height: 1.1;
      font-weight: 400;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.3rem;
    }
  }
`;

export const HeroImageContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 500px;
  position: relative;
  overflow: visible;

  @media (max-width: 768px) {
    margin-top: 2rem;
    height: 350px;
  }

  @media (max-width: 480px) {
    margin-top: 1.5rem;
    height: 280px;
  }

  @media (max-width: 375px) {
    margin-top: 1rem;
    height: 240px;
  }

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

export const Stats = styled.div`
  margin: 4rem auto 2rem; /* Desktop: Was 6rem bottom, now 2rem */
  width: 90%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  @media (max-width: 768px) {
    margin: 3rem auto 1.5rem; /* Mobile: Was 4rem bottom, now 1.5rem */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-items: center;
    align-items: start;
    width: 100%;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem; /* Adjusted gap */

  h1 {
    font-size: 4rem; /* Slightly reduced for Hero context */
    font-weight: 600;
    color: var(--text-primary);
  }

  p {
    color: var(--link-color);
    font-size: 1rem; /* Slightly reduced */
    font-weight: 500;
    text-transform: uppercase;
  }

  // Medium screens (e.g., iPad landscape)
  @media (min-width: 769px) and (max-width: 1024px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 0.875rem;
    }
  }

  // Small screens (e.g., iPad portrait, phones)
  @media (max-width: 768px) {
    gap: 0.5rem; /* Adjusted gap for mobile */
    h1 {
      font-size: 2.5rem; /* Adjusted for Hero mobile */
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem; /* Desktop: Was 3rem */
  margin-bottom: 4rem; /* Desktop: Was 3rem margin + 3rem padding */
  /* padding-bottom: 3rem; Removed */

  @media (max-width: 768px) {
    margin-top: 1.5rem; /* Mobile: Was 2rem */
    margin-bottom: 3rem; /* Mobile: Was 2rem margin + 2rem padding */
    /* padding-bottom: 2rem; Removed */
  }
`;
