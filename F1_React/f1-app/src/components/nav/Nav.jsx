import { useState } from "react";
import styles from './Nav.module.css';

export default function Nav() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header className={styles.headerRoot}>
      <div className={`${styles.wrapper} ${styles.navFlex}`}>
        <div className={styles.brand}>
          F1<span style={{ opacity: 0.8 }}>Info</span>
        </div>

        <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li><a className={styles.navLink} href="/">Home</a></li>
            <li><a className={styles.navLink} href="/drivers">Drivers/Teams</a></li>
            <li><a className={styles.navLink} href="/races">Races</a></li>
            <li><a className={styles.navLink} href="/standings">Standings</a></li>
            <li><a className={styles.navLink} href="/news">News</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Formula 1 reveals calendar for 2026 season — 
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          All the highlights F1 calendar —
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          RACE WEEK: 5 storylines —
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Formula 2 and Formula 3 2026 calendarse —
          {/* <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          DRIVER MARKET: Who's on Cadillac’s next driver — */}
        </div>
    </div>
    </>
);}