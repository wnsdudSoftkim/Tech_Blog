import React ,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../Header'
import {Link} from 'react-router-dom'
import TextSizeAutoSize from 'react-textarea-autosize'
function AddPost() {
    const [headerinput,SetHeaderInput] = useState("")
   
    const [bodyinput,SetBodyInput] = useState("")
    const onChangeHeader = e => {
        SetHeaderInput(
            e.target.value
        )
    }
    const onChangeBody = e=> {
        SetBodyInput(e.target.value)
    }
    const Block = styled.div`
        display:flex;
    `
    const AddPostBlock = styled.div`
        width:45%;
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
    const RightBlock =  styled.div`
        width:45%;
        margin-left:10%;
        padding:1rem;
        word-break:break-word;
        flex:1 1 0%;
        overflow-y:auto;
        height:100%;
        @media(max-width:463px){
            width:0%;
        }
        .h1 {
            font-size:2.5em;
            margin-bottom:4rem;
            font-weight:800;
        }
        .section {

        }

    `
    return (
        <>
            <Block>
                <AddPostBlock>
                    <MainBodyBlock>
                        <div className="Header">
                            <div className="HeaderBox">
                                <TextSizeAutoSize 
                                className="textArea headertext" 
                                placeholder="제목을 입력하세요" 
                                value={headerinput}
                                onChange={e=>onChangeHeader(e)}
                                />
                                <div className="border"/>
                            </div>

                        </div>
                        <div className="Section">
                            <TextSizeAutoSize 
                            className="textArea bodytext"
                            value={bodyinput}
                            onChange={e=>onChangeBody(e)}
                            placeholder="글을 써보세요" 
                            />
                        </div>
                    </MainBodyBlock>
                </AddPostBlock>
                <RightBlock>
                    <h1 className="h1"> 
                        aa{headerinput}
                    </h1>
                    <div className="section">


                    </div>
                </RightBlock>
            </Block>
           
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
   