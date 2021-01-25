import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import './ShowComment.scss'
var commentlist=[]
function ShowComment() {
    //store 값불러온다
    const mydata = useSelector(state=>state.fetchComment)
    useEffect(()=> {
        console.log(mydata)
    },[mydata])
    console.log(Object.keys(mydata))
    return (
        <>
            <div className="comment_container">
                {Object.keys(mydata).map(function(key){
                    return (
                            <>
                                <div className="list_item">
                                    <div className="list_info">
                                        <div className="list_info_header">
                                            <strong>{mydata[key].name}</strong>
                                        </div>
                                        <div className="list_info_body">
                                            <p>{mydata[key].body}</p>
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