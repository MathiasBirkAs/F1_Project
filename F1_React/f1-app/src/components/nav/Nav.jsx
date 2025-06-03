import styles from './Nav.module.css';

export default function Nav() {
  return (
    <>
    <header className={styles.headerRoot}>
          <div className={styles.wrapper + " " + styles.navFlex}>
            <div className={styles.brand}>
              F1<span style={{opacity:.8}}>Info</span>
            </div>
            <nav>
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
          F2: Lindblad dominates in Barcelona —
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Ferrari bring new side‑pod package to Barcelona —
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Alonso re‑signs through 2026 —
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Mercedes confirms engine upgrade —
          <span className={styles.tickerDot}><i className="fa-solid fa-circle"></i></span>
          Pirelli announces new tire compound for rain —
        </div>
    </div>
    </>
);}