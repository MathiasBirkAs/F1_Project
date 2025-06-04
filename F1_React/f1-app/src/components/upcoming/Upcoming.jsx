import styles from "./Upcoming.module.css";


export default function Upcoming() {
    return (
        <>

<section className={styles.wrapper}>
    <div className={styles.sectiontitle}>Upcoming Races</div>
    <div className={styles.miniCards}>
      <div className={styles.minicard}><i className="fa-solid fa-calendar-days"></i> 15 Jun · Canadian GP · Gilles Villeneuve</div>
      <div className={styles.minicard}><i className="fa-solid fa-calendar-days"></i> 29 Jun · Austrian Grand Prix · Red Bull Ring</div>
      <div className={styles.minicard}><i className="fa-solid fa-calendar-days"></i> 6 Jul · British Grand Prix · Silverstone</div>
    </div>
  </section>

       </>
    );
}