import {OPEN_DIALOG_LOGIN} from '../Constant/actionTypes'

const loginInitialState = {
    openLogin: false,
}

const loginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
            case OPEN_DIALOG_LOGIN:
            return {...state, openLogin:action.openLogin};
        default:
            return state
    }
}
export default loginReducer;