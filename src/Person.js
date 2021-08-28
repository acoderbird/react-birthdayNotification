import React,{useState} from "react";
import styles from "./myPerson.module.css";

export default function Person(props) {
  const [toggle,setToggle]=useState(true);
  const url ="url("+props.image+")";
  return (
    <div className={styles.container}>
      <div className={styles.person}>
      <div className={styles.image}
      style={{backgroundImage: url}}>
      </div>
      <div className={styles.name}>
      <h2>{props.name}</h2>
      <p>{new Date().getFullYear()-new Date(props.dob).getFullYear()} years</p>
      <p className={styles.info}>{toggle?props.info.substring(0,100)+"...":props.info+"..."}
      <button className={styles.toggle}
      onClick={()=>setToggle(!toggle)}>{toggle?"Read more":"Show less"}</button></p>
      </div>
      </div>
      <div className={styles.close} onClick={()=>props.removeFromList(props.id)}>x</div>
    </div>
  );
}
