import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-custom py-4 mt-5">
      <Container className="text-center">
        <div className="mb-3">
          <a href="https://github.com/Adji18292" target="_blank" rel="noopener noreferrer" className="text-text-secondary mx-2 fs-4" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/adji-setyawan-saputra-911933328" target="_blank" rel="noopener noreferrer" className="text-text-secondary mx-2 fs-4" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/adjistiawnsptra/" target="_blank" rel="noopener noreferrer" className="text-text-secondary mx-2 fs-4" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FaInstagram />
          </a>
          <a href="mailto:marqadji93@gmail.com" className="text-text-secondary mx-2 fs-4" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FaEnvelope />
          </a>
        </div>
        <p className="mb-0 text-text-secondary" style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>
          &copy; {new Date().getFullYear()} Designed & Built by <span className="text-accent">Adji Setyawan Saputra</span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
