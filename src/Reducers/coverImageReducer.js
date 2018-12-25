import {OPEN_DIALOG_CONFIG, STORE_IMAGE, OPEN_DIALOG_FOLLOW} from '../Constant/actionTypes'

const coverImageInitialState = {
    open :false ,
    openFollow: false,
    imgSrc: ''
}
const coverImageReducer = (state = coverImageInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_CONFIG:
            return {...state,open:action.open}
        case OPEN_DIALOG_FOLLOW:
            return {...state, openFollow: action.openFollow}
        case STORE_IMAGE:
            return {...state, imgSrc: action.imgSrc}
        default:
            return state;
    }
}
export default coverImageReducer;