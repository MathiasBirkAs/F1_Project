import { useEffect, useState } from "react";
import styles from "./infodriver.module.css";

import axios from "axios";


export default function Infodriver() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/teams") 
      .then(res => setTeams(res.data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <>
    <div className={styles.wrapperCar}>
    <div className={styles.drivers}>

      <h1 className={styles.title}>F1 Drivers and Teams</h1>
      {teams.map((team) => (
        <div
  className={styles.driverCard} 
  style={{  
    borderLeft: `6px solid ${team.color}`,
    boxShadow: `0 4px 24px #000a, 0 0 16px 2px ${team.color}`
  }}
>
  <h2 className={styles.teamTitle}>{team.team} Team</h2>
  <div className={styles.driverRow}>
    {team.drivers.map(driver => (
      <div className={styles.driverBlock} key={driver.name}>
        <img
          className={styles.driverPhoto}
          src={driver.photo}
          alt={driver.name}
        />
        <div className={styles.driverName}>{driver.name}</div>
        <div className={styles.driverNumFlag}>
          <span className={styles.driverNum}>{driver.num}</span>
          <img src={driver.flag} className={styles.flag} alt={driver.country} />
        </div>
        <ul className={styles.driverStats}>
          <li>
            <b>Team:</b> {team.team}
          </li>
          <li>
            <b>Country:</b> {driver.country}
          </li>
        </ul>
      </div>
    ))}
  </div>
</div>
      ))}
    </div>
    </div>
    </>
  );
}
