import {OPEN_DIALOG_CONFIG} from '../Constant/actionTypes'
import {EDIT_PROFILE} from '../Constant/actionTypes'

const coverImageInitialState = {
    open :false ,
    name : "Unknown",
    location : "Unkown"
}
const coverImageReducer = (state = coverImageInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_CONFIG:
            return {...state,open:action.open}
        case EDIT_PROFILE:
            return {...state,open:action.open,name:action.name,location:action.location}    
        default:
            return state;
    }
}
export default coverImageReducer;