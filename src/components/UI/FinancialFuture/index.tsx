'use client';
import Image from 'next/image';
import future_banner from '../../../../public/images/future_banner.png';
import future_mobile_banner from '../../../../public/images/future_mobile_banner.png';
import {
  Wrapper,
  Inner,
  Stats,
  Stat,
  Banner,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  cardsInfo,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  stats,
} from './constants';

const FinancialFuture = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={new Array(stat.number)} tag="h1" />
              <MaskText phrases={new Array(stat.subtitle)} tag="p" />
            </Stat>
          ))}
        </Stats>
      </Inner>
      {/* <Banner>
        {isMobile ? (
          <Image src={future_mobile_banner} alt="future_banner" fill />
        ) : (
          <Image src={future_banner} alt="future_banner" fill />
        )}
      </Banner> */}
    </Wrapper>
  );
};

export default FinancialFuture;
