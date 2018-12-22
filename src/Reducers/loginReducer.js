import {CHECK_LOGIN, DO_LOGIN} from '../Constant/actionTypes'

const loginInitialState = {
    isLogin: false,
    public_key: "",
    secret_key: "",
}

const loginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
            case CHECK_LOGIN:
            return {...state, openLogin:action.openLogin};
            case DO_LOGIN:{
                return {...state, isLogin: action.isLogin, public_key: action.public_key, secret_key: action.secret_key}
            }
                
        default:
            return state
    }
}
export default loginReducer;