import {combineReducers} from 'redux'
import fetchGetPost  from './getpost'
import PostImageData from './getpostImage'
const rootReducer = combineReducers({
    fetchGetPost,
    PostImageData 
})
export default rootReducer