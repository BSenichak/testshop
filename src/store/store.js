import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"
import { headerReaducer } from "./Header/headerReducer"
import { themeReducer } from "./theme/themeReducer"

const generalReducer = combineReducers({
    theme: themeReducer,
    header: headerReaducer
})

export const store = createStore(generalReducer, applyMiddleware(logger))