'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Wrapper, Panel, Text } from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import planningImg from '../../../../public/images/financial_planning.png';
import paymentsImg from '../../../../public/images/seamless_payments.png';
import wealthImg from '../../../../public/images/wealth_management.png';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { text: 'Plan your finances', img: planningImg },
  { text: 'Handle payments easily', img: paymentsImg },
  { text: 'Grow your wealth', img: wealthImg },
];

const PinnedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panels = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${slides.length * 100}%`,
          scrub: true,
          pin: true,
        },
      });

      panels.current.forEach((panel, i) => {
        tl.fromTo(
          panel,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 0.5 }
        );
        if (i !== panels.current.length - 1) {
          tl.to(panel, { autoAlpha: 0, y: -50, duration: 0.5 }, '+=0.5');
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper ref={containerRef}>
      {slides.map((s, i) => (
        <Panel key={i} ref={(el) => (panels.current[i] = el!)}>
          <div style={{ position: 'relative', width: '200px', height: '200px' }}>
            <Image src={s.img} alt={s.text} fill />
          </div>
          <Text>{s.text}</Text>
        </Panel>
      ))}
    </Wrapper>
  );
};

export default PinnedSection;
