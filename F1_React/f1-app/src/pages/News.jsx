import { useState } from 'react';
import styles from '../styles/News.module.css';


const newsData = [
  {
    title: "6 Winners and 5 Losers from Spain – Who bossed it in Barcelona?",
    category: "Feature",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/fom-website/2025/Spain/Winners%20Spain",
    summary: "A deep dive into the heroes and zeroes from an intense Spanish GP weekend.",
    content: `Barcelona served up drama, domination and disappointment. Here's a breakdown:
    
    🏆 Winner: Oscar Piastri
      Piastri conquered the track where he'd struggled last year, earning the season’s largest pole margin (0.209s) ahead of Lando Norris. He went on to convert it into his fifth win of the season—his first since Miami—becoming just the third McLaren driver to score eight straight podiums, alongside Senna and Hamilton. The victory stretches his championship lead to 10 points over Norris and 49 ahead of Max Verstappen.
    
      😞 Loser: Max Verstappen
      Verstappen endured a frustrating weekend: failing to make the front row for the first time since 2020, misfiring in tire strategy, and ultimately colliding with George Russell. That incident drew a 10‑second penalty and added two super-license points, leaving him vulnerable.
    
      🏁 Winner: Nico Hülkenberg
      Initially missing Q2, Hulkenberg made a great start and capitalized on fresh soft tires after the safety car to finish P6 (P5 after Verstappen’s penalty). It was his best-ever result in Barcelona—and Kick Sauber’s best since 2022.
    
      😞 Losers: Williams
      Williams saw their scoring streak end. Alex Albon suffered front-wing damage and retired, while teammate Carlos Sainz also failed to score—marking their first blank weekend since Bahrain.
    
      🏆 Winner: Charles Leclerc
      Leclerc took advantage of a late-race tire shuffle to bag P3—his first podium in Spain and Ferrari’s first at the track since 2017. It also marked his second straight podium and seventh consecutive points finish.
    
      😞 Loser: Kimi Antonelli
        Antonelli qualified well, but a power-unit issue forced him to retire while running P7, continuing a rough run in the triple-header.`,
    date: "June 9, 2025"
  },
  {
    title: "Verstappen admits Russell contact ‘shouldn’t have happened’",
    category: "News",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2025/F1_Grand_Prix_of_Spain___Practice/2217837573",
    summary: "The Dutchman reflects on a close call that nearly ended in disaster.",
    content: "Verstappen spoke candidly after the race about the lap 34 contact with Russell, calling it 'unnecessary' and 'avoidable'. Both drivers managed to continue without damage, but the stewards took note. Verstappen emphasized the importance of clear communication between teams in high-pressure moments.",
    author: "F1 Newswire",
    date: "June 10, 2025"
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
  const [activeNews, setActiveNews] = useState(null);

  return (
    <section className={styles.newsWrapper}>
      <h2 className={styles.sectionTitle}>F1 News</h2>
      <div className={styles.newsGrid}>
        {newsData.map((item, idx) => (
          <div key={idx} className={styles.card} onClick={() => setActiveNews(item)}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.content}>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.summary}>{item.summary}</p>
            </div>
          </div>
        ))}
      </div>

      {activeNews && (
        <div className={styles.modalOverlay} onClick={() => setActiveNews(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <img src={activeNews.image} alt={activeNews.title} className={styles.modalImage} />
            <span className={styles.modalMeta}>
              {activeNews.date} · {activeNews.author}
            </span>
            <h3 className={styles.modalTitle}>{activeNews.title}</h3>
            <p className={styles.modalContent}>{activeNews.content}</p>
            <button className={styles.closeButton} onClick={() => setActiveNews(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}