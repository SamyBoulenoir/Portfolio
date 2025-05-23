import './Education.css'

const educationData = [
  {
    title: "Epitech / Openclassrooms",
    date: "2017 - 2025",
    description: "Deux écoles pour apprendre le C/C++/Js/React/Vue/Node/Docker etc.."
  },
  {
    title: "Création d’un chatbot pour Aximum",
    date: "Décembre 2019 - Mars 2020",
    description: "Chatbot interne pour connecter les pôles via une recherche de compétences et messagerie interne."
  },
  {
    title: "alternance Fullstack à Cleed",
    date: "Avril 2021 - Août 2022",
    description: "Création d’un chatbot e-commerce (Vue.js/Node.js) et refonte de l’outil, création d'arbre de dialogue et utilisation de dialogflow"
  },
  {
    title: "Alternance Fullstack Mona-éducation",
    date: "2024 - 2025",
    description: "Développement et maintenance d’une plateforme de cours en ligne (React, Node.js) dans le cadre d'une formation openclassrooms."
  }
];



export default function Education() {
  return (
    <section id="education" className="education-section">
      <h1>Mon parcours</h1>
      <div className="education-content">
        {educationData.map((edu, index) => (
          <div className="education-wrapper" key={index}>
            <div className="education-part">
              <strong>{edu.title}</strong>
              <span>{edu.date}</span>
              <p>{edu.description}</p>
            </div>
            {index !== educationData.length - 1 && (
              <div className="connector-line"></div>
        )}
  </div>
))}

      </div>
    </section>
  );
}
