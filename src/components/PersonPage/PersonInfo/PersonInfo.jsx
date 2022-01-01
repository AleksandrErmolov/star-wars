import React from "react";

import styles from "./PersonInfo.module.css";


export default function PersonInfo({ personInfo} ) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <li className={styles.list__item} key={title}>
                <span className={styles.item__title}>{title}:</span> {data}
              </li>
            )
        )}
      </ul>
    </div>
  );
}
