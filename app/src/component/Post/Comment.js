import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
//name 과 check 둘다 입력해야 제출이 됨
var Toggle = {
    nametoggle:false,
    checktoggle:false
}
var data = {namedata:"none",
            checkdata:"none",
            bodydata:"none",
            my_id:"none",
}
function CommentNameInput() {
    const [nameinput,SetNameInput] = useState({name:""})
    const {name} = nameinput
    const onChangename = e => {
        e.preventDefault()
        SetNameInput({
            name:e.target.value
        })
        
        
    }
    console.log(name)
    if(name.length===0) {
        Toggle.nametoggle=false
    }else {
        Toggle.nametoggle = true
        Comment.bind(Toggle)
        data.namedata=name
    }   
    return (
        <>
            <input
                className="input" 
                placeholder="이름을 입력하세요" 
                value={name}
                onChange={e=>onChangename(e)}
            />    
        </>
    )
}
//only integer
function CommentCheckInput() {
    const [Checkinput,SetCheckInput] = useState({check:""})
    const {check} = Checkinput
    const onChangeCheck = e => {
        e.preventDefault()

        SetCheckInput({
            check:e.target.value
        })
        
        
    }
    
    
    console.log(check)
    if(check.length===0) {
        Toggle.checktoggle = false
    }else {
        Toggle.checktoggle = true
        data.checkdata=check
    }   
    return (
        <>
            <input
                type="password"
                className="input input2" 
                maxLength="5"
                placeholder="5자리 확인 번호"
               
                value={check}
                onChange={e=>onChangeCheck(e)}
            />    
        </>
    )
}
function CommentBodyInput() {
    const [Bodyinput,SetBodyInput] = useState({body:""})
    const {body} = Bodyinput
    const onChangeBody = e => {
        e.preventDefault()
        SetBodyInput({
            body:e.target.value
        })
        
        
    }
    console.log(body)
    if(body.length===0) {
       
    }else {
        
        data.bodydata=body
    }   
    return (
        <>
            <textarea name ="body"
                    className="textarea" 
                    placeholder="댓글을 입력해주세요"
                    value={body}
                    onChange={e=>onChangeBody(e)}
            />
           
        </>
    )
}
function SubmitComment() {
    if(!Toggle.checktoggle&&!Toggle.nametoggle) {
        console.log('No Data Here')
        alert("제목과 확인번호를 입력해주시기 바립니다.")
    }else {
        console.log(data)
        console.log('good to go')
        axios.defaults.xsrfCookieName = "csrftoken"
        axios.defaults.xsrfHeaderName = "X-CSRFToken"
        axios.post('/Comment/',{
            name:data.namedata,
            check:data.checkdata,
            body:data.bodydata,
            my_id:data.my_id
        }).then(function(response){
            console.log(response.data['response'])
            if(response.data['response']==="Good") {
                //여기서 데이터 보여준다
                
                
            }else {
                alert("오류가 발생하였습니다")
            }
        }).catch(function(error){
            console.log(error)
            alert("Error Code",error)
        })
    }
    
   
}
function Comment({my_id}) {
    useEffect(()=> {
        console.log(my_id)
        data.my_id=my_id
    },[])
    const CommentBlock = styled.div`
    input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; -moz-appearance: none; appearance: none; }


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
                    resize:none;
                }
            }
            .Submit {
                text-align:right;
                padding:5px 5px 10px;
                
                .btn {
                    width:70px;
                    height:32px;
                    background:#4183c4;
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
        #4183c4;
    
    
       


    `
    return (
        <>
            <CommentBlock>
                <div className="Background" >
                    <form className="form">
                        <CommentNameInput/>
                        <CommentCheckInput/>
                    </form>
                    <div className="textarea1">
                    
                        <CommentBodyInput/>
                    </div>
                    <div className="Submit">
                        <button type="submit" style={{}} className="btn" onClick={SubmitComment}>제출</button>
                    </div>
                </div>
            </CommentBlock>
        </>

    )
}
export default Comment