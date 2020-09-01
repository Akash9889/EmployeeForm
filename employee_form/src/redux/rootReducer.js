import {combineReducers} from 'redux'

import userReducer from './userLogin/userReducer'
import employeeReducer from './employee/employeeReducer'

const rootReducer = combineReducers({
    user : userReducer,
    employee : employeeReducer 
})

export default rootReducer