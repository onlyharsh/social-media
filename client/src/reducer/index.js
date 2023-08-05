// import { combineReducers } from "redux";
// import authReducer from "./AuthReducer";
// const rootReducers = combineReducers({
//     authReducer: authReducer,
// });

// export default rootReducers;

import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import postReducer from "./postReducer";
// import chatReducer from "./ChatUserReducer";

 const rootReducers = combineReducers({authReducer ,postReducer})
 export default rootReducers;