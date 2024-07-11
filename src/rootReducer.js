import { combineReducers } from 'redux';
import filterReducer from './Reducers/filterReducer';

const rootReducer = combineReducers({
    filters:filterReducer,
});

export default rootReducer;