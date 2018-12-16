import coverImageReducer from "../Reducers/coverImageReducer"
import tweetReducer from "../Reducers/tweetReducer"
import followReducer from "../Reducers/followReducer"
import detailTweetReducer from "../Reducers/detailTweetReducer"
import loginReducer from '../Reducers/loginReducer'
var redux = require("redux");
const allReducers = redux.combineReducers({
    coverImageReducer:coverImageReducer,
    tweetReducer:tweetReducer,
    followReducer: followReducer,
    detailTweetReducer:detailTweetReducer,
    loginReducer: loginReducer
})
var store1 = redux.createStore(allReducers);
export default store1;