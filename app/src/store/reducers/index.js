import {combineReducers} from 'redux'
import fetchGetPost  from './getpost'
import PostImageData from './getpostImage'
import writedata from './write'
import singlepostdata from './singlepostdata'
const rootReducer = combineReducers({
    fetchGetPost,
    PostImageData,
    writedata,
    singlepostdata,
})
export default rootReducer