import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import RepoCard from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";
// import imgy from '../public/dracula.png'
const GithubPage = ({ user }) => {
  const repos = [
    {
      id: 1,
      name: "joiefjeoi",
      description: "sdcnidncidncianciasdcac",
      watchers: 4,
      forks: 4,
      stargazers_count: 4,
      homepage:
        "https://github.com/Dhananjay-Chauhan/portfolio",
      html_url: "https://github.com/Dhananjay-Chauhan",
    },
  
  ];
  const theme = {
    level0: "#161B22",
    level1: "#0e4429",
    level2: "#006d32",
    level3: "#26a641",
    level4: "#39d353",
  };
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <>
    <div className={styles.mcontainer}>
      <div className={styles.user}>
        <div>
          <Image
            src="./dracula.png"
            className={styles.avatar}
            alt="cmoicmo"
            width={50}
            height={50}
          />
          <h3 className={styles.username}>Dhananjay</h3>
        </div>
        <div>
          <h3>30 repos</h3>
        </div>
        <div>
          <h3>4 followers</h3>
        </div>
      </div>
      {/* <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div> */}
      <div className={styles.contributions}>
        
        <GitHubCalendar
          username="Dhananjay-Chauhan"
          hideColorLegend
          labels={{
            totalCount: "{{count}} contributions in the last half year",
          }}
        />
      </div>
      </div>
    </>
  );
};


export default GithubPage;
