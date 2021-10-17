import { combineReducers } from "redux";
import { blogReducer } from "./reducers/blogReducers";

const rootReducer = combineReducers({
    createBlog: blogReducer
})

export default rootReducer;