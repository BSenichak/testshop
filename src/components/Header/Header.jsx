import React from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import s from "./Header.module.css";
import { BsMoon, BsSun, BsHeart, BsCart2, BsPerson } from "react-icons/bs";
import { HiLanguage } from "react-icons/hi2";
import { setDarkTheme, setLightTheme } from "../../store/theme/themeActions";

export const Header = (props) => {
  const theme = useSelector((strore) => strore.theme.theme);
  const dispatch = useDispatch();
  return (
    <header >
      <div className={s.header}>
        <div className={s.leftbtn}>
          {theme === "light" ? (
            <BsMoon onClick={() => dispatch(setDarkTheme())} />
          ) : (
            <BsSun onClick={() => dispatch(setLightTheme())} />
          )}
          <HiLanguage />
        </div>
        <div className={s.logoBar}>
          <img src="../image/logo1.png" alt="logo" className={s.logo} />
          <span>Arduino.ua</span>
        </div>
        <div className={s.rightbtn}>
          <BsHeart />
          <BsCart2 />
          <BsPerson />
        </div>
      </div>
      <div className={s.linkBar}>
        <div className={s.linkItem}>Форум</div>
        <div className={s.linkItem}>Оплата й доставка</div>
        <div className={s.linkItem}>Контакти</div>
        <div className={s.linkItem}>Статті</div>
        <div className={s.linkItem}>Документація</div>
        <div className={s.linkItem}>Скарги / Пропозиції</div>
        <div className={s.linkItem}>Гарантія поверення</div>

      </div>
    </header>
  );
};

export default connect()(Header);
