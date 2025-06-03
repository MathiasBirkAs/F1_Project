import React from 'react';
import styles from "./Highlights.module.css";



export default function highlights() {
    return (
        <>
    <section id="highlights" class={styles.wrapper}>
    <div class={styles.sectiontitle}>Highlights</div>
    <div class={styles.cards}>
      <div class={styles.card}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Oscar_Piastri.png/500px-Oscar_Piastri.png" alt="" />
        <h3>Driver of the Week</h3>
        <small>Oscar Piastri · McLaren</small>
      </div>
      <div class={styles.card}>
        <img src="https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull" alt="" />
        <h3>Team Spotlight</h3>
        <small>Oracle Red Bull Racing</small>
      </div>
      <div class={styles.card}>
        <img src="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit" alt="" />
        <h3>Upcoming Race</h3>
        <small>Canadian GP · 13 - 15 Jun</small>
      </div>
    </div>
  </section>
  </>
    );
    }
    