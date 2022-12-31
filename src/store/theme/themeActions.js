export const SET_LIGHT_THEME = "SET_LIGHT_THEME"
export const SET_DARK_THEME = "SET_DARK_THEME"
export const SET_THEME = "SET_THEME"

export function setLightTheme(){
    return {
        type: SET_LIGHT_THEME
    }
}

export function setDarkTheme(){
    return {
        type: SET_DARK_THEME
    }
}

export function setTheme(theme){
    return {
        type: SET_THEME,
        payload: theme,
    }
}