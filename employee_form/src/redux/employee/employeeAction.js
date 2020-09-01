// import {users} from '../../utils/entries'
// import {header} from '../../utils/header'
import { EMPLOYEE_ENTRIES, TABLE_HEADERS } from '../actionTypes'

export const tableEntries = () => {
    return {
        type: EMPLOYEE_ENTRIES
        // payload = users
    }
}

export const tableHeaders = () => {
    return {
        type: TABLE_HEADERS
        // payload = header
    }
}
