import React from 'react';
import styles from "./Newspre.module.css";



export default function Newspre() {
  return (
<section className={styles.wrapper}>
    <div className={styles.sectiontitle}>Latest News</div>
    <div className={styles.miniCards}>
      <div className={styles.minicard}><i className="fa-solid fa-newspaper"></i> McLaren signs new tech partnership</div>
      <div className={styles.minicard}><i className="fa-solid fa-trophy"></i> Verstappen sets new qualifying record</div>
      <div className={styles.minicard}><i className="fa-solid fa-flag-checkered"></i> FIA tightens safety rules for pit lane</div>
      <div className={styles.minicard}><i className="fa-solid fa-car"></i> Aston Martin launches 2025 car livery</div>
    </div>
</section>
  );
}