'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu
} from './styles';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { motion } from 'framer-motion';
import { links, menu } from './constants';
import { gsap } from 'gsap';
import ic_bars from '../../../../public/svgs/ic_bars.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <div>
            <h2 style={{ 
              fontFamily: 'PP Mori, Inter, sans-serif', 
              fontSize: '24px', 
              fontWeight: 600,
              color: 'var(--primary)'
            }}>
              Koïnè
            </h2>
          </div>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <AnimatedLink title="Login" />
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
