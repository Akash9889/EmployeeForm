import { EMPLOYEE_ENTRIES, TABLE_HEADERS } from '../actionTypes'

import {users} from '../../utils/entries'
import {header} from '../../utils/header'

//setting users entries and headers for the table
const initialState = {
    entries : users,
    headers : header
}
const employeeReducer = (state = initialState, action) => {
    switch(action.type){
        case EMPLOYEE_ENTRIES :{
            return state.entries
        }
        case TABLE_HEADERS : {
            return state.headers
        }
        default: return state
    }
}

export default employeeReducer
