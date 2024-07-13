import { combineReducers } from 'redux';
import filterReducer from './Reducers/filterReducer';
import authReducer from './Reducers/authSlice';

const rootReducer = combineReducers({
    filters:filterReducer,
    auth: authReducer,  // Add auth slice here. This is just an example. Replace with your actual auth slice.  // Auth slice is assumed to be defined in a separate file named authSlice.js.  // You may need to install redux-thunk for handling async actions in the auth slice.  // npm install redux-thunk --save
});

export default rootReducer;