import {useEffect}from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {EditBody} from '../../store/action/index'
export const Test = value => {
    const dispatch = useDispatch()
    const mydata = useSelector((state)=> state.writedata)
    useEffect(()=> {
        // EditBody(value["cursor"],value["body"]).then(function(result){
        //     dispatch(result)
        // })
        dispatch(EditBody(value["cursor"],value["body"]))
       
        console.log(mydata)
    },[value])
}
