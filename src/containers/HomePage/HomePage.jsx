import React from "react";
import ChooseSide from "../../components/HomePage/ChooseSide/ChooseSide";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <h1 className="header__text">Choose your side</h1>
      <ChooseSide />
    </div>
  );
}
