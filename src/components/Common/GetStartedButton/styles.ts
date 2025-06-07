'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: var(--green);
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    min-height: 44px; /* Ensure touch target size */
  }

  @media (max-width: 375px) {
    font-size: 0.85rem;
    min-height: 44px; /* Ensure touch target size */
  }
`;
