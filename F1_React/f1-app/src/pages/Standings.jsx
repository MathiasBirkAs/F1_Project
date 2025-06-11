import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Standings.module.css";

export default function Standings() {
  const [tab, setTab] = useState("drivers");
  const [drivers, setDrivers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/driverstandings").then(res => setDrivers(res.data));
    axios.get("http://localhost:5000/api/teamstandings").then(res => setTeams(res.data));
    axios.get("http://localhost:5000/api/raceresults").then(res => setResults(res.data));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>2025 Standings & Results</h1>
      <div className={styles.tabs}>
        <button className={tab === "drivers" ? styles.active : ""} onClick={() => setTab("drivers")}>Drivers</button>
        <button className={tab === "teams" ? styles.active : ""} onClick={() => setTab("teams")}>Teams</button>
        <button className={tab === "results" ? styles.active : ""} onClick={() => setTab("results")}>Race Winners</button>
      </div>

      {tab === "drivers" && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Driver</th>
              <th>Nationality</th>
              <th>Car</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map(d => (
              <tr key={d.position}>
                <td>{d.position}</td>
                <td>{d.driver}</td>
                <td>{d.nationality}</td>
                <td>{d.car}</td>
                <td>{d.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {tab === "teams" && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(t => (
              <tr key={t.position}>
                <td>{t.position}</td>
                <td>{t.team}</td>
                <td>{t.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {tab === "results" && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Grand Prix</th>
              <th>Date</th>
              <th>Winner</th>
              <th>Car</th>
              <th>Laps</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, idx) => (
              <tr key={idx}>
                <td>{r.grandPrix}</td>
                <td>{new Date(r.date).toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'})}</td>
                <td>{r.winner}</td>
                <td>{r.car}</td>
                <td>{r.laps}</td>
                <td>{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
