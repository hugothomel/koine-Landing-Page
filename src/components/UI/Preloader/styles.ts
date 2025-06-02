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
`;

export const Inner = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 0 32px;
  overflow: hidden;
  height: 320px;

  img {
    width: 400px;
    height: 400px;
  }

  div {
    overflow: hidden;
    display: flex;
    align-items: center;

    div {
      font-family: 'PP Mori', 'Inter', sans-serif;
      font-weight: 600;
      font-size: 400px;
      color: var(--primary);
    }
  }

  @media (max-width: 768px) {
    gap: 16px;
    height: 208px;
    img {
      width: 112px;
      height: 100%;
    }

    div {
      div {
        font-size: 96px;
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
`;
