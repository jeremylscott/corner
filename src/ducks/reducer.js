import axios from 'axios'

const initialState = {
    address1: '',
    address2: ''
}

//action types
const ADDRESS1 = 'ADDRESS1'
const ADDRESS2 = 'ADDRESS2'



//action creators
export function updateAddress1 (address1) {
    return {
        type: ADDRESS1,
        payload: address1
    }
}

export function updateAddress2 (address2) {
    return {
        type: ADDRESS2,
        payload: address2
    }
}

//reducer function
function reducer(state=initialState, action) {
    switch(action.type) {
        case ADDRESS1:
            return {
                ...state, address1: action.payload.data
            }
        case ADDRESS2:
            return {
                ...state, address2: action.payload.data
            }
        default: return state
    }
}

export default reducer;