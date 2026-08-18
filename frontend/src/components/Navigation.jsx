import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navigation = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'portfolio', 'skills', 'experience', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-custom ${scrolled ? 'shadow-sm' : ''}`}
      style={{ padding: scrolled ? '15px 0' : '25px 0', transition: 'all 0.3s ease' }}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">My Portofolio</Navbar.Brand>
        <div className="d-flex align-items-center">
          <Button variant="link" onClick={toggleLanguage} className="text-text-primary me-2 d-lg-none" style={{ textDecoration: 'none', fontSize: '1.2rem' }}>
            <FaGlobe /> {i18n.language.toUpperCase()}
          </Button>
          <Button variant="link" onClick={toggleTheme} className="text-text-primary me-2 d-lg-none" style={{ textDecoration: 'none', fontSize: '1.2rem' }}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
             <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#about" className={activeSection === 'about' ? 'active' : ''}>{t('nav.about')}</Nav.Link>
            <Nav.Link href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>{t('nav.portfolio')}</Nav.Link>
            <Nav.Link href="#skills" className={activeSection === 'skills' ? 'active' : ''}>{t('nav.skills')}</Nav.Link>
            <Nav.Link href="#experience" className={activeSection === 'experience' ? 'active' : ''}>{t('nav.experience')}</Nav.Link>
            <Nav.Link href="#contact" className={activeSection === 'contact' ? 'active' : ''}>{t('nav.contact')}</Nav.Link>
            <Nav.Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" download="CV_Adji_Setyawan_Saputra.pdf" className="text-accent ms-lg-3 fw-bold">Resume</Nav.Link>
            <Button variant="link" onClick={toggleLanguage} className="text-text-primary ms-3 d-none d-lg-block" style={{ textDecoration: 'none', fontSize: '1.1rem' }}>
              <FaGlobe /> <span style={{ fontSize: '0.9rem' }}>{i18n.language.toUpperCase()}</span>
            </Button>
            <Button variant="link" onClick={toggleTheme} className="text-text-primary ms-2 d-none d-lg-block" style={{ textDecoration: 'none', fontSize: '1.2rem' }}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
