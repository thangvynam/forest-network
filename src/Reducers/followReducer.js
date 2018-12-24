import {OPEN_DIALOG_FOLLOWING, STORE_FOLLOW} from '../Constant/actionTypes'
import {OPEN_DIALOG_FOLLOWER} from '../Constant/actionTypes'

const followInitialState = {
    open : false,
    openFollower: false,
    followList: []
}

const followReducer = (state = followInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_FOLLOWING:
            return {...state,open:action.open};
        case OPEN_DIALOG_FOLLOWER:
            return {...state, openFollower:action.openFollower};
        case STORE_FOLLOW:
            return {...state, followList: action.followList}
        default:
            return state
    }
}
export default followReducer;