
import {OPEN_DIALOG_CONFIG} from '../Constant/actionTypes'
import {OPEN_DIALOG_FOLLOWING} from '../Constant/actionTypes'

const coverImageInitialState = {
    open :false ,
}
const coverImageReducer = (state = coverImageInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_CONFIG:
            return {...state,open:action.open}
        case OPEN_DIALOG_FOLLOWING:
            return {...state, openFollowing: action.openFollowing}
        default:
            return state;
    }
}
export default coverImageReducer;