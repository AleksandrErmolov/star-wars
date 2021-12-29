import { useLocation } from 'react-router';
import React from 'react'
import img from './img/not-found.png'
import styles from "./NotFoundPage.module.css";


export default function NotFoundPage() {
  
  
  let location = useLocation()
  
  return (
    <div className={styles.head}>
      <img className={styles.img} src={img} alt="not found" />
      <p className={styles.text}>No match for {location.pathname}</p>
      </div>
  )
}
