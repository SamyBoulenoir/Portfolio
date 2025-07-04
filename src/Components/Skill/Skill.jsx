import React from "react";
import { FaTools, FaUserFriends, FaMusic } from "react-icons/fa";
import "./Skill.css";

const skills = ["JavaScript", "React.js", "Vue.js", "Node.js", "SQL", "Git"];
const softSkills = ["Travail d'équipe", "Communication", "Investissement", "Proactivité", "Éclectisme", "Jovial"];
const interests = ["Musique", "Guitare (autodidacte)", "Technologie", "Veille technologique"];

const Skill = () => {
    return (
        <div className="skill-section">
            <h1 className="skill-title">Mes compétences</h1>
            <div className="skills-card-container">
                <div className="skill-block">
                    <div className="icon-wrapper">
                        <FaTools size={30} />
                    </div>
                    <h2>Compétences techniques</h2>
                    <div className="badge-container">
                        {skills.map((skill) => (
                            <span key={skill} className="badge">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="skill-block">
                    <div className="icon-wrapper">
                        <FaUserFriends size={30} />
                    </div>
                    <h2>Soft skills</h2>
                    <div className="badge-container">
                        {softSkills.map((skill) => (
                            <span key={skill} className="badge">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="skill-block">
                    <div className="icon-wrapper">
                        <FaMusic size={30} />
                    </div>
                    <h2>Centres d'intérêt</h2>
                    <div className="badge-container">
                        {interests.map((interest) => (
                            <span key={interest} className="badge">{interest}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
