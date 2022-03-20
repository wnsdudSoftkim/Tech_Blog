import React from 'react'
import {useSelector} from 'react-redux'
import './ShowGuestComment.scss'
import user from '../image/user.png'
import axios from 'axios'
import {AiTwotoneDelete} from 'react-icons/ai'
import swal from 'sweetalert'
function ShowGuestComment() {
    //store 값불러온다
    const mydata = useSelector(state=>state.fetchComment)
    const onClickDelete=(check,name)=> {
        swal("",{
            title:"정말 삭제하시겠습니까?",
            icon:"warning",
            buttons:true,
            dangerMode:true
        }).then((willDelete)=> {
            //여기서 delete 통신하고 delete 되었다는 modal표시
            //여기서 실제 check 값이 store에 있으므로 여기서 판단후 넘겨준다
            if(willDelete) {
                swal("확인번호를 입력해주세요",{
                    content:"input"
                }).then((value)=> {
                    if(value===check){
                       
                        deleteFunc(check,name)
                    }else {
                        swal("",{
                            title:"일치 하지 않습니다."
                        })
                    }
                })
            } 
        })
    }
    const deleteFunc=(check,name)=> {
        axios.defaults.xsrfCookieName = "csrftoken"
        axios.defaults.xsrfHeaderName = "X-CSRFToken"
        axios.post('/Comment/deletecomment',{
            my_id:"qkdaudfhrdkdlel",
            check:check,
            name:name
        }).then(function(response){
            window.location.reload()
        })
    }
    return (
        <>  
            <div className="comment_container">
                
                {Object.keys(mydata).map(function(key){
                    return (
                            <>
                                <div className="top" key={key}>
                                    <div className="list_item">
                                        <div className="list_info">
                                            <div className="list_info_img">
                                                <img src={user} className="info_img"/>
                                            </div>
                                            <div className="list_info_wrapper">
                                                <div className="list_info_header">
                                                    <strong>{mydata[key].name}</strong>
                                                    <div className="list_info_header_date">
                                                        <p className="inp">{mydata[key].my_date}</p>
                                                    </div>        
                                                </div>
                                                <div className="list_info_body">
                                                    <p className="inpbody">{mydata[key].body}</p>
                                                </div>
                                            </div>     
                                        </div>   
                                    </div>
                                    <div className="deleteicon">
                                        <AiTwotoneDelete size="32" style={{cursor:'pointer'}} onClick={()=>{onClickDelete(mydata[key].check,mydata[key].name)}}/>
                                    </div>
                                </div>
                            </>
                    )
                })}
            </div>
        </>
    )
}
export default ShowGuestComment