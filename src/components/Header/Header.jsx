import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Favorite from "../Favorite/Favorite";

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "../../context/ThemeProvider";

import dark from "./img/dark.png";
import light from "./img/light.png";
import neitral from "./img/neitral.png";

import styles from "./Header.module.css";

export default function Header() {
  const [icon, setIcon] = useState(dark);

  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(light);
        break;
      case THEME_DARK:
        setIcon(dark);
        break;
      case THEME_NEITRAL:
        setIcon(neitral);
        break;

      default:
        setIcon(dark);
    }
  }, [isTheme]);

  return (
    <div className={styles.conteiner}>
      <img className={styles.logo} src={icon} alt="Logo" />

      <ul className={styles.list__container}>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1"> People </NavLink>
        </li>
        <li>
          <NavLink to="/not-found"> Not Found </NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
}
