import {USER_AUTHENTICATOR} from '../actionTypes'
import {validUsersList} from '../../utils/validUsers'


const initialState = {
    isValidUser: false,
    loginError: null
}


const userReducer = ( state = initialState, action ) => {
    switch(action.type){
       
        case USER_AUTHENTICATOR : {
            const {email, password} = action.payload
            //checking authenticity of user in the JSON file
            const isValidUser = validUsersList.some((user) => user.username === email && user.password === password )
            //setting error if user is not find in JSON file
            const loginError = validUsersList.some((user) => user.username === email && user.password === password )
             return {
                    ...state, 
                    isValidUser: isValidUser,
                    loginError:  !loginError                 
            }
        }
       
        default: return state
    }
    
}

export default userReducer