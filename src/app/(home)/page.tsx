import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancialFreedom,
  HeroSection,
  // IntroSection,
  JoinSection,
  OffersSection,
  GetStartedButton,
  WorkflowSection,
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
      <FinancialFuture />
      <CTASection />
      <OffersSection />
      <CTASection />
      <FinancialFreedom />
      <WorkflowSection />
      <CTASection />
      <JoinSection />
      <FAQ />
    </main>
  );
}
