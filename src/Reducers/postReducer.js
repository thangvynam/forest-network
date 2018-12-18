import {OPEN_DIALOG_POST} from '../Constant/actionTypes';

const postInitialState = {
    open:false
}
const postReducer = (state = postInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_POST:
            return {...state,open:action.open}
        default:
            return state
    }
}
export default postReducer;