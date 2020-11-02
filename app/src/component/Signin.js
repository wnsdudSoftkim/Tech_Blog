import React,{useState} from 'react'
import styled,{createGlobalStyle} from 'styled-components'
import {Link} from 'react-router-dom'
import Modal from './Modal/Modal.js'
import { AiOutlineMail,AiOutlineLock,AiOutlineUser} from "react-icons/ai";

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [modal,setModal] = useState(true)
   
    const onSubmit =e => {
        e.preventDefault()
    }
    const Sign =() => {

    }
    const GlobalStyle = createGlobalStyle`
        body{
            background:#e9ecef;
        }
    `
    const SigninBlock= styled.div`
        width:512px;
        @media(max-width:512px){
            width:384px;
        }
        @media(max-width:400px){
            width:312px;
        }
        height:760px;
        position:relative;
        background:white;
        border-radius:16px;
        box-shadow:0 0 8px rgba(0,0,0,0.04);
        margin:0 auto;
        margin-top:96px;
        margin-bottom:32px;
        display:flex;
        flex-direction:column;
        .Header{
            padding:48px 32px 24px 32px;
            border-bottom:1px solid #e9ecef;
            .H1{
                margin:0;
                font-size:36px;
                color:#343940;
            }
            .text{
                font-size:18px;
                color:#206997;
                margin-top:40px;
                font-weight:bold;
            }
        }
        .Section{
            flex:1;
            padding:30px 30px;
            padding-bottom:48px;
            overflow-y:auto;
            .Inner{
                .box{
                    margin-top:10px;
                    padding:6px;
                    border-radius:4px;
                    border:1px solid #dee2e6;
                    outline:none;
                    box-sizing:border-box;
                    &:hover{
                        color:#206997;
                    }
                }
                .form{
                    display:flex;
                    flex-direction:column;
                    .label{
                        font-size:16px;
                        font-family: 'Roboto', sans-serif;
                    }
                    .input{
                        outline:none;
                        border:none;
                        font-size:18px;
                       
                    
                    }
                    .btn{
                        margin-top:10px;
                        outline:none;
                        background:#eee;
                        font-size:18px;
                        border-radius:4px;
                        cursor:pointer;

                    }
                    .btn2{
                        text-align:center;
                        padding:1px 6px;
                        box-shadow:1px 2px 8px rgba(0,0,0,0.34);
                        color:black;
                        font-weight:420;
                    }
                }
            }
        }
    `
    if(modal) {
        return(
            <>
                <GlobalStyle/>
                <SigninBlock>
                    <div className="Header">
                        <h1 className="h1">Sign In</h1>
                        <span className="text">로그인</span>
                    </div>
                    <div className="Section">
                        <div className="Inner">
                            <form className="form" onSubmit={onSubmit}>
                            
                                
                                <label for ="inputemail" className="label">이메일 {email}</label>
                                <div className="box">
                                    <AiOutlineMail/>
                                    <input 
                                    type="text"
                                    name ="email" 
                                    className="input"
                                    onChange={({target:{value}})=>setEmail(value)}
                                    value={email}
                                    placeholder="이메일을 적어주세요"
                                    required
                                    />
                                </div>
                            
                                <label for ="inputpassword" className="label">패스워드 {password}</label>
                                <div className="box">
                                    <AiOutlineLock/>
                                    <input 
                                    type="text"
                                    className="input"
                                    name="password"
                                    onChange={({target:{value}})=>setPassword(value)}
                                    value={password}
                                    placeholder="패스워드를 적어주세요"
                                    required
                                />
                                </div>
                                <button type="button" className="btn" onClick={Sign}>로그인</button>
                                <button type="button" className="btn" onClick={Sign}>
                                    <Link to="SignIn">회원가입</Link>
                                </button>
                                <Link to ="/Home" style={{textDecoration:'none',color:'#333'}}>
                                    <div className="btn btn2">Home</div>
                                </Link>
                            </form>
                        </div>
                    </div>
                </SigninBlock>
            </>
        )
    }
}
export default SignUp