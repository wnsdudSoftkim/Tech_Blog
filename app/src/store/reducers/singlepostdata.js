import {SINGLE_POST_DATA} from '../action/index'
const initialState = {
    data: {
        title:'',
        body:'',
        thumbnail:'',
        user_date:'',
    }
    
}
function singlepostdata(state=initialState,action) {
    console.log(action)
    switch(action.type) {
        case SINGLE_POST_DATA:
            return action.data
            
        default:
            return state
    }
}
export default singlepostdata