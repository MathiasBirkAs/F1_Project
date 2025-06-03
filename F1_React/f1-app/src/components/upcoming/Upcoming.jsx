import styles from "./Upcoming.module.css";


export default function Upcoming() {
    return (
        <>

<section class={styles.wrapper}>
    <div class={styles.sectiontitle}>Upcoming Races</div>
    <div class={styles.miniCards}>
      <div class={styles.minicard}><i class="fa-solid fa-calendar-days"></i> 15 Jun · Canadian GP · Gilles Villeneuve</div>
      <div class={styles.minicard}><i class="fa-solid fa-calendar-days"></i> 29 Jun · Austrian Grand Prix · Red Bull Ring</div>
      <div class={styles.minicard}><i class="fa-solid fa-calendar-days"></i> 6 Jul · British Grand Prix · Silverstone</div>
    </div>
  </section>

       </>
    );
}