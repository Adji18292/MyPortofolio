import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import profileImg from '../assets/profile.png';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          <span>01.</span> {t('about.title')}
        </h2>
        <Row className="gy-4 mt-2">
          <Col lg={7} data-aos="fade-up" data-aos-delay="100">
            <div className="text-text-secondary" style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
              <p>{t('about.desc1')}</p>
              <p>{t('about.desc2')}</p>
              <p>Beberapa teknologi yang sering saya gunakan belakangan ini:</p>
              <ul className="d-flex flex-wrap" style={{ listStyleType: 'none', padding: 0 }}>
                {['JavaScript (ES6+)', 'React', 'Node.js', 'Python', 'Laravel', 'TensorFlow'].map((tech, i) => (
                  <li key={i} className="w-50 mb-2 position-relative" style={{ paddingLeft: '20px' }}>
                    <span className="text-accent position-absolute" style={{ left: 0 }}>▹</span> {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={5} className="d-flex justify-content-center align-items-center mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <div className="position-relative" style={{ width: '300px', height: '300px' }}>
              <div 
                className="position-absolute w-100 h-100 border border-2 border-accent rounded-circle"
                style={{ top: '20px', left: '20px', transition: 'all 0.3s ease', borderColor: 'var(--accent-color)' }}
              ></div>
              <div 
                className="position-absolute w-100 h-100 bg-secondary-custom rounded-circle d-flex justify-content-center align-items-center z-1"
                style={{ overflow: 'hidden', cursor: 'pointer' }}
                onMouseOver={e => e.currentTarget.previousSibling.style.transform = 'translate(-10px, -10px)'}
                onMouseOut={e => e.currentTarget.previousSibling.style.transform = 'translate(0, 0)'}
              >
                <img src={profileImg} alt="Adji Setyawan Saputra" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(100%)', transition: 'filter 0.3s ease' }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
