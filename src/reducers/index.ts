import { combineReducers } from 'redux';
import respositoriesReducer from './respositories'

const reducers = combineReducers({
    repositories : respositoriesReducer
})

export default reducers;