import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {SiPostman} from 'react-icons/si'

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
            height:13rem;
            .thumbnail_image {
               
                object-fit:fill;
              
                
                text-align:center;
               
            }
        }
        
       
        .footer {
            padding:1rem;
            margin-top:3rem;
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
function SinglePostBox({key,title,body,thumbnail}) {
    //타이틀 부분 클릭시 타이틀에 대한 정보를 찾는 통신과 동시에
    //PostPage로 넘어가는 작업
    const onClick =() => {

    }
    const temple_thumbnail= [
        "https://jun-techblog.s3.amazonaws.com/images//showpost2.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost3.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost4.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost5.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost6.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost7.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost8.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost9.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost10.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost11.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost12.png",
        "https://jun-techblog.s3.amazonaws.com/images//showpost13.png"
    ]
    const a=temple_thumbnail[Math.floor(Math.random()*12)]
    
    
    
    return (
        <>
            <SinglePostBoxBlock>
                <div className="cover">
                    <Link className="titlebody" key={key} onClick={onClick} to="/PostPage">
                        <h4 className="title">
                            {title}
                        </h4>
                        <div className="body">
                            
                            <img className="thumbnail_image" src={thumbnail===null?a:thumbnail}/> 
                            
                           
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
                            <span className="date-span">2020년 12월 27일</span>
                        </div>
                    </div>
                </div>
                
                

            </SinglePostBoxBlock>
        </>
    )
}
export default SinglePostBox