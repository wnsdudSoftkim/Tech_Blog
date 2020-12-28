import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {Grid} from 'semantic-ui-react'
import SinglePostBox from './SinglePostBox'
import 'semantic-ui-css/semantic.min.css'
import useMedia from '../../useMedia'
//전체 Post를 Home 에서 보여주는 함수.
//반응형 작업 4개 ->3개 ->2개 ->1개
function ShowPost() {
    const columnCount = useMedia(
        // Media queries
        ['(min-width: 1300px)', '(min-width: 1000px)', '(min-width: 600px)'],
        // Column counts (relates to above media queries by array index)
        [4, 3, 2],
        // Default column count
        1
      );
    const ShowPostBlock = styled.div`
        
    `
    return (
        
        <>  
            <ShowPostBlock>   
                <Grid divided="vertically">
                    <Grid.Row columns={columnCount}>   
                        <Grid.Column>
                            <SinglePostBox/>
                        </Grid.Column>
                        <Grid.Column>
                            <SinglePostBox/>
                        </Grid.Column>
                        <Grid.Column>
                            <SinglePostBox/>
                        </Grid.Column>
                        <Grid.Column>
                            <SinglePostBox/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </ShowPostBlock>

        </>
    )
}
export default ShowPost