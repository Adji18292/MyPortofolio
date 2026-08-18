import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaLaravel, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiCplusplus } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Skills = () => {
  const { t } = useTranslation();
  
  const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 />, delay: 0 },
    { name: 'CSS3', icon: <FaCss3Alt />, delay: 50 },
    { name: 'JavaScript', icon: <FaJsSquare />, delay: 100 },
    { name: 'React', icon: <FaReact />, delay: 150 },
    { name: 'Node.js', icon: <FaNodeJs />, delay: 200 },
    { name: 'Laravel', icon: <FaLaravel />, delay: 250 },
    { name: 'Python', icon: <FaPython />, delay: 300 },
    { name: 'TensorFlow', icon: <SiTensorflow />, delay: 350 },
    { name: 'Java', icon: <FaJava />, delay: 400 },
    { name: 'C++', icon: <SiCplusplus />, delay: 450 },
    { name: 'Database', icon: <FaDatabase />, delay: 500 },
  ];

  const radarData = [
    { subject: 'Frontend', A: 90, fullMark: 100 },
    { subject: 'Backend', A: 85, fullMark: 100 },
    { subject: 'AI / ML', A: 80, fullMark: 100 },
    { subject: 'Databases', A: 75, fullMark: 100 },
    { subject: 'DevOps', A: 60, fullMark: 100 },
    { subject: 'UI/UX', A: 70, fullMark: 100 },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary-custom">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          <span>03.</span> {t('skills.title')}
        </h2>
        <Row className="mt-5">
          <Col lg={7} data-aos="fade-right">
            <div className="d-flex flex-wrap gap-3 mb-4">
              {skillsData.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-badge rounded d-flex flex-column align-items-center justify-content-center shadow-sm"
                  style={{ width: '100px', height: '100px' }}
                >
                  <div className="text-accent mb-2" style={{ fontSize: '2.5rem' }}>
                    {skill.icon}
                  </div>
                  <span className="text-text-primary fw-medium" style={{ fontSize: '0.8rem' }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={5} data-aos="fade-left" data-aos-delay="200">
            <div className="p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <h4 className="text-center text-text-primary mb-4 fw-bold">Skill Proficiency</h4>
              <div style={{ width: '100%', height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke="var(--nav-border)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--accent-color)', color: 'var(--text-primary)' }} />
                    <Radar name="Proficiency" dataKey="A" stroke="var(--accent-color)" fill="var(--accent-color)" fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
