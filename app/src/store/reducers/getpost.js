import {FETCH_GET_POST} from '../action/index'
const initialState= {
    title:"None",
    body:"None"
}
function data(state={}, action) {
    console.log(action)
    switch(action.type) {
        case FETCH_GET_POST:
            return {
                ...action.payload,
            }
        default:
            return state
    }
}
export default data