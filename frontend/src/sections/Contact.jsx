import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/messages', formData);
      setStatus({ type: 'success', message: response.data.message || 'Pesan terkirim!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus({ type: 'danger', message: 'Gagal mengirim pesan. Silakan coba lagi.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <Container className="py-5">
        <Row className="justify-content-center" data-aos="fade-up">
          <Col md={10} lg={8} className="text-center">
            <p className="text-accent font-monospace mb-3" style={{ fontSize: '1.1rem' }}>06. {t('contact.subtitle')}</p>
            <h1 className="display-3 fw-bold text-text-primary mb-4" style={{ letterSpacing: '-1.5px' }}>{t('contact.title')}</h1>
            <p className="text-text-secondary mb-5 mx-auto" style={{ fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '600px' }}>
              {t('contact.desc')}
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <Col md={8} lg={6}>
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              {status.message && (
                <Alert variant={status.type} onClose={() => setStatus({ type: '', message: '' })} dismissible>
                  {status.message}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-text-primary">{t('contact.name')}</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder={t('contact.name')} 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', borderColor: 'var(--nav-border)' }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-text-primary">{t('contact.email')}</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder={t('contact.email')} 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', borderColor: 'var(--nav-border)' }}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="text-text-primary">{t('contact.msg')}</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder={t('contact.msg')} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', borderColor: 'var(--nav-border)' }}
                  />
                </Form.Group>
                <Button variant="accent-filled" type="submit" className="w-100 btn-accent-filled py-3" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </Button>
              </Form>
            </div>
            
            <div className="d-flex justify-content-center gap-4 flex-wrap mt-5">
              <a href="mailto:marqadji93@gmail.com" className="btn btn-accent px-4 py-2 d-flex align-items-center gap-2" style={{ borderWidth: '2px' }}>
                <FaEnvelope /> Email
              </a>
              <a href="https://www.linkedin.com/in/adji-setyawan-saputra-911933328" target="_blank" rel="noopener noreferrer" className="btn btn-accent px-4 py-2 d-flex align-items-center gap-2" style={{ borderWidth: '2px' }}>
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://www.instagram.com/adjistiawnsptra/" target="_blank" rel="noopener noreferrer" className="btn btn-accent px-4 py-2 d-flex align-items-center gap-2" style={{ borderWidth: '2px' }}>
                <FaInstagram /> Instagram
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
