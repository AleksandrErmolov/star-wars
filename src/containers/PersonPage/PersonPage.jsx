import React from "react";
import { getApiResource } from "../../utils/network";
import { getPeopleImage } from "../../services/getPeopleData";
import { API_PERSON } from "../../constants/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonFoto from "../../components/PersonPage/PersonFoto/PersonFoto";

import styles from "./PersonPage.module.css";
import PersonaLinkBack from "../../components/PeoplePage/PersonaLinkBack/PersonalLinkBack";

function PersonPage({ setErrorApi }) {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personFoto, setPersonFoto] = useState(null);

    

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}`);

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
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

    return (
      <>
            <PersonaLinkBack id={id}/>
        <div className={styles.wrapper}>
          <span className={styles.person__name}>{personName}</span>
          <div className={styles.container}>
            <PersonFoto personFoto={personFoto} personName={personName} />
            {personInfo && <PersonInfo personInfo={personInfo} />}
          </div>
        </div>
      </>
    );
}

export default withErrorApi(PersonPage);
