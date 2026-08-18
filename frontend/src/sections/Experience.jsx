import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  const [experiences, setExperiences] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/experiences')
      .then(response => {
        setExperiences(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching experiences:', err);
        setError('Gagal memuat data pengalaman. Pastikan server backend berjalan.');
        setLoading(false);
      });
  }, []);

  return (
    <section id="experience" className="section-padding">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          <span>04.</span> {t('experience.title')}
        </h2>
        
        {loading && (
          <div className="text-center py-5">
            <Spinner animation="border" style={{ color: 'var(--accent-color)' }} />
          </div>
        )}

        {error && (
          <div className="text-center py-5 text-danger">
            {error}
          </div>
        )}

        {!loading && !error && experiences.length > 0 && (
          <Row className="mt-5">
            <Col md={3} className="mb-4 mb-md-0" data-aos="fade-right">
              <div className="d-flex flex-md-column flex-row overflow-auto" style={{ borderLeft: '2px solid var(--bg-secondary)' }}>
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    className={`btn text-start rounded-0 py-3 px-4 exp-tab ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </Col>
            <Col md={9} data-aos="fade-left">
              <div className="ps-md-4">
                <h4 className="text-text-primary fw-bold mb-2" style={{ fontSize: '1.3rem' }}>
                  {experiences[activeTab].role} <span className="text-accent">@ {experiences[activeTab].company}</span>
                </h4>
                <p className="text-text-secondary font-monospace mb-4" style={{ fontSize: '0.9rem' }}>
                  {experiences[activeTab].duration}
                </p>
                <ul className="text-text-secondary" style={{ listStyleType: 'none', padding: 0, textAlign: 'justify' }}>
                  {experiences[activeTab].points && experiences[activeTab].points.map((point, i) => (
                    <li key={i} className="mb-3 position-relative" style={{ paddingLeft: '25px', lineHeight: '1.6' }}>
                      <span className="text-accent position-absolute" style={{ left: 0 }}>▹</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Experience;
