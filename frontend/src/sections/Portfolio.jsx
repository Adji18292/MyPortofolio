import { Container, Row, Col, Card, Badge, Spinner } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setError('Gagal memuat data proyek. Pastikan server backend berjalan.');
        setLoading(false);
      });
  }, []);

  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          <span>02.</span> {t('portfolio.title')}
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

        {!loading && !error && (
          <>
            <div className="d-flex justify-content-center flex-wrap gap-3 mb-5" data-aos="fade-up" data-aos-delay="50">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setFilter(cat)}
                  className={`btn ${filter === cat ? 'btn-accent-filled' : 'btn-accent'} px-4 py-2`}
                  style={{ borderRadius: '30px', fontWeight: '500', transition: 'all 0.3s ease' }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <Row className="gy-4">
              {filteredProjects.map((project, index) => (
                <Col md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: 'spring', stiffness: 300 }} className="h-100">
                    <Card className="project-card h-100">
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div className="text-accent fs-3">
                            <FaExternalLinkAlt />
                          </div>
                          <div className="d-flex gap-3">
                            {project.github_link && (
                              <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-text-secondary fs-4" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                                <FaGithub />
                              </a>
                            )}
                            {project.live_link && (
                              <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-text-secondary fs-4" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                                <FaExternalLinkAlt />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <Card.Title className="fw-bold m-0">{project.title}</Card.Title>
                          {project.category && (
                            <Badge bg="transparent" className="text-accent border border-accent rounded-pill px-2 py-1" style={{ fontSize: '0.75rem', borderColor: 'var(--accent-color)' }}>
                              {project.category}
                            </Badge>
                          )}
                        </div>
                        <Card.Text className="flex-grow-1 text-text-secondary mt-2" style={{ textAlign: 'justify' }}>
                          {project.description}
                        </Card.Text>
                        <div className="mt-4 d-flex flex-wrap gap-2">
                          {project.tech_stack && (Array.isArray(project.tech_stack) ? project.tech_stack : (typeof project.tech_stack === 'string' ? project.tech_stack.split(',') : [])).map((tech, i) => (
                            <Badge bg="transparent" border="accent" className="border text-accent fw-normal px-2 py-1" key={i} style={{ borderColor: 'var(--accent-color)' }}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </section>
  );
};

export default Portfolio;
