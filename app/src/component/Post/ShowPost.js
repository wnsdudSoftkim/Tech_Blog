import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {Grid} from 'semantic-ui-react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchGetPost} from '../../store/action/index'
import SinglePostBox from './SinglePostBox'
import 'semantic-ui-css/semantic.min.css'
import useMedia from '../../useMedia'
import Axios from 'axios'
import getpost from '../../store/reducers/getpost'
//전체 Post를 Home 에서 보여주는 함수.
//반응형 작업 4개 ->3개 ->2개 ->1개
function ShowPost() {
    const[Data,setData] = useState([])
    const columnCount = useMedia(
        // Media queries
        ['(min-width: 1300px)', '(min-width: 1000px)', '(min-width: 600px)'],
        // Column counts (relates to above media queries by array index)
        [4, 3, 2],
        // Default column count
        1
    )
    let completed = false
    const dispatch = useDispatch()
    const mydata = useSelector((state)=> state.fetchGetPost)
    useEffect(()=> {
        fetchGetPost().then(function(result){
            dispatch(result)
        })
    },[])
    console.log(mydata)



    //비동기적으로 데이터불러옴
    // useEffect(() => {
    //     async function get() {
    //         const result = await Axios.get('/Post')
    //         setData(result.data)      
    //         console.log(result.data)
    //         console.log(result.data.length)
    //     }
    //     get()
    //     return ()=> {
    //         completed = true
    //     }
    // },[])
    
    console.log(completed)
    

    const ShowPostBlock = styled.div`
        
    `
    if(completed) {
        return (
        
            <>  
                <ShowPostBlock>   
                    <Grid divided="vertically">
                        <Grid.Row columns={columnCount}>   
                            {mydata}
                        </Grid.Row>
                    </Grid>
                </ShowPostBlock>
    
            </>
        )
    }else {
        return (
            <>
                aaaaaaaaaaa
            </>
        )
    }
}
export default ShowPost