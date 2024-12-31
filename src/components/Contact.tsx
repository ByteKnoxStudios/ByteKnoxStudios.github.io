import { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll, useTransform } from 'framer-motion';
import { theme } from '../styles/theme';
import emailjs from '@emailjs/browser';
import Notification from './Notification';

const ContactSection = styled.section`
  min-height: 100vh;
  background: ${theme.colors.background.darker};
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background: ${theme.colors.background.light};
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: ${theme.shadows.strong};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${theme.colors.gradient.primary};
    opacity: 0.05;
  }
`;

const FormInput = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text.light};
  font-size: 0.9rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  background: ${theme.colors.background.darker};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  transition: ${theme.transitions.smooth};

  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
    background: rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
`;

const SelectField = styled.select`
  width: 100%;
  padding: 1rem;
  background: ${theme.colors.background.darker};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  transition: ${theme.transitions.smooth};
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
    background: rgba(0, 0, 0, 0.2);
  }

  option {
    background: ${theme.colors.background.darker};
    color: ${theme.colors.text.primary};
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: ${theme.colors.background.darker};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: ${theme.transitions.smooth};

  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
    background: rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: ${theme.colors.gradient.primary};
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: ${theme.transitions.smooth};
  position: relative;
  overflow: hidden;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled(motion.div)`
  color: ${theme.colors.text.light};
`;

const InfoGroup = styled.div`
  margin-bottom: 3rem;
`;

const InfoLabel = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${theme.colors.accent};
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.text.secondary};
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

const EmailLink = styled.a`
  color: ${theme.colors.text.secondary};
  text-decoration: none;
  transition: ${theme.transitions.smooth};

  &:hover {
    color: ${theme.colors.accent};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
    isVisible: boolean;
  }>({
    type: 'success',
    message: '',
    isVisible: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_de78g3r',
        'template_885as7q',
        {
          from_name: formData.name,
          from_email: formData.email,
          service_type: formData.service,
          message: formData.message,
        },
        'FH02TVRRXIf4R4_Zu'
      );

      setNotification({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.',
        isVisible: true
      });

      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });

    } catch (error) {
      console.error('Error:', error);
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try emailing us directly.',
        isVisible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ContactSection ref={formRef}>
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
            Get in Touch
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a project in mind? Let's create something amazing together.
          </Subtitle>
        </Header>

        <ContentWrapper>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FormInput>
              <Label>Name</Label>
              <InputField
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </FormInput>
            <FormInput>
              <Label>Email</Label>
              <InputField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </FormInput>
            <FormInput>
              <Label>Service Needed</Label>
              <SelectField
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </SelectField>
            </FormInput>
            <FormInput>
              <Label>Message</Label>
              <TextAreaField
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                required
              />
            </FormInput>
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>

          <ContactInfo
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <InfoGroup>
              <InfoLabel>Email</InfoLabel>
              <InfoText>
                <EmailLink href="mailto:byteknoxstudios@gmail.com">
                  byteknoxstudios@gmail.com
                </EmailLink>
              </InfoText>
            </InfoGroup>
            <InfoGroup>
              <InfoLabel>Availability</InfoLabel>
              <InfoText>Custom Project-Based Scheduling</InfoText>
            </InfoGroup>
          </ContactInfo>
        </ContentWrapper>
      </Container>

      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
      />
    </ContactSection>
  );
};

export default Contact;