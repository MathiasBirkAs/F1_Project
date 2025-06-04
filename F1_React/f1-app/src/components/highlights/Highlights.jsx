import React from 'react';
import styles from "./Highlights.module.css";



export default function highlights() {
    return (
        <>
    <section id="highlights" className={styles.wrapper}>
    <div className={styles.sectiontitle}>Highlights</div>
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Oscar_Piastri.png/500px-Oscar_Piastri.png" alt="" />
        <h3>Driver of the Week</h3>
        <small>Oscar Piastri · McLaren</small>
      </div>
      <div className={styles.card}>
        <img src="https://media.formula1.com/content/dam/fom-website/teams/2025/mclaren-logo.png" alt="" />
        <h3>Team Spotlight</h3>
        <small>McLaren Formula 1 Team</small>
      </div>
      <div className={styles.card}>
        <img src="https://media.formula1.com/content/dam/fom-website/races/2025/race-listing/Canada.jpg" alt="" />
        <h3>Upcoming Race</h3>
        <small>Canadian GP · 13 - 15 Jun</small>
      </div>
    </div>
  </section>
  </>
    );
    }
    