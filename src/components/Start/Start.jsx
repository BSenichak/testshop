import React from "react";
import { connect } from "react-redux";
import SearthBar from "../SearthBar/SearthBar";
import s from "./Start.module.css";


export const Start = (props) => {
  
  return (
    <main className={s.main}>
      <SearthBar/>
    </main>
  );
};

export default connect()(Start);
