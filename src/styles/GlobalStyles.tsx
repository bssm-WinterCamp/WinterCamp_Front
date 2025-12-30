import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Paperlogy';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
        font-weight: 800;
        font-style: normal;
      }

      :root {
        font-family: 'Paperlogy', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        line-height: 1.6;
        font-weight: 400;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* Elderly-friendly color palette - calm and high contrast */
        --color-primary: #2C5F7E;
        --color-primary-dark: #1E4A5F;
        --color-primary-light: #4A7B9D;
        --color-text-primary: #2C3E50;
        --color-text-secondary: #6B7280;
        --color-background: #FFFFFF;
        --color-background-light: #F5F5F0;
        --color-border: #D1D5DB;
        --color-border-light: #E5E7EB;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-family: 'Paperlogy', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      }

      body {
        min-width: 320px;
        background: #F5F5F0;
        overflow-x: hidden;
      }

      #root {
        max-width: 480px;
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        background: #FFFFFF;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 2px solid transparent;
        padding: 16px 24px;
        font-size: 18px;
        font-weight: 700;
        font-family: 'Paperlogy', inherit;
        cursor: pointer;
        min-height: 52px;
        /* Ensure touch targets are at least 48px for accessibility */
      }

      button:focus,
      button:focus-visible {
        outline: 3px solid #FF6B6B;
        outline-offset: 2px;
      }

    `}
  />
);

export default GlobalStyles;
