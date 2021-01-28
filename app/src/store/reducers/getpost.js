import {FETCH_GET_POST} from '../action/index'

function data(state={}, action) {
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