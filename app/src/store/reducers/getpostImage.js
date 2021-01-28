import {POST_IMAGE_DATA} from '../action/index'

function imagedata(state={},action) {
    switch(action.type){
        case POST_IMAGE_DATA:
            return {
                ...action.payload
            }
        default:
        return state
    }
}
export default imagedata