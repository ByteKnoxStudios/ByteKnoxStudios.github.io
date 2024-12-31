import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Link as RouterLink } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background: ${theme.colors.background.dark};
  color: ${theme.colors.text.light};
  padding: 6rem 0 2rem;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  background: ${theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  margin: 0;
  color: ${theme.colors.text.light};
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const LinkItem = styled.li`
  color: ${theme.colors.text.secondary};
  transition: ${theme.transitions.smooth};

  &:hover {
    color: ${theme.colors.accent};
  }
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const StyledRouterLink = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  color: ${theme.colors.text.light};
  font-size: 1.5rem;
  transition: ${theme.transitions.smooth};
  
  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const Copyright = styled.p`
  text-align: center;
  padding-top: 2rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${theme.colors.text.secondary};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <Logo>KnoxByte™</Logo>
            <Description>
              Transforming ideas into exceptional digital experiences through 
              innovative development and cutting-edge design solutions.
            </Description>
            <SocialLinks>
              <SocialIcon 
                href="mailto:byteknoxstudios@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </SocialIcon>
              <SocialIcon 
                href="https://www.linkedin.com/in/knox-byte-a0a379344/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <Title>Services</Title>
            <LinkList>
              <LinkItem><StyledLink href="#services">Web Development</StyledLink></LinkItem>
              <LinkItem><StyledLink href="#services">Mobile Apps</StyledLink></LinkItem>
              <LinkItem><StyledLink href="#services">UI/UX Design</StyledLink></LinkItem>
            </LinkList>
          </FooterColumn>

          <FooterColumn>
            <Title>Company</Title>
            <LinkList>
              <LinkItem><StyledLink href="#about">About Us</StyledLink></LinkItem>
              <LinkItem><StyledLink href="#portfolio">Portfolio</StyledLink></LinkItem>
              <LinkItem><StyledLink href="#contact">Contact</StyledLink></LinkItem>
              <LinkItem><StyledRouterLink to="/privacy">Privacy Policy</StyledRouterLink></LinkItem>
              <LinkItem><StyledRouterLink to="/terms">Terms of Service</StyledRouterLink></LinkItem>
              <LinkItem><StyledRouterLink to="/cookies">Cookie Policy</StyledRouterLink></LinkItem>
            </LinkList>
          </FooterColumn>

          <FooterColumn>
            <Title>Contact</Title>
            <LinkList>
              <LinkItem>
                <StyledLink href="mailto:knoxbyte@gmail.com">
                  knoxbyte@gmail.com
                </StyledLink>
              </LinkItem>
            </LinkList>
          </FooterColumn>
        </FooterGrid>

        <Copyright>
          © 2024 KnoxByte™. All rights reserved
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 