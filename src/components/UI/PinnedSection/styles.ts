'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: var(--bg-color);
`;

export const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--white);
`;

export const Text = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;
