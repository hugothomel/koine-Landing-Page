import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "I find the results really impressive. The assistance feature where you write a prompt and get asked for clarifications is amazing. I managed to do in 15 minutes what had taken me 2 hours before.",
    person: 'Anouk',
    avatar: robert_fox,
  },
  {
    testimony:
      "The Design System import went really well and the tutorial to get the API Key is very simple, which isn't always the case with this kind of tool.",
    person: 'Céline',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "The screenshot reproduction was really pixel perfect, I got better results than on Bolt or Lovable. The workflow integration with my existing tools is seamless.",
    person: 'Sophie',
    avatar: esther_howard,
  },
  {
    testimony:
      "Koiné has completely changed how I approach prototyping. The AI understands exactly what I'm trying to achieve and helps me iterate faster than ever before.",
    person: 'Design Lead',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "As a product manager, being able to create interactive prototypes without depending on developers has been game-changing. The cash machine sound when the prototype is ready is addictive!",
    person: 'PM at Tech Startup',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Join innovative teams', 'using Koiné'];
