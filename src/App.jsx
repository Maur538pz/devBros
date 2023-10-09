import "./App.css";
import { useState, useEffect } from "react";


import { Main } from './Page/Main.jsx'

function App() {
  //let observer=new window.IntersectionObserver
  const [scrollPos, setScrollPos]=useState(0)

  const handleScroll=()=>{
    const position=window.pageYOffset;
    setScrollPos(position);
    console.log(position)
  }
  const classTitle=(scrollPos>=400)?'title1 titleTop':'title1'
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll,{passive:true});
    return()=>{
      removeEventListener('scroll',handleScroll);
    }
  },[])
  return(
    <section className="seccion1">
      <Main />
      <div className={classTitle}>Ocean Garden</div>
    </section>
  )
}

export default App;