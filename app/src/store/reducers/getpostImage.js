import {POST_IMAGE_DATA} from '../action/index'
const initialState= {
    title:"None",
    body:"None"
}
function imagedata(state={},action) {
    console.log(action)
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