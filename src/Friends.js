import React,{useState,useEffect} from "react";
import Person from "./Person.js"
import {data} from "./Data.js"

export default function Friends() {
  
  const [currentIndex,setCurrentI]=useState(0);
  const [currentF,setCurrentF]=useState();
  useEffect(()=>{
    setCurrentF(data[currentIndex]);
  },[])
  const previousF=()=>{
 if(currentIndex!=0){
  let i=currentIndex;
   setCurrentI(i-1);
   setCurrentF(data[i-1]);
 }
  }
  const nextF=()=>{
    if(currentIndex!=data.length-1){
      let i=currentIndex;
      setCurrentI(i+1);
      setCurrentF(data[i+1]);
    }
  }
  const randomI=()=>{
    let i=Math.floor(Math.random()*data.length)
      setCurrentI(i);
      setCurrentF(data[i]);
    
  }
  return (<div>
    <h1>Friends list {currentIndex}</h1>
     <Person name={currentF?.name} dob={currentF?.dob}
       image={currentF?.image}/>
       <p >
         <span style={{cursor:"pointer"}} onClick={previousF}>&lt;</span>
       <span onClick={nextF} style={{cursor:"pointer"}}>&gt;</span></p>
       <p onClick={randomI} style={{cursor:"pointer",color:"blue"}}>surprise me</p>
     </div>
    
  );
}