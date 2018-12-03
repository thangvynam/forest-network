import coverImageReducer from "../Reducers/coverImageReducer"
import tweetReducer from "../Reducers/tweetReducer"
import followReducer from "../Reducers/followReducer"
import detailTweetReducer from "../Reducers/detailTweetReducer"
var redux = require("redux");
const allReducers = redux.combineReducers({
    coverImageReducer:coverImageReducer,
    tweetReducer:tweetReducer,
    followReducer: followReducer,
    detailTweetReducer:detailTweetReducer
})
var store1 = redux.createStore(allReducers);
export default store1;