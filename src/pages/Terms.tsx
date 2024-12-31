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

const Terms = () => {
  return (
    <PageContainer>
      <Content>
        <Title>Terms of Service</Title>
        <Section>
          <SectionTitle>1. Acceptance of Terms</SectionTitle>
          <Text>
            By accessing and using KnoxByte™'s services, you accept and agree to be bound by the terms
            and conditions of this agreement.
          </Text>
        </Section>
        <Section>
          <SectionTitle>2. Services</SectionTitle>
          <Text>
            KnoxByte provides web development, mobile application development, and design services.
            The specific details and deliverables will be outlined in individual project agreements.
          </Text>
        </Section>
        <Section>
          <SectionTitle>3. Intellectual Property</SectionTitle>
          <Text>
            Upon full payment, clients receive full rights to the final deliverables. KnoxByte retains
            rights to display the work in portfolios and marketing materials.
          </Text>
        </Section>
        <BackButton to="/">← Back to Home</BackButton>
      </Content>
    </PageContainer>
  );
};

export default Terms; 