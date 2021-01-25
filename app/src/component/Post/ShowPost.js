import React,{useEffect} from 'react'
import styled from 'styled-components'
import {Grid} from 'semantic-ui-react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchGetPost} from '../../store/action/index'
import SinglePostBox from './SinglePostBox'
import 'semantic-ui-css/semantic.min.css'
import useMedia from '../../useMedia'
//전체 Post를 Home 에서 보여주는 함수.
//반응형 작업 4개 ->3개 ->2개 ->1개
function ShowPost() {
    const columnCount = useMedia(
        // Media queries
        ['(min-width: 1024px)', '(min-width: 768px)', '(min-width: 400px)'],
        // Column counts (relates to above media queries by array index)
        [3, 2, 1],
        // Default column count
        1
    )
    const dispatch = useDispatch()
    const mydata = useSelector((state)=> state.fetchGetPost)
    useEffect(()=> {
        fetchGetPost().then(function(result){
            dispatch(result)
        })
    },[])
    



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
    
    

    const ShowPostBlock = styled.div`
        
    `
    if(mydata!=null) {
        return (
        
            <>  
                <ShowPostBlock>   
                    <Grid divided="vertically">
                        <Grid.Row columns={columnCount}>   
                        {Object.keys(mydata).map(function(key) {
                            return (
                                <Grid.Column>
                                    <SinglePostBox key ={key} 
                                        title={mydata[key]["title"]} 
                                        body={mydata[key]["body"]} 
                                        thumbnail={mydata[key]["thumbnail"]} 
                                        user_date={mydata[key]["user_date"]}
                                        my_id={mydata[key]["my_id"]}
                                        />
                                </Grid.Column>
                            )
                       
                        })}
                        </Grid.Row>
                    </Grid>
                </ShowPostBlock>
    
            </>
        )
    }else {
        return (
            <>
                Loading...
            </>
        )
    }
}
export default ShowPost