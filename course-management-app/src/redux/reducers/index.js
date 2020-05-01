import { combineReducers } from 'redux';
import courses from './courseReducers';
import authors from './authorReducer';
import alert from './alertReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    alert
});

export default rootReducer;