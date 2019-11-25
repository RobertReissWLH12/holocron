const initialState = {
    email: '',
    username: '',
    password1: '',
    password2: ''
}

// ACTION CONSTANTS
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

// ACTION BUILDERS
export function updateUserInfo(userObj) {
    console.log(userObj)
    return {
        type: UPDATE_USER_INFO,
        payload: userObj
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER_INFO:
            return {...state, ...action.payload}
            default: return state
    }
}