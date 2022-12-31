import { CLOSE_MENU, OPEN_MENU, TOGGLE_MENU } from "./headerActions";

const initalState = {
    menuState: false
}

export function headerReaducer(store= initalState, action){
    switch (action.type) {
        case OPEN_MENU:
            return {...store, menuState: true}
        case CLOSE_MENU:
            return {...store, menuState: false}
        case TOGGLE_MENU:
            return {...store, menuState: !store.menuState}
        default:
            return store;
    }
}