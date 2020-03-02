import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    autn: authReducer,
    project: projectReducer
})

export default rootReducer