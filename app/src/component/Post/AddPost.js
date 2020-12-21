import React ,{useState,useEffect,useRef,useCallback} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../Header'
import {Link} from 'react-router-dom'
import TextSizeAutoSize from 'react-textarea-autosize'
function HeaderInput() {
    const [headerinput,SetHeaderInput] = useState({header:""})
    const {header} = headerinput
    const onChangeHeader = e => {
        e.preventDefault()
        SetHeaderInput({
            header:e.target.value

        })
        
    }
    console.log(header)
    return (
        <>
            <TextSizeAutoSize 
                className="textArea headertext" 
                placeholder="제목을 입력하세요" 
                value={header}
                onChange={e=>onChangeHeader(e)}
            />    
        </>
        
    )
}
function BodyInput() {
    const [bodyinput,SetBodyInput] = useState({body:""})
    const {body} = bodyinput
    const onChangeBody = e => {
        e.preventDefault()
        SetBodyInput({
            body:e.target.value

        })
    }
    return(
        <>
            <TextSizeAutoSize 
            className="textArea bodytext"
            value={body}
            onChange={e=>onChangeBody(e)}
            placeholder="글을 써보세요" 
            />
        </>
    )
}
function AddPost() {
    // const inputElement=useRef(null)
    // const callbackRef = useCallback(inputElement=> {
    //     if(inputElement) {
    //         inputElement.focus()
    //     }
    // },[])
    // useEffect(()=> {
    //     if(inputElement.current){
    //         inputElement.current.focus()
    //     }
    // },[inputElement.current])
   
  
    const AddPostBlock = styled.div`
        width:100%;
        height:100%;
        position:relative;
        display:flex;
        flex-direction:column;
        @media(max-width:463px){
            width:100%;
        }
    `
    const MainBodyBlock = styled.div`
        .textArea{
            max-height:432px;
            overflow-y:hidden;
            height:auto;
            font-size:2.4rem;
            display:block;
            padding:0px;
            width:100%;
            line-height:1.5;
            resize:none;
            outline:none;
            border:none;
            font-weight:bold;
            color:rgb(33,37,41);
        }
        .bodytext{
            font-size:1.8rem;
            min-height:432px;
        }
        padding-bottom:4rem;
        padding:16px;
        flex: 1 1 0%;
        display:flex;
        flex-direction:column;
        .Header {
            opacity:1;
            .HeaderBox{
                .padding:1rem;
                
                .border{
                    margin-top:1rem;
                    margin-bottom:0.66rem;
                    background:rgb(73,80,87);
                    height:6px;
                   
                }
            }
        }
        .Section {
            flex:1 1 0%;
            display:flex;
            flex-direction:column;
        }
    `
    const FooterBlock = styled.div`
        padding:1rem;
        height:4rem;
        width:100%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
        display:flex;

        justify-content:center;
        align-items:center;
        button{
            margin:1rem;
            background:#1AAB8A;
            color:#fff;
            border:none;
            position:relative;
            height:60px;
            font-size:1.6em;
            padding:0 2em;
            cursor:pointer;
            transition:800ms ease all;
            outline:none;
          }
          button:hover{
            background:#fff;
            color:#1AAB8A;
          }
          button:before,button:after{
            content:'';
            position:absolute;
            top:0;
            right:0;
            height:2px;
            width:0;
            background: #1AAB8A;
            transition:400ms ease all;
          }
          button:after{
            right:inherit;
            top:inherit;
            left:0;
            bottom:0;
          }
          button:hover:before,button:hover:after{
            width:100%;
            transition:800ms ease all;
          }
          .btn1{
              background:#333;
          }
          
          

    `
   
    
    return (
        <>
           
            <AddPostBlock>
                <MainBodyBlock>
                    <div className="Header">
                        <div className="HeaderBox" >
                            <HeaderInput />
                            
                            <div className="border"/>
                        </div>

                    </div>
                    <div className="Section">
                        <BodyInput />
                    </div>
                </MainBodyBlock>
            </AddPostBlock>
                
              
            

            <FooterBlock>
                    <Link to ="/">
                        <button className="button btn1">나가기</button>
                    </Link>
                    
                    <button className="button">저장하기</button>
            </FooterBlock>
        </>
    )
}
export default AddPost

   