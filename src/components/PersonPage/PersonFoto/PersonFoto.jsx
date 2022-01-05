import React from "react";
import { useDispatch } from "react-redux";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "../../../store/actions/index";

import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";

import styles from "./PersonFoto.module.css";

export default function PersonFoto({
  personName,
  personFoto,
  personId,
  setPersonFavorite,
  personFavorite,
}) {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personFoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personFoto} alt={personName} />

        <img
          className={styles.favorite}
          onClick={dispatchFavoritePeople}
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt="Add to favorite"
        />
      </div>
    </>
  );
}
