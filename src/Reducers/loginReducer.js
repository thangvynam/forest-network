import {DO_LOGIN} from '../Constant/actionTypes'

const loginInitialState = {
    isLogin: false,
    public_key: "",
}

const loginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
            case DO_LOGIN:{
                return {...state, isLogin: action.isLogin, public_key: action.public_key,
                    }
            }
                
        default:
            return state
    }
}
export default loginReducer;