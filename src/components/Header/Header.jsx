import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import s from "./Header.module.css";
import { BsMoon, BsSun, BsHeart, BsCart2, BsPerson } from "react-icons/bs";
import { HiLanguage } from "react-icons/hi2";
import { setDarkTheme, setLightTheme } from "../../store/theme/themeActions";
import { toggleMenu } from "../../store/Header/headerActions";

export const Header = (props) => {
  const theme = useSelector((strore) => strore.theme.theme);
  const menuState = useSelector((strore) => strore.header.menuState);
  const dispatch = useDispatch();
  const [langState, setLangState] = useState(false);
  return (
    <header>
      <div className={s.header}>
        <div className={s.leftbtn}>
          {theme === "light" ? (
            <BsMoon
              onClick={() => {
                localStorage.setItem("theme", "dark");
                dispatch(setDarkTheme());
              }}
            />
          ) : (
            <BsSun
              onClick={() => {
                localStorage.setItem("theme", "light");
                dispatch(setLightTheme());
              }}
            />
          )}
          <HiLanguage onClick={()=>setLangState(!langState)}/>
          <div className={`${s.lang} ${langState && s.langActive}`}>
            <div id="google_translate_element"></div>
          </div>
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
        <div
          className={`${s.linkItem} ${s.menubtn}`}
          onClick={() => dispatch(toggleMenu())}
        >
          ≡
        </div>
        <div className={`${s.linkItem} ${menuState && s.active}`}>Форум</div>
        <div className={`${s.linkItem} ${menuState && s.active}`}>
          Оплата й доставка
        </div>
        <div className={`${s.linkItem} ${menuState && s.active}`}>Контакти</div>
        <div className={`${s.linkItem} ${menuState && s.active}`}>Статті</div>
        <div className={`${s.linkItem} ${menuState && s.active}`}>
          Документація
        </div>
        <div className={`${s.linkItem} ${menuState && s.active}`}>
          Скарги / Пропозиції
        </div>
        <div className={`${s.linkItem} ${menuState && s.active}`}>
          Гарантія поверення
        </div>
      </div>
    </header>
  );
};

export default connect()(Header);
