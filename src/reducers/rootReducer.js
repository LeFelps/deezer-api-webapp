import { combineReducers } from "redux";
import songListReducer from "./songListReducer";
import navReducer from "./navReducer";


// defining the root reducer combine other reducers
const rootReducer = combineReducers({
    songList: songListReducer,
    nav: navReducer
})

export default rootReducer