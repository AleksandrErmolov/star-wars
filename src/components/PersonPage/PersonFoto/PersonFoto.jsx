import React from 'react'

import styles from "./PersonFoto.module.css";

export default function PersonFoto({ personName, personFoto}) {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={personFoto} alt={personName} />
    </div>
  );
}
