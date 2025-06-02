import styles from "./Header.module.css";
import carImage from '../../assets/f1-cars.jpg';


export default function Header() {
  return (
    <>
    {/* <header className={styles.headerRoot}>
      <div className={styles.wrapper + " " + styles.navFlex}>
        <div className={styles.brand}>
          F1<span style={{opacity:.8}}>Info</span>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li><a className={styles.navLink} href="/">Home</a></li>
            <li><a className={styles.navLink} href="/drivers">Drivers</a></li>
            <li><a className={styles.navLink} href="/teams">Teams</a></li>
            <li><a className={styles.navLink} href="/races">Races</a></li>
            <li><a className={styles.navLink} href="/standings">Standings</a></li>
            <li><a className={styles.navLink} href="/news">News</a></li>
            <li><a className={styles.navLink} href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </header> */}

    <div style={{
    background: `url(${carImage}) center/cover no-repeat`
  }}>
      {/* <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Verstappen leads WDC by 45 pts —
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Ferrari bring new side‑pod package to Barcelona —
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Alonso re‑signs through 2026 —
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Mercedes confirms engine upgrade —
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Pirelli announces new tire compound for rain —
        </div>
      </div> */}

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>
            Next race · 1 June 2025 · Barcelona‑Catalunya
          </p>
          <h1 className={styles.heroTitle}>Catalan Grand Prix</h1>
          <a href="#" className={styles.btn}>Event Details</a>
        </div>
      </section>
    <div className={styles.divider}></div>
    </div>
    </>
  );
}
