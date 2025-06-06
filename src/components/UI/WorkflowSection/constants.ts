import ic_figma from '../../../../public/svgs/figma_icon.svg';
import ic_notion from '../../../../public/svgs/notion_icon.svg';
import { StaticImageData } from 'next/image';

export type CardInfo = {
  title: string;
  details: string;
  icon: StaticImageData;
};

export const cardsInfo: CardInfo[] = [
  {
    title: 'Create Better',
    details:
      'Import your Figma designs, enrich them with flows and interactions, then export back to Figma seamlessly.',
    icon: ic_figma,
  },
  {
    title: 'Collaborate Better',
    details:
      'Generate interactive prototypes with documentation and development tickets ready to be assigned, all from your design system.',
    icon: ic_notion,
  },
];

// For desktop
export const desktopHeaderPhrase = [
  'Koiné Creates A',
  'Seamless Workflow',
];
export const desktopParagraphPhrase = [
  "Relie vos outils (Figma, Notion, Linear…) pour que l'idée d'hier devienne le",
  'prototype de ce matin et la spéc produit de cet après‑midi.',
];

// For mobile
export const mobileHeaderPhrase = [
  'Koiné Creates A',
  ' Seamless Workflow',
];
export const mobileParagraphPhrase = [
  "Relie vos outils (Figma, Notion, Linear…) pour que",
  "l'idée d'hier devienne le prototype de ce matin et la",
  'spéc produit de cet',
  'après‑midi.',
]; 