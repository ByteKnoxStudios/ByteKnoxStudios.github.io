import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background.darker};
  padding: 120px 2rem 4rem;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  color: ${theme.colors.text.light};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${theme.colors.text.light};
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${theme.colors.text.light};
`;

const Text = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: ${theme.colors.accent};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Cookies = () => {
  return (
    <PageContainer>
      <Content>
        <Title>Cookie Policy</Title>
        <Section>
          <SectionTitle>What Are Cookies</SectionTitle>
          <Text>
            Cookies are small text files that are stored on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and 
            analyzing how you use our site.
          </Text>
        </Section>
        <Section>
          <SectionTitle>How We Use Cookies</SectionTitle>
          <Text>
            We use cookies to:
            • Remember your preferences and settings
            • Understand how you interact with our website
            • Improve our services based on your behavior
            • Ensure our website functions properly
          </Text>
        </Section>
        <Section>
          <SectionTitle>Types of Cookies We Use</SectionTitle>
          <Text>
            • Essential cookies: Required for basic website functionality
            • Analytics cookies: Help us understand how visitors use our site
            • Preference cookies: Remember your settings and improve your experience
          </Text>
        </Section>
        <BackButton to="/">← Back to Home</BackButton>
      </Content>
    </PageContainer>
  );
};

export default Cookies; 