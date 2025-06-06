'use client';
import Image from 'next/image';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h3 {
    color: var(--emerald);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

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

export const HeaderMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 7.77rem;
  width: 100%;
`;

export const LeftImage = styled(Image)`
  transform: rotate(270deg);
  position: absolute;
  top: 64px;
  transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &.active {
    transform: rotate(70.281deg) translate(-50%, 60%);
    top: 60%;
  }
`;

export const MiddleImage = styled(Image)`
  position: relative;
  z-index: 3;
  cursor: pointer;
`;

export const RightImage = styled(Image)`
  width: 21.875rem;
  height: 13.875rem;
  transform: rotate(90deg);
  top: 65px;
  position: absolute;
  transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &.active {
    transform: rotate(-70.281deg) translate(50%, 60%);
    top: 60%;
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 4rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--divider);
  border-radius: 0.5rem;
  background-color: var(--off-white);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem; /* Reset margin from Header h3 */
    text-transform: none; /* Reset text-transform from Header h3 */
    color: var(--text-primary); /* Reset color from Header h3 */
  }

  p {
    font-size: 1rem;
    color: var(--link-color);
    line-height: 1.5rem;
    margin: 0; /* Reset margin from Header p */
  }

  @media (max-width: 768px) {
    padding: 1rem;
    h3 {
      font-size: 1.125rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 1.5rem; /* Adjust icon size as needed */
    height: 1.5rem;
  }
`;
