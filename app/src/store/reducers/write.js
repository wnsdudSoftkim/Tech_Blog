import {EDIT_BODY} from '../action/index'
const initialState = {
    data: {
        cursor:'',
        body:'',
        thumbnail:[],
    }
    
}
function writedata(state=initialState,action) {
    console.log(action)
    switch(action.type) {
        case EDIT_BODY:
            return action.data
            
        default:
            return state
    }
}
export default writedata