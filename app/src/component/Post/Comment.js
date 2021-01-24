import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
function Comment() {
    const CommentBlock = styled.div`
        width:80%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin: 20px 11vw 20px;

        background:#f1f4f8;
        border: 1px solid #DADDE0;
        @media(max-width:400px) {
            width:100%;
            margin:0 0 10px 0;
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
                    <input type="text"  className="input 1" placeholder="이름"/>
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