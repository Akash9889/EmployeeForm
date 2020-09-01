import {USER_AUTHENTICATOR} from '../actionTypes'

export const  authenticator = (userDetails) => {
    return{
        type : USER_AUTHENTICATOR,
        payload : userDetails
    }
}

