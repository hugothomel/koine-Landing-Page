'use client';
import { styled } from 'styled-components';
import card_grid from '../../../../public/images/card_grid.png';
import heroImage1 from '../../../../public/images/Iterate on a project (Inspect mode) - Select element.svg';
import heroImage2 from '../../../../public/images/Design System.svg';

export const Wrapper = styled.section`
  padding-top: 3rem;

  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 56rem;
  margin-bottom: 6.25rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Card = styled.div`
  height: 41.875rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  background: #131313;

  @media (max-width: 768px) {
    height: 27.5rem;
  }
`;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32.25rem;
  margin: 3.25rem 3.25rem 2.94rem 3.25rem;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.75rem;
    color: white;
  }

  p {
    color: white;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    margin: 1.5rem 1.5rem 1.75rem 1.5rem;

    h3 {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const SVGCtn = styled.div`
  background: url(${card_grid.src});
  height: 24.55rem;
  display: grid;
  place-items: center;

  img {
    width: 12rem;
    height: 12rem;
    filter: brightness(0) invert(1);
  }

  @media (max-width: 768px) {
    height: 15.28219rem;
    background-position: center center;
    background-size: contain;

    img {
      width: 10rem;
      height: 10rem;
      filter: brightness(0) invert(1);
    }
  }
`;

export const Stats = styled.div`
  margin: 3rem auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-items: center;
    align-items: start;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  h1 {
    font-size: 5rem;
    font-weight: 600;
  }

  p {
    color: var(--link-color);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  // Medium screens (e.g., iPad landscape)
  @media (min-width: 769px) and (max-width: 1024px) {
    h1 {
      font-size: 3.5rem; // Intermediate font size for numbers
    }
    p {
      font-size: 1rem; // Intermediate font size for subtitles
    }
  }

  // Small screens (e.g., iPad portrait, phones)
  @media (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.75rem;
    }
    /* Add margin-bottom if gap in parent is not enough or for more specific control */
    /* margin-bottom: 1.5rem; */ 
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
`;

// export const Number = styled.h1`
//   font-size: 5rem;
//   font-weight: 600;
// `;

// export const SubTitle = styled.p`
//   color: var(--link-color);
//   font-size: 1.125rem;
//   font-weight: 500;
//   text-transform: uppercase;
// `;

export const Banner = styled.div`
  height: 45rem;
  width: 100%;
  position: relative;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 31.25rem;
    img {
      object-fit: contain;
    }
  }
`;
