'use client';

import React from 'react';
import Image from 'next/image';
// Import images directly
import offer_card_1 from '../../../../public/images/offer_card_grid_1.png';
import offer_card_2 from '../../../../public/images/offer_card_grid_2.png';
import offer_card_3 from '../../../../public/images/offer_card_grid_3.png';
import offer_card_4 from '../../../../public/images/offer_card_grid_4.png';

import {
  Wrapper,
  Inner,
  Heading,
  FeaturesGrid,
  FeatureItem,
} from './styles';

const featureData = [
  {
    imgSrc: offer_card_1,
    title: 'Feature One',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imgSrc: offer_card_2,
    title: 'Feature Two',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    imgSrc: offer_card_3,
    title: 'Feature Three',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    imgSrc: offer_card_4,
    title: 'Feature Four',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const FeatureSection = () => {
  // Add console log to verify component is being rendered
  console.log("FeatureSection is rendering");
  
  return (
    <Wrapper style={{ opacity: 1 }}> {/* Force opacity to 1 for visibility */}
      <Inner>
        <Heading style={{ opacity: 1, transform: 'translateY(0)' }}>Discover Our Features</Heading>
        <FeaturesGrid>
          {featureData.map((feature, index) => (
            <FeatureItem
              key={index}
              style={{ opacity: 1, transform: 'translateY(0)' }} // Force opacity and position
            >
              <Image 
                src={feature.imgSrc} 
                alt={feature.title} 
                width={200}
                height={150}
                style={{ objectFit: 'contain' }}
              />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </FeatureItem>
          ))}
        </FeaturesGrid>
      </Inner>
    </Wrapper>
  );
};

export default FeatureSection; 