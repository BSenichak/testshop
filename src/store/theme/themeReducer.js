import { SET_DARK_THEME, SET_LIGHT_THEME } from "./themeActions";

const initalState = {
    theme: "light"
}

export function themeReducer(store=initalState, action){
    switch(action.type){
        case SET_LIGHT_THEME:
            return {...store, theme: "light"}
        case SET_DARK_THEME:
            return {...store, theme: "dark"}
        default:
            return store;
    }
}