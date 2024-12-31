export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    lightText: string;
    white: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export const theme = {
  colors: {
    primary: '#121212',
    secondary: '#1E1E1E',
    accent: '#00B894',
    background: {
      darker: '#0A0A0A',
      dark: '#121212',
      light: '#1E1E1E',
      glass: 'rgba(30, 30, 30, 0.9)'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0A0A0',
      light: '#FFFFFF'
    },
    gradient: {
      primary: 'linear-gradient(135deg, #00B894 0%, #00A3B8 100%)',
      dark: 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)'
    }
  },
  shadows: {
    subtle: '0 2px 10px rgba(0, 0, 0, 0.3)',
    medium: '0 4px 20px rgba(0, 0, 0, 0.4)',
    strong: '0 8px 30px rgba(0, 0, 0, 0.5)'
  },
  transitions: {
    smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
  }
};