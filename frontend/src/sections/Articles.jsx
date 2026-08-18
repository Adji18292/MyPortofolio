import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Articles = () => {
  const { t } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/articles')
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (article) => {
    setSelectedArticle(article);
    setShow(true);
  };

  return (
    <section id="articles" className="section-padding bg-secondary-custom">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          <span>05.</span> {t('articles.title')}
        </h2>
        <Row className="gy-4 mt-4">
          {articles.map((article, index) => (
            <Col md={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: 'spring', stiffness: 300 }} className="h-100">
                <Card className="project-card h-100" style={{ cursor: 'pointer' }} onClick={() => handleShow(article)}>
                  <Card.Body className="d-flex flex-column">
                    <div className="text-accent fs-4 mb-3">📝</div>
                    <Card.Title className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>{article.title}</Card.Title>
                    <Card.Text className="text-text-secondary" style={{ fontSize: '0.9rem', flexGrow: 1 }}>
                      {/* Strip HTML tags for preview and limit length */}
                      {article.content.replace(/<[^>]+>/g, '').substring(0, 100)}...
                    </Card.Text>
                    <div className="text-accent mt-3" style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                      {t('articles.read_more')} &rarr;
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for full article reading */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--nav-border)' }}>
          <Modal.Title className="text-text-primary fw-bold">{selectedArticle?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)' }}>
          <div dangerouslySetInnerHTML={{ __html: selectedArticle?.content }} />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--nav-border)' }}>
          <Button variant="secondary" onClick={handleClose} className="btn-accent" style={{ color: 'var(--bg-primary)' }}>
            {t('articles.close')}
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Articles;
