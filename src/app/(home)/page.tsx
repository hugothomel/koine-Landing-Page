import {
  FAQ,
  Featured,
  FinancialFuture,
  HeroSection,
  // IntroSection,
  JoinSection,
  OffersSection,
  GetStartedButton,
  WorkflowSection,
  ScrubbingSection,
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
      <ScrubbingSection />
      <CTASection />
      <WorkflowSection />
      <CTASection />
      <JoinSection />
      <FAQ />
    </main>
  );
}
