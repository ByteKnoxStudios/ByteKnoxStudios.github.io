import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { FaRocket, FaCode, FaPiggyBank, FaLock, FaMobile, FaSearch } from 'react-icons/fa';

const FeaturesSection = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem;
  background: ${theme.colors.background.darker};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 3vw, 2.5rem);
  color: ${theme.colors.text.light};
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 668px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  border-radius: 20px;
  background: ${theme.colors.background.dark};
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${theme.colors.accent};
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  background: ${theme.colors.gradient.primary};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: ${theme.colors.text.light};
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  font-size: 1rem;
`;

const Features = (): JSX.Element => {
  const features = [
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Optimized code and efficient architecture ensuring lightning-fast load times."
    },
    {
      icon: <FaPiggyBank />,
      title: "Affordable Solutions",
      description: "High-quality development at competitive rates, making excellence accessible."
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Well-structured, documented code ensuring long-term maintainability."
    },
    {
      icon: <FaMobile />,
      title: "Responsive Design",
      description: "Perfectly adapted layouts for all devices and screen sizes."
    },
    {
      icon: <FaLock />,
      title: "Secure",
      description: "Implementation of best security practices to protect your data."
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimized",
      description: "Built to improve your visibility and ranking in search engines."
    }
  ];

  return (
    <FeaturesSection>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We deliver premium solutions at competitive prices, ensuring your investment drives real business value
          </Subtitle>
        </Header>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper>{feature.icon}</IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features; 