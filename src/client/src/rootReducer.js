import { combineReducers } from 'redux'

import logs from "./reducers/logsReducer"

const rootReducer = combineReducers({
    logs,
})

export default rootReducer;