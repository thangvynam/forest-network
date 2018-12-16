import {OPEN_DIALOG_CONFIG} from '../Constant/actionTypes'

const coverImageInitialState = {
    open :false ,
   
}
const coverImageReducer = (state = coverImageInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_CONFIG:
            return {...state,open:action.open}
        default:
            return state;
    }
}
export default coverImageReducer;