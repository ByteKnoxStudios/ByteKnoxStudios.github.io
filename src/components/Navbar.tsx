import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { theme } from '../styles/theme';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  background: ${theme.colors.background.darker};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const NavContent = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text.light};
  background: ${theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  position: relative;
  color: ${theme.colors.text.light};
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: ${theme.transitions.smooth};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.accent};
    transition: ${theme.transitions.smooth};
  }

  &:hover {
    color: ${theme.colors.accent};
    
    &::after {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContent>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          KnoxByte™
        </Logo>
        <NavLinks
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NavLink to="home" smooth={true} duration={1000} offset={-80}>
            Home
          </NavLink>
          <NavLink to="about" smooth={true} duration={1000} offset={-80}>
            About
          </NavLink>
          <NavLink to="services" smooth={true} duration={1000} offset={-80}>
            Services
          </NavLink>
          <NavLink to="portfolio" smooth={true} duration={1000} offset={-80}>
            Work
          </NavLink>
          <NavLink to="contact" smooth={true} duration={1000} offset={-80}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar; 