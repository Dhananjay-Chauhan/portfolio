const AboutPage = () => {
  return (
    <>
      <h3>~whoami</h3>
      <br />
      <h2>
        Hello! <b>I&apos;m Dhananjay</b> , a final-year Computer Science Engineering
        student with a passion for web development and problem-solving.
      </h2>
      <br />
      <p>
        Over the past few years, I&apos;ve had the opportunity to work on various
        projects that have honed my skills and expanded my knowledge. I&apos;ve
        collaborated with several university clubs, creating and managing
        websites to support their activities and enhance their online presence.
        This experience has not only improved my technical skills but also
        taught me the importance of teamwork and effective communication.
      </p>
      <br />
      <p>
        In addition to my work with university clubs, I have also gained
        valuable industry experience through my time at a small startup. This
        role allowed me to apply my skills in a professional environment,
        tackling real-world problems and contributing to the success of the
        team.
      </p>
      <br />
      <p>
        I am always eager to explore new technologies and stay updated with the
        latest trends in the tech world. This curiosity drives me to
        continuously learn and adapt, ensuring that I can deliver innovative
        solutions to any challenge I face.
      </p>
      <br />
      <p>
        Apart from web development, I am deeply passionate about problem-solving
        and algorithms. I actively participate in coding competitions on
        platforms like Codeforces, LeetCode, and CodeChef, where I enjoy
        tackling complex problems and refining my analytical skills.
      </p>
      <br />
      <p>
        Thank you for visiting my portfolio. Feel free to explore my projects
        and get in touch if you&apos;d like to collaborate or learn more about my
        work!
      </p>
      <br /> <h1>Dhananjay</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
