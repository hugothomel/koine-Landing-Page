import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    /* Koinè Design System - Neutrals */
    --Background: #FFFFFF; /* fill_8TBZTQ */
    --white: #FFFFFF;
    --off-white: #FAFAFB; /* fill_GB2TTN */
    --light-gray: #F5F5F6; /* fill_HX2P2B */
    --divider: #ECECEC; /* fill_ZYJPG6 */
    --border-default: #D4D4D5; /* stroke_KQOO3I */
    --link-color: #4F4F4F; /* fill_AKG9GQ - Secondary Text */
    --text-primary: #1D1D1E; /* fill_L3ZE1N */
    --icon-primary: #000000; /* fill_DJRVIN */
    
    /* Koinè Design System - Primary */
    --primary: #6F6FE6; /* fill_PRD1UB */
    --primary-hover: #5A5AC2; /* fill_MNVM88 */
    --primary-light: #8888FF; /* fill_7GWGHE */
    --primary-disabled: #C2C2FF; /* fill_U68ABU */
    --primary-bg-light: #F2F2FF; /* fill_VYXKX8 */
    
    /* Legacy colors (to be replaced) */
    --green: #6F6FE6; /* Replaced with primary */
    --emerald: #6F6FE6; /* Replaced with primary */
    
    /* Koinè Design System - Transparency */
    --black-5: rgba(29, 29, 30, 0.05); /* fill_S3CZJI */
    --black-10: rgba(29, 29, 30, 0.1); /* fill_IVWVDS */
    --black-20: rgba(0, 0, 0, 0.2); /* stroke_D5V2Z7 */
    --black-90: rgba(29, 29, 30, 0.9); /* fill_4YH3AE */
    
    /* Koinè Design System - Semantic */
    --error: #EC5962; /* fill_PU186K */
    --error-bg: #FDF2F2; /* fill_44VK3P */
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'Inter', 'SF Pro Display', sans-serif; /* Updated to Koinè primary font */
    background-color: var(--Background);
    color: var(--text-primary); /* Updated to Koinè text color */
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--border-default);
        border-radius: 0.5rem;
      }

      &-track {
        background: var(--off-white);
      }
    }
  }

  /* Koinè Typography Scale */
  h1 {
    font-family: 'PP Mori', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 30px;
    line-height: 1.2em;
    letter-spacing: -0.02em;
  }

  h2 {
    font-family: 'Manrope', 'Inter', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.37em;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43em;
    letter-spacing: -0.02em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .parallax {
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .parallax .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .scroller span {
    display: block;
    margin-right: 5rem;
  }

  .not_complete {
    display: none;
  }

  .complete {
  }
`;
