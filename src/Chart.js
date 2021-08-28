import React,{useState,useEffect} from "react";
import styles from "./mychart.module.css";
import Person from "./Person.js"
import {data} from "./Data.js"

export default function Chart() {
  const [persons,setPersons]=useState([]);
  const [total,setTotal]=useState(0);
  const clearAll=()=>{
    setPersons([]);
  }
useEffect(()=>{
  console.log("useeffect ran once")
 
  setPersons(data.filter((p)=>{
    return new Date(p.dob).getMonth()===new Date().getMonth();
  }));
  
},[]);

  return (<div className={styles.display}>
    <p><span>{persons.length}</span> Birthdays this month</p>
    {persons.map((p)=>{
      return <Person name={p.name} dob={p.dob} key={p.id} image={p.image}></Person>
    })}
    <button onClick={clearAll}>Clear All</button></div>
  );
}
