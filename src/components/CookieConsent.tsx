import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 1rem;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Message = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  background: ${props => props.primary ? '#4A90E2' : 'transparent'};
  color: white;
  border: 1px solid ${props => props.primary ? '#4A90E2' : 'white'};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.primary ? '#357ABD' : 'rgba(255,255,255,0.1)'};
  }
`;

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <Banner
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <Message>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </Message>
          <ButtonGroup>
            <Button onClick={handleDecline}>Decline</Button>
            <Button primary onClick={handleAccept}>Accept</Button>
          </ButtonGroup>
        </Banner>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 