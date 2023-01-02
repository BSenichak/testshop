import React from "react";
import { connect, useSelector } from "react-redux";
import SearthBar from "../SearthBar/SearthBar";
import s from "./Start.module.css";

export const Start = (props) => {
  const categories = useSelector((store) => store.main.categories);
  return (
    <main className={s.main}>
      <SearthBar />
      <div className={s.catTitle}>Категорії</div>
      <div className={s.categories}>
        {categories.map((item) => {
          return (
            <div className={s.catItem} key={item.id}>
              <img alt="category item" src={item.img} />
              <div className={s.itemtitle}>{item.title}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default connect()(Start);
