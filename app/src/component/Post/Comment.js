import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
function Comment() {
    const CommentBlock = styled.div`
        width:768px;
        display:flex;
        flex-direction:column;
        margin: 0 auto;
        background:#f1f4f8;
        border: 1px solid #DADDE0;
        @media(max-width:767px) {
            width:512px;
        
            
        }
        @media(max-width:540px) {
            width:420px;
            margin-left:20px;
            margin-right:20px;
            margin-top:20px;
            
        }
        @media(max-width:450px) {
            width:400px;
        }
        @media(max-width:400px) {
            width:345px;
        }
        .Background {
            .form {
                display:flex;
                justify-content:space-between;
                padding:12px 20px 20px;
                .input {
                    width:100%;
                    height:36px;
                    padding:0 11px;
                    border:1px solid #dbdfe5;
                    line-height:17px;
                    color:#000;
                    box-sizing:border-box;
                    margin: 0 4px;
                }
            }
            .textarea1 {
                padding:0px 20px 0px;
                .textarea {
                    width:100%;
                    height:100px;
                    padding: 11px;
                    border:1px solid #dbdfe5;
                    box-sizing:border-box;
                }
            }
            .Submit {
                text-align:right;
                padding:5px 5px 10px;
                
                .btn {
                    width:70px;
                    height:32px;
                    background:#bec5d0;
                    outline:none;
                    border:none;
                    border-radius:32px;
                    font-size:14px;
                    color:#fff;
                    line-height:31px;
                    cursor:pointer;
                }
            }
        }
    
    
       


    `
return (
    <>
        <CommentBlock>
            <div className="Background" >
                <form className="form">
                    <input type="text"  className="input 1" placeholder="필명"/>
                    <input type="text" className="input 2" placeholder="확인번호"  />
                </form>
                <div className="textarea1">
                  
                    <textarea name ="body"className="textarea" placeholder="댓글을 입력해주세요" />
                </div>
                <div className="Submit">
                    <button type="submit"  className="btn" >제출</button>
                </div>
            </div>
        </CommentBlock>
    </>

)
}
export default Comment