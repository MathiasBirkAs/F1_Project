import { useEffect, useState } from "react";
import styles from "./infodriver.module.css";
import axios from "axios";

export default function Infodriver() {
  const [teams, setTeams] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [modalColor, setModalColor] = useState("#fff");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/teams")
      .then((res) => setTeams(res.data))
      .catch((err) => console.error("API error:", err));
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
                boxShadow: `0 4px 24px #000a, 0 0 16px 2px ${team.color}`,
              }}
              key={team.team}
            >
              <h2 className={styles.teamTitle}>{team.team} Team</h2>
              <div className={styles.driverRow}>
                {team.drivers.map((driver) => (
                  <div className={styles.driverBlock} key={driver.name}>
                    <img
                      className={styles.driverPhoto}
                      src={driver.photo}
                      alt={driver.name}
                    />
                    <img src={driver.car} alt="car" />
                    <div className={styles.driverName}>{driver.name}</div>
                    <div className={styles.driverNumFlag}>
                      <span className={styles.driverNum}>{driver.num}</span>
                      <img
                        src={driver.flag}
                        className={styles.flag}
                        alt={driver.country}
                      />
                    </div>
                    <button
                      className={styles.moreInfo}
                      onClick={() => {
                        setSelectedDriver({ ...driver, team: team.team });
                        setModalColor(team.color);
                      }}
                    >
                      More Info
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDriver && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedDriver(null)}
        >
          <div
            className={styles.driverModal}
            onClick={(e) => e.stopPropagation()}
            style={{ borderTop: `6px solid ${modalColor}` }}
          >
            <img
              src={selectedDriver.photo}
              alt={selectedDriver.name}
              className={styles.modalPhoto}
            />
            <h2>{selectedDriver.name}</h2>
            <p>
              <b>Age:</b> {selectedDriver.age}
            </p>
            <p>
              <b>Team:</b> {selectedDriver.team}
            </p>
            <p>
              <b>Country:</b> {selectedDriver.country}
            </p>
            <img
              src={selectedDriver.car}
              alt="car"
              className={styles.modalCar}
            />
            <button
              className={styles.closeModal}
              onClick={() => setSelectedDriver(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
