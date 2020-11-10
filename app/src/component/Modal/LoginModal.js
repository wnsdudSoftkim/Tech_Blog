import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function Modal() {
    const onClickYes=()=>{
        return(
            <Link to="/"></Link>
        )
    }
    const ModalBlock=styled.div`
       .modal{
           position:absolute;
           left:50%;
           top:50%;
           transform:translate(-50%,-50%);
           width:auto;
           display:inline-flex;
           flex-direction:column;
           align-items:center;
           padding:1.6rem 3rem;
           border:3px solid black;
           border-radius:5px;
           background:white;
           box-shadow:8px 8px 0 rgba(0,0,0,0.2);
           .message{
                font-size:1.1rem;
                margin-bottom: 1.6rem;
                margin-top: 0;
           }
           .btn {
                color:inherit;
                font-family:inherit;
                font-size: inherit;
                background: white;
                padding: 0.3rem 3.4rem;
                border: 3px solid black;
                margin-right: 2.6rem;
                box-shadow: 0 0 0 black;
                transition: all 0.2s;
            }
          
            .btn:last-child {
                margin: 0;
            }
          
            .btn:hover {
                box-shadow: 0.4rem 0.4rem 0 black;
                transform: translate(-0.4rem, -0.4rem);
            }
          
            .btn:active {
                box-shadow: 0 0 0 black;
                transform: translate(0, 0);
            }
          
            .options {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
       }
    `
    return (
        <ModalBlock>
           <div class="modal">
                <p class="message">홈페이지로 이동하시겠습니까?</p>
                <div class="options">
                    <button class="btn" onClick={onClickYes}>Yes</button>
                    <Link to ="/SignIn" style={{color:'#333'}}>
                         <button class="btn" >No</button>
                    </Link>
                   
                </div>
            </div>
        </ModalBlock>
    )
}
export default Modal