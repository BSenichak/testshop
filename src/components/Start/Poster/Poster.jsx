import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import s from "./Poster.module.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

export const Poster = (props) => {
  const [postition, setPosition] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (postition <= -300) {
        setPosition(0);
      } else {
        setPosition(postition - 100);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [postition]);
  return (
    <div className={s.posterWrapper}>
      <div className={s.posterSlider} style={{ left: `${postition}%` }}>
        <img src="../image/Posters/1.png" alt="poster 1" />
        <img src="../image/Posters/2.png" alt="poster 2" />
        <img src="../image/Posters/3.png" alt="poster 3" />
        <img src="../image/Posters/4.png" alt="poster 4" />
      </div>
      <div className={s.btns}>
        <div className={`${s.circle} ${postition === 0 && s.active}`} onClick={()=>setPosition(0)}/>
        <div className={`${s.circle} ${postition === -100 && s.active}`} onClick={()=>setPosition(-100)}/>
        <div className={`${s.circle} ${postition === -200 && s.active}`} onClick={()=>setPosition(-200)}/>
        <div className={`${s.circle} ${postition === -300 && s.active}`} onClick={()=>setPosition(-300)}/>
      </div>
        <div className={s.leftArrow} onClick={()=>setPosition(postition!==0?postition + 100:-300)}><FaArrowAltCircleLeft/></div>
        <div className={s.rightArrow}  onClick={()=>setPosition(postition!==-300?postition - 100:0)}><FaArrowAltCircleRight/></div>
    </div>
  );
};

export default connect()(Poster);
