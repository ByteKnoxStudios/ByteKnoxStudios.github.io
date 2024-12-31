import { useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll, useTransform } from 'framer-motion';
import { theme } from '../styles/theme';

const AboutSection = styled.section`
  min-height: 100vh;
  background: ${theme.colors.background.light};
  position: relative;
  overflow: hidden;
  padding: 8rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const Content = styled.div`
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 3vw, 3rem);
  color: ${theme.colors.text.primary};
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    width: 40px;
    height: 2px;
    background: ${theme.colors.accent};
    transform: translateY(-50%);
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.colors.text.secondary};
  margin-bottom: 2.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: ${theme.colors.background.light};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: ${theme.shadows.subtle};
  transition: ${theme.transitions.smooth};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  margin-bottom: 0.5rem;
  background: ${theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: 1rem;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/5;
  box-shadow: ${theme.shadows.strong};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${theme.colors.gradient.primary};
    opacity: 0.1;
    z-index: 1;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FloatingAccent = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${theme.colors.gradient.primary};
  filter: blur(60px);
  opacity: 0.1;
`;

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <AboutSection ref={ref}>
      <FloatingAccent
        style={{
          top: '10%',
          left: '5%',
        }}
        animate={{
          y: [0, 50, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <FloatingAccent
        style={{
          bottom: '10%',
          right: '5%',
        }}
        animate={{
          y: [0, -50, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <Container>
        <Grid>
          <Content>
            <SectionTitle
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Innovating Digital Solutions
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At KnoxByte Studios, we blend creativity with technical expertise to 
              deliver exceptional digital solutions. Our passion for innovation drives 
              us to create web experiences that not only look stunning but also 
              perform flawlessly.
            </Description>
            <StatsGrid>
              {[
                { number: "100+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <StatCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </Content>

          <ImageContainer
            style={{ y, opacity }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BackgroundImage
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
              alt="Our Workspace"
            />
          </ImageContainer>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 