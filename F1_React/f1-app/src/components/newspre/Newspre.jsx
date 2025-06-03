import React from 'react';
import styles from "./Newspre.module.css";



export default function Newspre() {
  return (
<section class={styles.wrapper}>
    <div class={styles.sectiontitle}>Latest News</div>
    <div class={styles.miniCards}>
      <div class={styles.minicard}><i class="fa-solid fa-newspaper"></i> McLaren signs new tech partnership</div>
      <div class={styles.minicard}><i class="fa-solid fa-trophy"></i> Verstappen sets new qualifying record</div>
      <div class={styles.minicard}><i class="fa-solid fa-flag-checkered"></i> FIA tightens safety rules for pit lane</div>
      <div class={styles.minicard}><i class="fa-solid fa-car"></i> Aston Martin launches 2025 car livery</div>
    </div>
</section>
  );
}