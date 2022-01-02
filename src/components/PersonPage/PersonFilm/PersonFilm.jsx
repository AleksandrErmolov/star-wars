import React from "react";
import { useState, useEffect } from "react";

import { makeConcurrentRequest } from "../../../services/getPeopleData";
import { changeHTTP } from "../../../utils/network";

import styles from "./PersonFilm.module.css";

export default function PersonFilm({ personFilms }) {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);
      setFilmsName(response);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({ title, episode_id }) => (
            <li className={styles.list__item} key={episode_id}>
              <span className={styles.item__episode}>
                Episode {episode_id}{" "}
              </span>
              <span className={styles.list__colon}>:</span>
              <span className={styles.list__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
