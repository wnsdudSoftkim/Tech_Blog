import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {SiPostman} from 'react-icons/si'
import PostPage from './PostPage'
import { useDispatch } from 'react-redux'
import {SinglePostData} from '../../store/action/index'
const SinglePostBoxBlock = styled.div`
        display:flex;
        flex-direction:column;
        margin:1rem;
        
        background:white;
        border-radius:4px;
        box-shadow:rgba(0, 0, 0, 0.18) 0px 4px 16px 0px;
        transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
        overflow:hidden;
        
        &:hover {
            transform: translateY(-8px);
            box-shadow: rgba(0, 0, 0, 0.28) 0px 12px 20px 0px;
        }
        .cover {
            
        }
        .titlebody{
            display:block;
            text-decoration:none;
            cursor:pointer;
        }
        .title {
            padding:.7rem;
           
           font-size:1.5rem;
           margin:0px 0px 0.25rem;
           line-height:1.5;
           text-overflow:ellipsis;
           overflow:hidden;
           color:rgb(33.37.41); 
        }
        
        .body {
            
            width:100%;
            height:18rem;
            .thumbnail_image {
                height:100%;
                width:100%;
                object-fit:cover;
                max-width:100%;
                image-rendering:auto;
               
                
               
            }
        }
        
       
        .footer {
            padding:1rem;
            margin-top:1rem;
            border-top:1px solid rgb(248,249,250);
            display:flex;
            font-size:0.75rem;
            line-height:1.5;
            justify-content:space-between;
            .date{
                position:absolute;
                right:4rem;
                font-size:1rem;
                line-height:1.5;
                color:white;
                .date-span {
                    color:black;
                    font-weight:700;
                 
                }
               
            }
            .userInfo{
                text-decoration:none;
                color:inherit;
                display:flex;
                align-items:center;
            }
            .img{
                object-fit:cover;
                border-radius:50%;
                width:1.5rem;
                height:1.5rem;
                display:block;
                margin-right:0.5rem;
            }
            .footer-span {
                color:black;
                font-size:1rem;
            }
        }
        
        

    `
function SinglePostBox({title,body,thumbnail,user_date,my_id}) {
    
    //PostPage로 넘어가는 작업
    const dispatch = useDispatch()
    //클릭시 postpage로 이동하면서 각 데이터들은 store에 저장된다.
    const onClick=() => {
        
        dispatch(SinglePostData(title,body,thumbnail,user_date,my_id))
    }
    //썸네일 이 없으면 임의로 붙여준다
    const temple_thumbnail=[
        "https://jun-techblog.s3.amazonaws.com/images//showpost7.jpeg",
        "https://jun-techblog.s3.amazonaws.com/images//showpost10.jpeg",
        "https://jun-techblog.s3.amazonaws.com/images//showpost11.jpeg",
        "https://jun-techblog.s3.amazonaws.com/images//showpost12.jpeg",
        "https://jun-techblog.s3.amazonaws.com/images//showpost13.jpeg",
        "https://jun-techblog.s3.amazonaws.com/images//showpost3.jpeg",
        "https://jun-techblog.s3.amazonaws.com/images//showpost5.jpeg",
        "https://jun-techblog.s3.amazonaws.com/images//showpost6.jpeg",
        "https://jun-techblog.s3.amazonaws.com/images//showpost7.jpeg",
        "https://jun-techblog.s3.amazonaws.com/images//showpost9.jpeg",
        "https://jun-techblog.s3.amazonaws.com/images//showpost2.png"
    ]

    
    
  
    
    
    
    return (
        <>
            <SinglePostBoxBlock >
                <div className="cover">
                    <Link className="titlebody" onClick={onClick} to="/postpage">
                        <h4 className="title">
                            {title}
                        </h4>
                        <div className="body">
                            {thumbnail===null || thumbnail===undefined?
                                <img className="thumbnail_image" srcSet={temple_thumbnail[Math.floor(Math.random()*12)]+" 400w"}/>
                                :
                                <img className="thumbnail_image" srcSet={thumbnail+" 400w"}/>
                            }
                             
                            
                           
                        </div>
                    </Link>
                    
                    <div className="footer">
                        <a className="userInfo">
                            <img className="img" src={SiPostman}>

                            </img>
                            <span className="footer-span">
                                by
                                &nbsp;
                                <b className="footer-b">jun</b>

                            </span>

                        </a>
                        <div className="date">
                            <span className="date-span">{user_date}</span>
                        </div>
                    </div>
                </div>
                
                

            </SinglePostBoxBlock>
        </>
    )
}
export default SinglePostBox