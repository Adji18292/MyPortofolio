import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState, useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

const Hero = ({ theme }) => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particleColor = theme === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <section id="home" className="section-padding d-flex align-items-center position-relative" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor,
              },
              links: {
                color: particleColor,
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                outModes: {
                  default: 'bounce',
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />

      <Container className="position-relative z-1">
        <Row>
          <Col lg={8} data-aos="fade-up">
            <p className="text-accent mb-3 font-monospace" style={{ fontSize: '1.1rem' }}>{t('hero.hi')}</p>
            <h1 className="display-2 fw-bold text-text-primary mb-2" style={{ letterSpacing: '-1px' }}>
              Adji Setyawan Saputra.
            </h1>
            <h2 className="display-3 fw-bold text-text-secondary mb-4" style={{ letterSpacing: '-1px', minHeight: '120px' }}>
              {t('hero.im')} <br/>
              <TypeAnimation
                key={i18n.language}
                sequence={[
                  t('hero.seq1'),
                  2000,
                  t('hero.seq2'),
                  2000,
                  t('hero.seq3'),
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-accent"
                repeat={Infinity}
              />
            </h2>
            <p className="lead text-text-secondary mb-5" style={{ maxWidth: '600px', fontSize: '1.2rem', textAlign: 'justify' }} data-aos="fade-up" data-aos-delay="100">
              {t('hero.desc')}
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <a href="#portfolio" className="btn btn-accent-filled me-3 mb-3">
                {t('hero.btn_projects')}
              </a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download="CV_Adji_Setyawan_Saputra.pdf" className="btn btn-accent mb-3">
                {t('hero.btn_cv')}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
