type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faq_data: FAQItem[] = [
  {
    question: 'How do I get started with Koiné?',
    answer:
      'Simply sign up for an account and connect your Figma workspace. Our AI assistant will guide you through creating your first interactive prototype in minutes.',
  },
  {
    question: 'Do I need technical skills to use Koiné?',
    answer:
      'Not at all! Koiné is designed for everyone - strategists, marketers, founders, and designers. Our AI understands your intent and handles the technical complexity.',
  },
  {
    question: 'How does Koiné integrate with my existing tools?',
    answer:
      'Koiné seamlessly connects with Figma, Notion, Linear, and other popular tools. Import designs, enrich them with interactions, and export back to your workflow.',
  },
  {
    question: 'What makes Koiné different from other prototyping tools?',
    answer:
      'Koiné removes the barriers between vision and reality. Our AI assistant understands your intent, anticipates needs, and helps shape innovation in real time - no technical expertise required.',
  },
  {
    question: 'How fast can I create a prototype with Koiné?',
    answer:
      'Most users create interactive prototypes in about 15 minutes. Our AI assistance and workflow integrations dramatically reduce the time from idea to working prototype.',
  },
  {
    question: 'Can I collaborate with my team using Koiné?',
    answer:
      'Yes! Koiné generates interactive prototypes with documentation and development tickets ready to be assigned, making team collaboration seamless and efficient.',
  },
  {
    question: 'Is my data secure with Koiné?',
    answer:
      'Absolutely. We prioritize data security and privacy, ensuring your designs and prototypes are protected with enterprise-grade security measures.',
  },
  {
    question: 'What file formats does Koiné support?',
    answer:
      'Koiné works with Figma files, screenshots, and various design formats. You can also export your prototypes back to Figma or as interactive web experiences.',
  },
];
