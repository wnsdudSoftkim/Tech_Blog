import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import HeaderSmall from '../HeaderSmall'
import Lottie from 'react-lottie'
import lottieanim from '../../lottie/GuestLottie.json'
import {AiOutlineSend} from 'react-icons/ai'
import axios from 'axios'
import './GuestBook.scss'
import {fetchComment} from '../../store/action/index'
import ShowGuestComment from './ShowGuestComment'
//기존 comment logic 유지 , id는 고정
var data = {namedata:"none",
            checkdata:"none",
            bodydata:"none",
            my_id:"qkdaudfhrdkdlel",
}
var Toggle = {
    nametoggle:false,
    checktoggle:false
}
function GuestCommentName() {
    const [nameinput,SetNameInput] = useState({name:""})
    const {name} = nameinput
    const onChangename = e => {
        e.preventDefault()
        SetNameInput({
            name:e.target.value
        })
        
        
    }
    
    
    if(name.length===0) {
        Toggle.nametoggle=false
    }else {
        Toggle.nametoggle = true
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
function GuestCommentCheck() {
    const [Checkinput,SetCheckInput] = useState({check:""})
    const {check} = Checkinput
    const onChangeCheck = e => {
        e.preventDefault()

        SetCheckInput({
            check:e.target.value
        })
        
        
    }
    
    
   
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
function GuestCommentBody() {
    const [Bodyinput,SetBodyInput] = useState({body:""})
    const {body} = Bodyinput
    const onChangeBody = e => {
        e.preventDefault()
        SetBodyInput({
            body:e.target.value
        })
        
        
    }
 
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
function SubmitGuestComment() {
    const date =Date()
    const my_date = date.substring(0,16)
   
    if(!Toggle.checktoggle || !Toggle.nametoggle) {
        console.log('No Data Here')
        alert("제목과 확인번호를 입력해주시기 바립니다.")
    }else {
   
        console.log('good to go')
        axios.defaults.xsrfCookieName = "csrftoken"
        axios.defaults.xsrfHeaderName = "X-CSRFToken"
        axios.post('/Comment/',{
            name:data.namedata,
            check:data.checkdata,
            body:data.bodydata,
            my_id:data.my_id,
            my_date:my_date,
        }).then(function(response){
           
            if(response.data['response']==="Good") {
                //페이지 새로고침
                window.location.reload()
                
                
            }else {
                alert("오류가 발생하였습니다")
            }
        }).catch(function(error){
            console.log(error)
           
        })
    }
    
   
}
function GuestBook() {
    const dispatch = useDispatch()
    useEffect(()=> {
        fetch_myComment()
    },[])
    
    const fetch_myComment=()=> {
        axios.defaults.xsrfCookieName = "csrftoken"
        axios.defaults.xsrfHeaderName = "X-CSRFToken"
        axios.post('/Comment/fetchcomment',{
            my_id:data.my_id
        }).then(function(response){
            
            if(!(response.data==="N")){
                //response.data를 전부 store에 저장
                dispatch(fetchComment(response.data))
           
            }else {
                //데이터가 아무것도 없을 때 store 초기화
                dispatch(fetchComment(null))
            }
                
               
            
            

        }).catch(function(error){
            console.log(error)
           
        })
    }
    //로티 옵션
    const lottieOptions = {
        animationData:lottieanim,
        loop:true,
        autoplay:true,
        
    }
    return (

        <>
            <div className="wrapper">
                <HeaderSmall />
                <div className="guest-container">
                    <div className="guest-header">
                        <div className="anim-up">
                            <Lottie options={lottieOptions} style={{width:'300px',height:'300px',margin:'0 auto'}}/>
                        </div>
                        <h1 className="guest-h1">
                            자유롭게 이야기를 나누는 공간입니다
                        </h1>
                    </div>
                    <div className="guest-body">
                        <div className="guest-write-comment">
                            <form className="form">
                                <div className="comment-header">
                                    <GuestCommentName/>
                                    <GuestCommentCheck/>
                                </div>
                               
                            </form>
                            <GuestCommentBody/>
                            <p className="iconp">
                                <AiOutlineSend className="sendicon" size="32" onClick={SubmitGuestComment}/>
                            </p>
                            

                            
                        </div>
                        <div className="guest-show-comment">
                            <ShowGuestComment/>
                        </div>
                        
                       
                        
                    </div>
                </div>
            </div>
            
            
        </>
    )
}
export default GuestBook