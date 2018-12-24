import {OPEN_DIALOG_CONFIG, STORE_IMAGE} from '../Constant/actionTypes'

const coverImageInitialState = {
    open :false ,
    imgSrc: ''
}
const coverImageReducer = (state = coverImageInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_CONFIG:
            return {...state,open:action.open}
        case STORE_IMAGE:
            return {...state, imgSrc: action.imgSrc}
        default:
            return state;
    }
}
export default coverImageReducer;