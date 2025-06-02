'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(--white);
  color: var(--text-primary);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  perspective: 1000px;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 0 32px;
  overflow: hidden;
  height: 320px;
  perspective: 1200px;
  transform-style: preserve-3d;

  img {
    width: 400px;
    height: 400px;
    filter: drop-shadow(0 4px 12px rgba(111, 111, 230, 0.3));
    transition: filter 0.3s ease;
  }

  div {
    overflow: visible;
    display: flex;
    align-items: center;
    perspective: 1500px;
    transform-style: preserve-3d;

    div {
      font-family: 'PP Mori', 'Inter', sans-serif;
      font-weight: 600;
      font-size: 400px;
      color: var(--primary);
      letter-spacing: -0.02em;
      transform-style: preserve-3d;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      backface-visibility: hidden;
      will-change: transform, opacity, filter;
      
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, var(--primary) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      
      &:hover {
        transform: translateZ(20px) scale(1.05);
        filter: drop-shadow(0 8px 24px rgba(111, 111, 230, 0.4));
      }
      
      &.glowing {
        animation: pulse-glow 2s ease-in-out infinite;
      }
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      text-shadow: 
        0 0 10px rgba(111, 111, 230, 0.3),
        0 0 20px rgba(111, 111, 230, 0.2),
        0 0 30px rgba(111, 111, 230, 0.1);
    }
    50% {
      text-shadow: 
        0 0 20px rgba(111, 111, 230, 0.6),
        0 0 40px rgba(111, 111, 230, 0.4),
        0 0 60px rgba(111, 111, 230, 0.2);
    }
  }

  @media (max-width: 768px) {
    gap: 16px;
    height: 208px;
    perspective: 800px;
    
    img {
      width: 112px;
      height: 100%;
    }

    div {
      perspective: 1000px;
      
      div {
        font-size: 96px;
        
        &:hover {
          transform: translateZ(10px) scale(1.03);
        }
      }
    }
  }
`;

export const SecondOverlay = styled.div`
  background: var(--primary);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
  
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
`;
