import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Hello! I'm Dhananjay</b> , a final-year Computer Science Engineering
        student with a passion for web development and problem-solving,I actively participate in coding competitions on
        platforms like Codeforces, LeetCode, and CodeChef, where I enjoy
        tackling complex problems and refining my analytical skills."
      />
      <meta
        name="keywords"
        content="Dhananjay Chauhan, web developer portfolio, Dhananjay web developer, nitin developer, mern stack, Dhananjay Chauhan portfolio"
      />
      <meta property="og:title" content="Dhananjay Chauhan's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Dhananjay Chauhan',
};

