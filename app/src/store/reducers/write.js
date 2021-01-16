import {EDIT_BODY} from '../action/index'
const initialState = {
    body:'',
}
function writedata(state=initialState,action) {
    switch(action.type) {
        case EDIT_BODY:
            return {
                ...action.payload
            }
        default:
            return state
    }
}
export default writedata