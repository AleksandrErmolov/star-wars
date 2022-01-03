import React from "react";
import { useDispatch } from "react-redux";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "../../../store/actions/index";

import styles from "./PersonFoto.module.css";

export default function PersonFoto({ personName, personFoto }) {
  const dispatch = useDispatch();

  const add = () => {
    setPersonToFavorite();
  };

  const remove = () => {
    removePersonFromFavorite();
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personFoto} alt={personName} />
      </div>
      <button onClick={add}>Добавить в избранное</button>
      <button onClick={remove}>Удалить из избранного</button>
    </>
  );
}
