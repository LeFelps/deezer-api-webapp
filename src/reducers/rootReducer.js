import { combineReducers } from "redux";
import songListReducer from "./songListReducer";
import navReducer from "./navReducer";


const rootReducer = combineReducers({
    songList: songListReducer,
    nav: navReducer
})

export default rootReducer