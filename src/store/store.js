import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"

const generalReducer = combineReducers({
})

export const store = createStore(generalReducer, applyMiddleware(logger))