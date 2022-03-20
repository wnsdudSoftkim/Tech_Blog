import React,{useState} from 'react'
import styled,{createGlobalStyle} from 'styled-components'
import {Link} from 'react-router-dom'
import Header from './base/Header'
import axios from 'axios'
import LoginModal from './Modal/LoginModal'
import { AiOutlineMail,AiOutlineLock} from "react-icons/ai";

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [modal,setModal] = useState(true)
   
    const onSubmit =e => {
        e.preventDefault()
    }
    const login=()=> {
        axios.post('User/login',{
            email:{email},
            password:{password},
        }).then(function(response){
            console.log(response.data['response'])
            const res = response.data['response']
            if(res==='null'){
                alert("아이디가 존재하지 않습니다.")
            }
            else if(res==='good'){
                setModal(false)
            }
            else if(res==='fail'){
                alert("아이디와 비밀번호가 틀립니다.")
            }
        }).catch(function(error){
            console.log(error)
        })
        console.log(email)
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
                        margin-top:8px;
                    }
                    .input{
                        border-radius:8px;
                        outline:none;
                        border:none;
                        font-size:18px;
                       
                    
                    }
                     .wrap{
                        margin-top:32px;
                        heigth:100%;
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        .btn {
                            width: 140px;
                            height: 45px;
                            font-family: 'Roboto', sans-serif;
                            font-size: 11px;
                            text-transform: uppercase;
                            letter-spacing: 2.5px;
                            font-weight: 500;
                            color: #000;
                            background-color: #fff;
                            border: none;
                            border-radius: 45px;
                            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
                            transition: all 0.3s ease 0s;
                            cursor: pointer;
                            outline: none;
                        }
                          
                        .btn:hover {
                            background-color: #2EE59D;
                            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
                            color: #fff;
                            transform: translateY(-7px);
                        }
                    }
                }
            }
        }
    `
    if(modal) {
        return(
            <>
            <Header/>
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
                                    <div className="wrap">
                                    <button type="button" className="btn" onClick={login}>로그인</button>
                                    <Link to ="/SignUp">
                                        <button type="button" className="btn">회원 가입</button>
                                    </Link>
                                    
                                </div>
                                </form>
                            </div>
                        </div>
                    </SigninBlock>
                </>
            </>
                
        )
    }else {
        return (
            <LoginModal/>
        )
        
    }
}
export default SignUp