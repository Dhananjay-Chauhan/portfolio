import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";
import "../styles/globals.css"
const ExperienceCard = ({ experience }) => {
  return (
    <div className={styles.card}>
      {/* <Image src={project.image} height={300} width={330} alt={project.name} /> */}
      <div className={styles.content}>
        {/* <h1 className="blueOval"> */}
        <span className="blueOval">
          { experience.organisation}
        </span>
        <br /><br />
        <span className="greenOval">
          {experience.role}
        </span>
        <br /><br />
        <span className="dblue">
          {experience.duration}
          
        </span>

        <div className={styles.tags}>
          {experience.tasks.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        
      
      </div>
    </div>
  );
};

export default ExperienceCard;
