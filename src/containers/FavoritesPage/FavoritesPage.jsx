import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PeopleList from "../../components/PeoplePage/PeopleList";

import styles from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const [people, setPeople] = useState([]);

  const storeData = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });
        setPeople(res)
    }
  }, []);

  return (
    <div>
          <h1 className='header__text'>Favorite Page</h1>
          {people.length
              ? <PeopleList people={people} />
              : <h2 className={styles.comment}> Список пуст!
                  <br /> Добавьте в <span className='header__text'> избранное </span>
                  из раздела <span className='header__text'>People </span> </h2>
          }
      
    </div>
  );
}
