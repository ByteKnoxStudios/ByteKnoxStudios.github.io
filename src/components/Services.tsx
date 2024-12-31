import { useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll, useTransform } from 'framer-motion';
import { theme } from '../styles/theme';
import { FaCode, FaAndroid, FaPalette } from 'react-icons/fa';

const ServicesSection = styled.section`
  min-height: 100vh;
  background: ${theme.colors.background.dark};
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

const Header = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 3vw, 3rem);
  color: ${theme.colors.text.light};
  margin-bottom: 1.5rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
`;

const ServiceCard = styled(motion.div)`
  background: ${theme.colors.background.glass};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: ${theme.transitions.smooth};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${theme.colors.gradient.primary};
    opacity: 0;
    transition: ${theme.transitions.smooth};
  }

  &:hover {
    transform: translateY(-10px);

    &::before {
      opacity: 0.1;
    }
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  background: ${theme.colors.gradient.primary};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  font-size: 1.5rem;
  color: ${theme.colors.text.light};
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.text.light};
  margin-bottom: 1rem;
  position: relative;
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  position: relative;
`;

const FloatingGradient = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: ${theme.colors.gradient.primary};
  filter: blur(100px);
  opacity: 0.1;
`;

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications and responsive websites built with modern technologies and best practices.",
      icon: <FaCode size={24} />
    },
    {
      title: "Android Development",
      description: "Native Android applications with seamless user experience. iOS development coming soon.",
      icon: <FaAndroid size={24} />
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces with focus on user experience and modern design principles.",
      icon: <FaPalette size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <ServicesSection ref={ref}>
      <FloatingGradient
        style={{ top: '10%', left: '5%', y }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <FloatingGradient
        style={{ bottom: '10%', right: '5%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We offer comprehensive digital solutions tailored to your unique needs,
            helping you stay ahead in today's competitive landscape.
          </Subtitle>
        </Header>

        <ServicesGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <IconContainer>{service.icon}</IconContainer>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 