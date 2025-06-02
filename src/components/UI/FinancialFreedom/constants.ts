import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// For desktop
export const desktopHeaderPhrase = ['Our Vision & Mission'];
export const desktopParagraphPhrase = [
  'Koiné believes the world would be a better place if creative power belonged to everyone,',
  'not just those with technical expertise, accelerating innovation and creativity.',
];
export const desktopBriefNotePhrase = [
  'Innovation democratized,',
  'barriers removed, and',
  'vision transformed to',
  'reality instantly.',
];

// For mobile
export const mobileHeaderPhrase = ['Our Vision', '& Mission'];
export const mobileParagraphPhrase = [
  'Koiné believes the world would be a better place if',
  'creative power belonged to everyone, not just those with',
  'technical expertise, accelerating innovation and creativity.',
];

export const mobileBriefNotePhrase = [
  'Innovation',
  ' democratized,',
  'barriers',
  ' removed,',
  'and vision',
  'transformed to',
  'reality instantly.',
];

export const edges = [
  {
    point: 'Our Vision',
    details:
      'To remove the barriers between your vision and reality. Making digital design as accessible as imagination.',
    icon: ic_banknotes,
  },
  {
    point: 'Our Mission',
    details:
      'To make digital design as accessible as imagination. We remove technical barriers so anyone can bring their vision to life at the speed of thought.',
    icon: ic_circle_stack,
  },
  {
    point: 'Our Position',
    details:
      'Koiné is an AI-powered assistant that understands your vision and helps you shape it into interactive prototypes, regardless of your technical expertise.',
    icon: ic_arrows_left_right,
  },
];
