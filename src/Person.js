import React from "react";
import styles from "./myPerson.module.css";

export default function Person(props) {
  const url ="url("+props.image+")";
  return (
    <div className={styles.person}>
      <div className={styles.image}
      style={{backgroundImage: url}}>
      </div>
      <div className={styles.name}>
      <h2>{props.name}</h2>
      <p>{new Date().getFullYear()-new Date(props.dob).getFullYear()} years</p>
      </div>
    </div>
  );
}
