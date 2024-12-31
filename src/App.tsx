import { useEffect } from 'react';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import { GlobalStyles } from './styles/GlobalStyles';
import emailjs from '@emailjs/browser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';

const AppContainer = styled.div`
  overflow-x: hidden;
`;

const Section = styled.div`
  scroll-margin-top: 80px; // Height of navbar
`;

emailjs.init('FH02TVRRXIf4R4_Zu');

const MainContent = () => (
  <AppContainer>
    <Navbar />
    <Section id="home">
      <Hero />
    </Section>
    <Section id="about">
      <About />
    </Section>
    <Section id="services">
      <Services />
    </Section>
    <Section id="features">
      <Features />
    </Section>
    <Section id="portfolio">
      <Portfolio />
    </Section>
    <Section id="contact">
      <Contact />
    </Section>
    <Footer />
    <CookieConsent />
  </AppContainer>
);

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </Router>
  );
}

export default App;
