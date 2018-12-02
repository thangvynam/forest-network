import {OPEN_DIALOG_CONFIG, OPEN_DIALOG_FOLLOWING} from '../Constant/actionTypes'
import {EDIT_PROFILE} from '../Constant/actionTypes'

const coverImageInitialState = {
    open :false ,
    openFollowing: false,
    name : "Unknown",
    location : "Unkown"
}
const coverImageReducer = (state = coverImageInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_CONFIG:
            return {...state,open:action.open}
        case OPEN_DIALOG_FOLLOWING:
            return {...state, openFollowing: action.openFollowing}
        case EDIT_PROFILE:
            return {...state,open:action.open,name:action.name,location:action.location}    
        default:
            return state;
    }
}
export default coverImageReducer;