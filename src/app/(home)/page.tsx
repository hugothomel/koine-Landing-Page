import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  // IntroSection,
  JoinSection,
  OffersSection,
  GetStartedButton,
} from '@/components';

const CTASection = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    padding: '3rem 0',
    background: 'var(--bg-color)'
  }}>
    <GetStartedButton padding="1rem 2rem" text="Join the beta" />
  </div>
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CTASection />
      <FinancialFuture />
      <CTASection />
      <OffersSection />
      <CTASection />
      <FinancilaFreedom />
      <CTASection />
      <JoinSection />
      <FAQ />
    </main>
  );
}
