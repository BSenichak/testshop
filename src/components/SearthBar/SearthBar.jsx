import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import s from "./SearchBar.module.css";
import {
  BsSearch,
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
  BsStarFill,
  BsLightningChargeFill,
} from "react-icons/bs";
import {
  clearSortType,
  searchCHange,
  setSortType,
} from "../../store/Main/MainActions";

export const SearthBar = (props) => {
  const searchText = useSelector((store) => store.main.searchText);
  const sortType = useSelector((store) => store.main.sortType);
  const dispatch = useDispatch();
  return (
    <div className={s.searchBar}>
      <div className={s.searchPanel}>
        <input
          type="text"
          placeholder="Мікроконтроллер..."
          value={searchText}
          onChange={(e) => dispatch(searchCHange(e.target.value))}
        />
        <BsSearch className={s.searthBtn} />
        <div className={`${s.searthResult} ${searchText && s.SRactive}`}>
          <div className={s.searchItem}>result 1</div>
          <div className={s.searchItem}>result 2</div>
          <div className={s.searchItem}>result 3</div>
          <div className={s.searchItem}>result 4</div>
        </div>
      </div>
      <div className={s.sortBar}>
        <div
          className={`${s.sortBtn} ${sortType === "UP" && s.activeSort}`}
          onClick={() =>
            sortType === "UP"
              ? dispatch(clearSortType())
              : dispatch(setSortType("UP"))
          }
        >
          <BsFillArrowUpCircleFill />
          Спочатку дорожчі
        </div>
        <div
          className={`${s.sortBtn} ${sortType === "DP" && s.activeSort}`}
          onClick={() =>
            sortType === "DP"
              ? dispatch(clearSortType())
              : dispatch(setSortType("DP"))
          }
        >
          <BsFillArrowDownCircleFill />
          Спочатку дешевші
        </div>
        <div
          className={`${s.sortBtn} ${sortType === "PO" && s.activeSort}`}
          onClick={() =>
            sortType === "PO"
              ? dispatch(clearSortType())
              : dispatch(setSortType("PO"))
          }
        >
          <BsStarFill />
          По популярності
        </div>
        <div
          className={`${s.sortBtn} ${sortType === "NW" && s.activeSort}`}
          onClick={() =>
            sortType === "NW"
              ? dispatch(clearSortType())
              : dispatch(setSortType("NW"))
          }
        >
          <BsLightningChargeFill />
          Нові
        </div>
      </div>
    </div>
  );
};

export default connect()(SearthBar);
