'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 6rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
  }
`;
