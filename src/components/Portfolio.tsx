import { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import { theme } from '../styles/theme';

const PortfolioSection = styled.section`
  min-height: 100vh;
  background: ${theme.colors.background.darker};
  position: relative;
  overflow: visible;
  padding: 8rem 0;
`;

const Container = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 3vw, 3rem);
  color: ${theme.colors.text.primary};
  margin-bottom: 1.5rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  height: 400px;
  background: ${theme.colors.background.dark};
  box-shadow: ${theme.shadows.medium};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${theme.colors.gradient.primary};
    opacity: 0;
    transition: ${theme.transitions.smooth};
    z-index: 1;
  }

  &:hover {
    &::before {
      opacity: 0.3;
    }

    img {
      transform: scale(1.1);
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`;

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
  z-index: 2;
  transform: translateY(20px);
  opacity: 0;
  transition: ${theme.transitions.smooth};

  ${ProjectCard}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectType = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0.3rem 0.8rem;
  background: ${theme.colors.accent};
  border-radius: 20px;
  font-size: 0.8rem;
  color: white;
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: ${theme.colors.background.darker};
  padding: 2.5rem;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  position: relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1001;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
    margin: 1.5rem 0;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  color: ${theme.colors.text.light};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${theme.transitions.smooth};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  position: relative;
  z-index: 2;
`;

const LinkButton = styled.a`
  padding: 0.8rem 1.5rem;
  background: ${theme.colors.gradient.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: ${theme.transitions.smooth};
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
`;

interface Project {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
  githubLink?: string;
  liveLink?: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      type: "Web Application",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      githubLink: "https://github.com/KnoxByteStudios/project1",
      liveLink: "https://project1-demo.com"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      type: "Mobile Application",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",
      description: "Secure and intuitive mobile banking application with biometric authentication and real-time transaction tracking.",
      tags: ["React Native", "TypeScript", "Firebase"],
      link: "#"
    },
    // Add more projects as needed
  ];

  return (
    <PortfolioSection ref={ref}>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ y }}
      >
        <Header>
          <Title
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Work
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our latest projects and see how we help businesses succeed in the digital world.
          </Subtitle>
        </Header>

        <ProjectGrid
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectType>{project.type}</ProjectType>
                <TagContainer>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagContainer>
                <ProjectLinks>
                  {project.githubLink && (
                    <LinkButton 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Code
                    </LinkButton>
                  )}
                  {project.liveLink && (
                    <LinkButton 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </LinkButton>
                  )}
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>

        <AnimatePresence>
          {selectedProject && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <ModalContent
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedProject(null)}>×</CloseButton>
                <ProjectTitle>{selectedProject.title}</ProjectTitle>
                <ProjectType>{selectedProject.type}</ProjectType>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                />
                <p style={{ 
                  margin: '1.5rem 0', 
                  lineHeight: '1.6',
                  color: theme.colors.text.secondary 
                }}>
                  {selectedProject.description}
                </p>
                <TagContainer>
                  {selectedProject.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagContainer>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio; 