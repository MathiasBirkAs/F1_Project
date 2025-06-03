import styles from '../styles/News.module.css';

const newsData = [
  {
    title: "6 Winners and 5 Losers from Spain – Who bossed it in Barcelona?",
    category: "Feature",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/fom-website/2025/Spain/Winners%20Spain",
    summary: "A deep dive into the heroes and zeroes from an intense Spanish GP weekend.",
  },
  {
    title: "Verstappen admits Russell contact ‘shouldn’t have happened’",
    category: "News",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2025/F1_Grand_Prix_of_Spain___Practice/2217837573",
    summary: "The Dutchman reflects on a close call that nearly ended in disaster.",
  },
  {
    title: "MONDAY DEBRIEF: Why were Verstappen and Leclerc racing so hard?",
    category: "Feature",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/fom-website/2025/Spain/MMD%20Spain",
    summary: "Aggressive moves and hidden tension between two title contenders.",
  },
  {
    title: "Downbeat Hamilton says he learned ‘absolutely nothing’",
    category: "News",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2025/F1_Grand_Prix_of_Spain/2218074800",
    summary: "from triple header after tough run to P6 in Barcelona"
  },
   {
    title: "Albon rues ‘messy race' as Sainz says 'nothing went our way'",
    category: "News",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/fom-website/2025/Spain/Sainz%20Albon%20Spain",
    summary: "in Spain as Williams fail to score for first time since Bahrain"
  },
   {
    title: "‘Aggressive’ Alonso",
    category: "News",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/trackside-images/2025/F1_Grand_Prix_of_Spain___Practice/2217799483",
    summary: "scores first points of the season at ‘special’ home race"
  }
];

export default function News() {
  return (
    <section className={styles.newsWrapper}>
      <h2 className={styles.sectionTitle}>F1 News</h2>
      <div className={styles.newsGrid}>
        {newsData.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.content}>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.summary}>{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}