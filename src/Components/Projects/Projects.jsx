import './Projects.css';
import { Image } from 'react-bootstrap';

const projects = [
  {
    title: 'Mona Éducation',
    description: 'Développement et maintenance d’une plateforme de cours en ligne (React, Node.js) dans le cadre de ma formation OpenClassrooms.',
    link: 'http://mona-edu.com/',
    img: process.env.PUBLIC_URL + "/Mona.png"
  },
  {
    title: 'Mon GitHub',
    description: 'Dépôt de mes projets personnels, expérimentations, contributions open source. Retrouvez tout mon code sur mon GitHub !',
    link: 'https://github.com/SamyBoulenoir',
    img: process.env.PUBLIC_URL + "/Github.webp",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h1 className="project-title">Mes Projets</h1>
      <div className="projects-grid">
        {projects.map(({ title, description, link, img }, index) => (
          <div className="project-block" key={index}>
            <Image roundedCircle src={img} alt={title} className="project-img" />
            <h3>{title}</h3>
            <p>{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Visiter
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
