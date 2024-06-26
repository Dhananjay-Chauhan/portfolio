import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/json_icon.svg" filename="experience.json" path="/experience" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
      {/* <Tab icon="/portfolio/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/portfolio/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/portfolio/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/portfolio/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/portfolio/json_icon.svg" filename="experience.json" path="/experience" />
      <Tab icon="/portfolio/markdown_icon.svg" filename="github.md" path="/github" /> */}
    </div>
  );
};

export default Tabsbar;
