import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const NotificationWrapper = styled(motion.div)<{ type: 'success' | 'error' }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 2rem;
  background: ${({ type }) => 
    type === 'success' ? 'rgba(0, 184, 148, 0.95)' : 'rgba(255, 71, 87, 0.95)'};
  color: white;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: ${theme.shadows.strong};
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Message = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  opacity: 0.8;
  transition: ${theme.transitions.smooth};

  &:hover {
    opacity: 1;
  }
`;

const Notification = ({ type, message, isVisible, onClose }: NotificationProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <NotificationWrapper
          type={type}
          initial={{ opacity: 0, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: 100 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Message>{message}</Message>
          <CloseButton onClick={onClose}>×</CloseButton>
        </NotificationWrapper>
      )}
    </AnimatePresence>
  );
};

export default Notification; 