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

const Privacy = () => {
  return (
    <PageContainer>
      <Content>
        <Title>Privacy Policy</Title>
        <Section>
          <SectionTitle>Information Collection</SectionTitle>
          <Text>
            We collect information you provide directly to us when using our contact forms
            or requesting our services. This may include your name, email, and project details.
          </Text>
        </Section>
        <Section>
          <SectionTitle>Use of Information</SectionTitle>
          <Text>
            We use the information we collect to provide and improve our services,
            communicate with you about your projects, and send relevant updates.
          </Text>
        </Section>
        <Section>
          <SectionTitle>Data Protection</SectionTitle>
          <Text>
            We implement appropriate security measures to protect your personal information
            and ensure it's not accessed, disclosed, altered or destroyed.
          </Text>
        </Section>
        <BackButton to="/">← Back to Home</BackButton>
      </Content>
    </PageContainer>
  );
};

export default Privacy; 