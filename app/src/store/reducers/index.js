import {combineReducers} from 'redux'
import fetchGetPost  from './getpost'
import PostImageData from './getpostImage'
import writedata from './write'
const rootReducer = combineReducers({
    fetchGetPost,
    PostImageData,
    writedata,
})
export default rootReducer