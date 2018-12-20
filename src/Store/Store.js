import coverImageReducer from "../Reducers/coverImageReducer"
import tweetReducer from "../Reducers/tweetReducer"
import followReducer from "../Reducers/followReducer"
import detailTweetReducer from "../Reducers/detailTweetReducer"
import loginReducer from '../Reducers/loginReducer'
import createAccountReducer from '../Reducers/createAccountReducer'
import postReducer from '../Reducers/postReducer'
import paymentReducer from '../Reducers/paymentReducer'
var redux = require("redux");
const allReducers = redux.combineReducers({
    coverImageReducer:coverImageReducer,
    tweetReducer:tweetReducer,
    followReducer: followReducer,
    detailTweetReducer:detailTweetReducer,
    loginReducer: loginReducer,
    createAccountReducer:createAccountReducer,
    postReducer:postReducer,
    paymentReducer:paymentReducer
})
var store1 = redux.createStore(allReducers);
export default store1;