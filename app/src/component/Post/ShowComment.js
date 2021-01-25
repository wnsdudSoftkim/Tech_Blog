import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import './ShowComment.scss'
import user from '../image/user.png'
function ShowComment() {
    //store 값불러온다
    const mydata = useSelector(state=>state.fetchComment)
    
    console.log(Object.keys(mydata).length)
    return (
        <>  
           
            <div className="comment_container">
                <div className="list_header">
                    <strong className="list_header_strong">
                        댓글
                        <span className="list_header_span">
                            {Object.keys(mydata).length}
                        </span>
                    </strong>
                </div>
                {Object.keys(mydata).map(function(key){
                    return (
                            <>
                                
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
                                
                            </>
                    )
                })}
            </div>
           
        </>
    )
}
export default ShowComment