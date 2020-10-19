import { combineReducers } from 'redux'

import sudoku from "./reducers/sudokuReducer"

const rootReducer = combineReducers({
    sudoku,
})

export default rootReducer;