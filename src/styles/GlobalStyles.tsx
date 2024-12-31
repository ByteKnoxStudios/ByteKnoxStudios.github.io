import { Global, css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background: ${theme.colors.background.darker};
        color: ${theme.colors.text.primary};
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
      }

      html {
        scroll-behavior: smooth;
      }

      #root {
        overflow-x: hidden;
      }
    `}
  />
); 