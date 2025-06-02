'use client';
import { styled } from 'styled-components';

export const Body = styled.div`
  h1,
  p {
    will-change: transform, opacity, filter;
    transform-style: preserve-3d;
  }
`;

export const LineMask = styled.div`
  overflow: visible;
  perspective: 1000px;
  transform-style: preserve-3d;
`;
