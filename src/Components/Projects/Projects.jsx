import './Projects.css';
import { Image } from 'react-bootstrap';

const projects = [
  {
    title: 'Mona Éducation',
    description: "Mona est une plateforme de recherche de cours en ligne tout en un ! Ce projet m'a permis de d'améliorer mes compétences web, en react.js et node.js, ainsi que de toucher aux github actions et de travailler en collaboration avec différentes équipes.",
    link: 'http://mona-edu.com/',
    img: process.env.PUBLIC_URL + "/Mona.png"
  },
  {
    title: 'Mon GitHub',
    description: 'Dépôt de mes projets personnels, expérimentations, contributions open source. Retrouvez tout mon code sur mon GitHub !',
    link: 'https://github.com/SamyBoulenoir',
    img: process.env.PUBLIC_URL + "/Github.webp",
  },
    {
    title: 'Kasa',
    description: "le projet Kasa m'a donné l'occasion d'implémenter le front-end d'une application de location immobilière en utilisant React et React Router. J'ai ainsi pu créer une expérience utilisateur moderne et réactive, tout en découvrant l'utilisation de Sass pour le style et les animations CSS pour rendre l'application plus attrayante.",
    link: 'https://github.com/SamyBoulenoir/Kasa',
    img: process.env.PUBLIC_URL + "/kasa.png",
  },
];

export default function Projects() {
  return (
     <div className='projects-section'>
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
      </div>
    );
}
