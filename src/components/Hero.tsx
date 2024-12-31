import styled from '@emotion/styled';
import { motion, useScroll, useTransform } from 'framer-motion';
import { theme } from '../styles/theme';
import { Link } from 'react-scroll';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${theme.colors.background.dark};
`;

const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextContent = styled.div`
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  color: ${theme.colors.text.light};
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${theme.colors.text.secondary};
  margin-bottom: 3rem;
  max-width: 500px;

  @media (max-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled(motion.div)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${theme.colors.gradient.primary};
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: ${theme.transitions.smooth};
  box-shadow: ${theme.shadows.medium};
`;

const HeroImage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${theme.shadows.strong};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${theme.colors.gradient.primary};
    opacity: 0.1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BackgroundGradient = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 50% 50%,
    ${theme.colors.accent}20 0%,
    transparent 70%
  );
  opacity: 0.5;
`;

const FloatingShape = styled(motion.div)<{ size: number; top: string; left: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top};
  left: ${props => props.left};
  background: ${theme.colors.gradient.primary};
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.3;
`;

const Hero = () => {
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <HeroSection>
      <BackgroundGradient 
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <FloatingShape 
        size={300}
        top="10%"
        left="5%"
        animate={{
          y: [0, 30, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <FloatingShape 
        size={200}
        top="60%"
        left="80%"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <HeroContent>
        <GridContainer>
          <TextContent>
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting Digital
              <br />
              Excellence
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We transform ideas into exceptional digital experiences through 
              innovative development and cutting-edge design solutions.
            </Subtitle>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="contact" smooth={true} duration={1000} offset={-80}>
                <CTAButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </CTAButton>
              </Link>
            </motion.div>
          </TextContent>

          <HeroImage
            style={{ y, opacity, scale }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
              alt="Digital Workspace"
            />
          </HeroImage>
        </GridContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 