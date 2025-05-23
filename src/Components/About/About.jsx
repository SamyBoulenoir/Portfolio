import './About.css';
import { Image } from 'react-bootstrap';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className='about-me'>
        <div className='dflex justify-content-center align-items-center flex-row'>
          <h1>Bienvenue sur mon portfolio !</h1>
        </div>
        <div className='photo-frame'>
          <Image className='profile-picture' src="moi.png" alt="ma photo" roundedCircle />
          <p className='about-informations-text'>Salut, moi c’est Samy Boulenoir
            <br />
            Développeur web fullstack passionné, je conçois des applications web modernes, performantes et bien pensées, du front au back.</p>
        </div>

        <div className='about-informations'>
          <a
            href="/cv_samy_boulenoir.pdf"
            download
            className="project-button"
            style={{ textDecoration: 'none' }}
          >
            Télécharger mon CV
          </a>
        </div>
      </div>

    </section>
  );
}