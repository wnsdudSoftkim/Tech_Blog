import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {SiPostman} from 'react-icons/si'
function SinglePostBox() {
    const SinglePostBoxBlock = styled.div`
        display:flex;
        flex-direction:column;
        margin:0px;
        
        background:white;
        border-radius:4px;
        box-shadow:rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
        transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
        overflow:hidden;
        padding:1rem;
        &:hover {
            transform: translateY(-8px);
            box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px 0px;
        }
        .titlebody{
            display:block;
            text-decoration:none;
        }
        .title {
           font-size:1rem;
           margin:0px 0px 0.25rem;
           line-height:1.5;
           text-overflow:ellipsis;
           overflow:hidden;
           color:rgb(33.37.41); 
        }
        .bodyhint{
            margin: 0px 0px 1.5rem;
            word-break:break-word;
            overflow-wrap:break-word;
            font-size:0.875rem;
            line-height:1.5;
            color:rgb(73,80,87);
        }
        .date{
            font-size:0.75rem;
            line-height:1.5;
            color:rgb(134,142,150);
        }
        .footer {
            padding:0.625rem 1rem;
            border-top:1px solid rgb(248,249,250);
            display:flex;
            font-size:0.75rem;
            line-height:1.5;
            justify-content:space-between;
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
        

    `
    return (
        <>
            <SinglePostBoxBlock>
                
                <a className="titlebody">
                    <h4 className="title">
                        여기에 title값 받은거 적는다
                    </h4>
                    <div className="body">
                        <p className="bodyhint">
                            여기서 body 조금만 적는다
                        </p>
                    </div>
                </a>
                <div className="date">
                    <span>2020년 12월 27일</span>
                </div>
                <div className="footer">
                    <a className="userInfo">
                        <img className="img" src={SiPostman}>

                        </img>
                        <span>
                            by
                            &nbsp;
                            <b>jun</b>

                        </span>

                    </a>
                </div>

            </SinglePostBoxBlock>
        </>
    )
}
export default SinglePostBox