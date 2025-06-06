import {
  FAQ,
  FinancialFuture,
  HeroSection,
  // IntroSection,
  JoinSection,
  OffersSection,
  StatsSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <OffersSection />
      <FinancialFuture />
      {/* <IntroSection /> */}
      <JoinSection />
      <FAQ />
    </main>
  );
}
