import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"
import { themeReducer } from "./theme/themeReducer"

const generalReducer = combineReducers({
    theme: themeReducer
})

export const store = createStore(generalReducer, applyMiddleware(logger))