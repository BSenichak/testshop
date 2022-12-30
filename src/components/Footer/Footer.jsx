import React from "react";
import { connect } from "react-redux";
import s from "./Footer.module.css";
import { FaTelegram, FaInstagram, FaFacebookF, FaViber } from "react-icons/fa";

export const Footer = (props) => {
  return (
    <footer className={s.footer}>
      <div className={s.column}>
        <div className={s.logoBar}>
          <img src="../image/logo1.png" alt="logo" className={s.logo} />
          <span>Arduino.ua</span>
        </div>
        <div className={s.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facilis placeat nulla dicta officiis! Provident ea rem impedit quidem
          corrupti?
        </div>
      </div>
      <div className={s.column}>
        <div className={s.colTitle}>Контакти</div>
        <div className={s.colItem}>(098) 067-12-26 Київстар</div>
        <div className={s.colItem}>(066) 142-24-48 Vodafone</div>
        <div className={s.colItem}>(063) 642-36-59 Lifecell</div>
        <div className={`${s.colItem} ${s.email}`}>info@arduino.ua</div>
        <div className={`${s.colItem} ${s.email}`}>
          м. Київ, вул. Васильківська, 30 ст.м. "Васильківська"
        </div>
      </div>
      <div className={s.column}>
        <div className={s.colTitle}>Корисні посилання</div>
        <div className={s.colItemLink}>Форум</div>
        <div className={s.colItemLink}>Документація</div>
        <div className={s.colItemLink}>Статті</div>
        <div className={s.colItemLink}>Оплата та доставка</div>
      </div>
      <div className={s.column}>
        <div className={s.colTitle}>Ми в соцмережах</div>
        <div className={s.socMediaBar}>
          <FaTelegram />
          <FaInstagram />
          <FaFacebookF />
          <FaViber />
        </div>
      </div>
    </footer>
  );
};

export default connect()(Footer);
