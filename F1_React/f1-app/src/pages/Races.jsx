import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Races.module.css";

export default function Races() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/races")
      .then(res => setRaces(res.data))
      .catch(err => console.error("Failed to fetch races", err));
  }, []);

  // Helper to format date range, month, etc.
  function getDateParts(race) {
  if (!race.startDate || !race.endDate) return { month: "??", range: "??" };

  const start = new Date(race.startDate);
  const end = new Date(race.endDate);

  if (isNaN(start) || isNaN(end)) return { month: "??", range: "??" };

  if (start.getMonth() === end.getMonth()) {
    const range = `${start.getDate()}–${end.getDate()}`;
    const month = start.toLocaleString("en-US", { month: "short" }).toUpperCase();
    return { month, range };
  } else {
    const startMonth = start.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const endMonth = end.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const range = `${start.getDate()} ${startMonth}–${end.getDate()} ${endMonth}`;
    return { month: "", range };
  }
}

  return (
    <div className={styles.raceGrid}>
      {races.map((race, idx) => {
        const { month, range } = getDateParts(race);
        return (
          <div className={styles.raceCard} key={race._id || idx}>
            <div className={styles.raceHeader}>
              <span className={styles.round}>ROUND {idx + 1}</span>
              <img className={styles.flag} src={race.flag} alt={race.country} />
            </div>
            <div className={styles.raceDateBlock}>
              <span className={styles.raceRange}>{range}</span>
              <span className={styles.raceMonth}>{month}</span>
            </div>
            <div className={styles.raceCountry}>{race.country}</div>
            <div className={styles.raceTitle}>{race.name}</div>
            <div className={styles.circuitName}>{race.circuit}</div>
            <div className={styles.circuitImgWrap}>
              <img
                className={styles.circuitImg}
                src={race.race}
                alt={race.circuit + " layout"}
                loading="lazy"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
