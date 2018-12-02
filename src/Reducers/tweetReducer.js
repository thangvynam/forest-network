import {OPEN_DIALOG_TWEET} from '../Constant/actionTypes'
const tweetInitialState = {
    open : false
}
const tweetReducer = (state = tweetInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_TWEET:
            return {...state,open:action.open};
        default:
            return state
    }
}
export default tweetReducer;