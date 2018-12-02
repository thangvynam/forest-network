import coverImageReducer from "../Reducers/coverImageReducer"
import tweetReducer from "../Reducers/tweetReducer"
var redux = require("redux");
const allReducers = redux.combineReducers({
    coverImageReducer:coverImageReducer,
    tweetReducer:tweetReducer 
})
var store1 = redux.createStore(allReducers);
export default store1;