import React from "react";
import { Link } from "react-router-dom";

import styles from "./PeopleNavigation.module.css";

export default function PeopleNavigation({
  getResource,
  prevPage,
  nextPage,
  counterPage,
}) {
  const handleChangeNext = () => {
    getResource(nextPage);
  };

  const handleChangePrev = () => {
    getResource(prevPage);
  };

  return (
    <div>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
        <button
          onclick={handleChangePrev}
          className={styles.buttons}
          disabled={!prevPage}
        >
          Previous
        </button>
      </Link>

      <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
        <button
          onclick={handleChangeNext}
          className={styles.buttons}
          disabled={!nextPage}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
