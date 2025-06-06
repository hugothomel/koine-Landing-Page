'use client';
import { Wrapper, Inner, Stats, Stat } from './styles';
import { stats } from './constants';
import MaskText from '@/components/Common/MaskText';
import GetStartedButton from '@/components/Common/GetStartedButton';

const StatsSection = () => {
  return (
    <Wrapper>
      <Inner>
        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={[stat.number]} tag="h1" />
              <MaskText phrases={[stat.subtitle]} tag="p" />
            </Stat>
          ))}
        </Stats>
        <GetStartedButton padding="1rem 2rem" label="Join the beta" />
      </Inner>
    </Wrapper>
  );
};

export default StatsSection;
