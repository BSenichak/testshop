import { CLEAR_SORT_TYPE, SEARTCH_CHANGE, SET_SORT_TYPE } from "./MainActions";

const initalstate = {
  sortType: false,
  searchText: "",
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
