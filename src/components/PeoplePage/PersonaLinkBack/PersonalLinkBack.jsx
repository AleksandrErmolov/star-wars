import React from "react";
import { useNavigate } from "react-router-dom";
import iconBack from './img/arrow.svg'

import styles from "./PersonaLinkBack.module.css";

export default function PersonaLinkBack() {

  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
          <a onClick={handleGoBack} href="#" className={styles.link}>
              <img className={styles.link__img} src={iconBack} alt="go back" />
        <span>Go back</span>
      </a>
    </div>
  );
}
