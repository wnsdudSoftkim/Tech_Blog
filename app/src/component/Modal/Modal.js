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
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.8);
        display:flex;
        align-items:center;
        justify-content:center;
        .Modal{
            background:#eee;
            padding:24px 16px;
            border-radius:4px;
            width:320px;
            .under{
                display:flex;
                .undertext{
                    font-size:8px;
                }
                .closewrapper{
                    margin-left:10px;
                    text-align:right;
                    .closebtn{
                        background:#eee;
                        box-sizing:border-box;
                        outline:none;
                    }
                    .btn1{
                        margin-right:10px;
                    }
                }
            }
        }
    `
    return (
        <ModalBlock>
            <div className="Modal">
                <div className="ModalTitle">회원가입</div>
                <p className="text">회원 가입이 완료 되었습니다 홈으로 이동하시겠습니까?</p>
                <div className="under">
                    <p className="undertext">아니오 클릭시 로그인화면으로 이동합니다.</p>
                    <div className="closewrapper">
                        <button className="closebtn btn1" onClick={onClickYes}>네</button>
                        <button className="closebtn btn2">
                            <Link to ="/Signin" style={{textDecoration:'none',color:"#333"}}>아니오</Link>
                            
                        </button>
                    
                    </div>
                </div>
            
            
            </div>
        </ModalBlock>
    )
}
export default Modal