import { CLEAR_SORT_TYPE, SEARTCH_CHANGE, SET_SORT_TYPE } from "./MainActions";

const initalstate = {
  sortType: false,
  searchText: "",
  categories: [
    { id: 1, title: "Подарункові сертифікати", img: "../image/Category/2.png" },
    { id: 2, title: "Arduino контроллери", img: "../image/Category/1.png" },
    { id: 3, title: "Мікрокомпютери", img: "../image/Category/3.png" },
    { id: 4, title: "Raspberry PI", img: "../image/Category/4.png" },
    { id: 5, title: "Засоби розробки, програматори", img: "../image/Category/5.png" },
    { id: 6, title: "Карти памяті, SD, Флешки", img: "../image/Category/6.png" },
    { id: 7, title: "Набори (DIY Kits) конструктори", img: "../image/Category/7.png" },
    { id: 8, title: "Подарункові сертифікати", img: "../image/Category/2.png" },
    { id: 9, title: "Arduino контроллери", img: "../image/Category/1.png" },
    { id: 10, title: "Мікрокомпютери", img: "../image/Category/3.png" },
    { id: 11, title: "Raspberry PI", img: "../image/Category/4.png" },
    { id: 12, title: "Засоби розробки, програматори", img: "../image/Category/5.png" },
    { id: 13, title: "Карти памяті, SD, Флешки", img: "../image/Category/6.png" },
    { id: 14, title: "Набори (DIY Kits) конструктори", img: "../image/Category/7.png" },
    { id: 15, title: "Подарункові сертифікати", img: "../image/Category/2.png" },
    { id: 16, title: "Arduino контроллери", img: "../image/Category/1.png" },
    { id: 17, title: "Мікрокомпютери", img: "../image/Category/3.png" },
    { id: 18, title: "Raspberry PI", img: "../image/Category/4.png" },
    { id: 19, title: "Засоби розробки, програматори", img: "../image/Category/5.png" },
    { id: 20, title: "Карти памяті, SD, Флешки", img: "../image/Category/6.png" },
    { id: 21, title: "Набори (DIY Kits) конструктори", img: "../image/Category/7.png" },
  ],
};

export function MainReducer(store = initalstate, action) {
  switch (action.type) {
    case SET_SORT_TYPE:
      return { ...store, sortType: action.payload };
    case CLEAR_SORT_TYPE:
      return { ...store, sortType: false };
    case SEARTCH_CHANGE:
      return { ...store, searchText: action.payload };
    default:
      return store;
  }
}
