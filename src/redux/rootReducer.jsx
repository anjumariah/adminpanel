import { combineReducers } from "redux";
import adminReducer from "./reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
    adminReducerItem:adminReducer,
    userReducerItem:userReducer
})
export default rootReducer

