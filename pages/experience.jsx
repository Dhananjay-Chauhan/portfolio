import ExperienceCard from "../components/ExperienceCard";
import styles from "../styles/ProjectsPage.module.css";
import styles2 from "../styles/ExperiencePage.module.css";
import styles3 from "../styles/ProjectCard.module.css";
// import "../styles/global.css";
const Experience = ({ experience }) => {
  const experiences = [
    {
      id: 1,
      organisation: "Chakaralaya Analytics",
      role: "Software Developer Intern",
      duration: "Nov 2023 - Mar 2024",
      tasks: [
        "Assisted in development of Supply Market Intelligence Product would help the Purchase Managers in shortlisting the vendors for their purchase according to the set criteriea.",
        "Assisted in development of main Landing website for the Startup",
      ],
    },
    {
      id: 2,
      organisation: "The Linux Club,VITC",
      role: "Frontend Lead",
      duration: "Oct 2022 - Jan 2024",
      tasks: [
        "Development and maintained of Club Website(https://lugvitc.net/) using React, Tailwind CSS framework and Flask.",
        "Assisted in development of the front end of our CTF (Capture the Flag) Platform using React and Tailwind CSS framework.",
        "Leading a team of developers using version control systems such as Git to organize modifications and assign tasks and work on club projects.",
        "Worked with MERN stack to develop applications like Attendence Management System for the Club in time of Club Events.",
      ],
    },
    {
      id: 3,
      organisation: "PlaceXP Club,VITC",
      role: "Technical Member",
      duration: "Oct 2022 - May 2023",
      tasks: [
        "Worked with Google Firebase to take club member data to put on club website.",
        "Collaborated with team members in development of Websites for events.",
      ],
    },
  ];

  const contactItems = [
    {
      key: "Certification",
      val: "AWS Certified Cloud Practitioner  ",
      href: "",
    },
    {
      key: "Certification",
      val: "AWS Certified Solutions Architect - Associate",
      href: "",
    },
    {
      key: "Stats",
      val: "Leetcode Rating - 30000 (Maximum)",
      href: "",
    },
    {
      key: "Stats",
      val: "Codechef Rating : 101010 (Maximum)",
      href: "",
    },
    {
      key: "Stats",
      val: "Codeforces Rating : 3000 legend(Maximum)",
      href: "",
    },
  ];
  const languages = ['Python', 'Java', 'C', 'C++', 'HTML/CSS', 'JavaScript', 'MySQL'];
  const tools = ['VS Code','Git', 'Github', 'Linux Terminal', 'Google Colab'];
  const tech = ['Linux', 'GitHub', 'ReactJs', 'ExpressJs', 'Node Js', 'MongoDB', 'Flask', 'MySQL', 'Tailwind CSS','Docker'];

  return (
    <>
      <div className={styles.mcont}>
        <h3>My experience</h3>
        <div className={styles.container}>
          {experiences.map((experience) => (
            <ExperienceCard key={experiences.id} experience={experience} />
          ))}
        </div>
      </div>
      <h3>Certifications & Achievements</h3>
      <br />
      <div className={styles2.code}>
        <p className={styles2.line}>
          <span className={styles2.className}>.socials</span> &#123;
        </p>
        {contactItems.slice(0, 8).map((item, index) => (
          <p className={styles2.line} key={index}>
            &nbsp;&nbsp;&nbsp;{item.key}: <a rel="noopener">{item.val}</a>;
          </p>
        ))}
        {contactItems.slice(8, contactItems.length).map((item, index) => (
          <p className={styles2.line} key={index}>
            &nbsp;&nbsp;{item.key}: <a rel="noopener">{item.val}</a>;
          </p>
        ))}
        <p className={styles2.line}>&#125;</p>
      </div>
      <h3>Technical Skills</h3>
      <br />
      <div className={styles3.card}>
        <div className={styles3.content}>
          <span className="blueOval">Languages</span>
          <br />
          <br />
          <div className={styles3.tags}>
            {languages.map((t) => (
              <span key={t} className="greenOval">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className={styles3.card}>
        <div className={styles3.content}>
          <span className="blueOval">Developer Tools</span>
          <br />
          <br />
          <div className={styles3.tags}>
            {tools.map((t) => (
              <span key={t} className="greenOval">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className={styles3.card}>
        <div className={styles3.content}>
          <span className="blueOval">Technologies/Frameworks</span>
          <br />
          <br />
          <div className={styles3.tags}>
            {tech.map((t) => (
              <span key={t} className="greenOval">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
