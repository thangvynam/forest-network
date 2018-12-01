import coverImageReducer from "../Reducers/coverImageReducer"

var redux = require("redux");
const allReducers = redux.combineReducers({
    coverImageReducer:coverImageReducer,
})
var store1 = redux.createStore(allReducers);
export default store1;