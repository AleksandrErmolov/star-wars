import React from "react";
import { getApiResource } from "../../utils/network";
import { getPeopleImage } from "../../services/getPeopleData";
import { API_PERSON } from "../../constants/api";
import { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { withErrorApi } from "../../hoc-helpers/withErrorApi";

import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonFoto from "../../components/PersonPage/PersonFoto/PersonFoto";
import PersonaLinkBack from "../../components/PeoplePage/PersonaLinkBack/PersonalLinkBack";

import styles from "./PersonPage.module.css";
import UILoading from "../../components/UI/UILoading/UILoading";

const PersonFilm = React.lazy(() =>
  import("../../components/PersonPage/PersonFilm/PersonFilm")
);

function PersonPage({ setErrorApi }) {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personFoto, setPersonFoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);


  const storeData = useSelector(state => state.favoriteReducer)


const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}`);
      
      setPersonId(id);
      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Massa", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonFoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonaLinkBack id={id} />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonFoto
            personId={personId}
            personFoto={personFoto}
            personName={personName}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}

          {personFilms && (
            <Suspense fallback={<UILoading />}>
              <PersonFilm personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
}

export default withErrorApi(PersonPage);
