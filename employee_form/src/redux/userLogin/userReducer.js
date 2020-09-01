import {USER_AUTHENTICATOR} from '../actionTypes'
import {validUsersList} from '../../utils/validUsers'


const initialState = {
    isValidUser: false
}

//console.log(validUsersList)
const userReducer = ( state = initialState, action ) => {
    switch(action.type){
       
        case USER_AUTHENTICATOR : {
            //console.log(action.payload)
            const {email, password} = action.payload
            const isValidUser = validUsersList.some((user) => user.username === email && user.password === password )
            //validUsersList.map(user => console.log(user))
            // validUsersList.some((user) => user.username == email && user.password == password )
           // console.log(isValidUser)
            return {
                    ...state, 
                    isValidUser: isValidUser                   
            }
        }
        // case SWITCH_STATUS: {
        //     return state.map( task => {
        //         return task.id === action.payload ? {...task, completed :! task.completed} : task
        //     })
        // }
        default: return state
    }
    
}

export default userReducer