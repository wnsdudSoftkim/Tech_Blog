import {combineReducers} from 'redux'
import fetchGetPost  from './getpost'
import PostImageData from './getpostImage'
import writedata from './write'
import singlepostdata from './singlepostdata'
import fetchComment from './getcomment'
const rootReducer = combineReducers({
    fetchGetPost,
    PostImageData,
    writedata,
    singlepostdata,
    fetchComment,
})
export default rootReducer