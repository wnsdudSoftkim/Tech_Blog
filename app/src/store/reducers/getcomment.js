import {FETCH_COMMENT} from '../action/index'
const initialState= {
    name:"None",
    check:"None",
    body:"None"
}
function data(state=initialState, action) {
    switch(action.type) {
        case FETCH_COMMENT:
            return {...action.data}
        default:
            return state
    }
}
export default data