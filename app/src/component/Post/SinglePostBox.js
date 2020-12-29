import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {SiPostman} from 'react-icons/si'
const SinglePostBoxBlock = styled.div`
        display:flex;
        flex-direction:column;
        margin:0px;
        
        background:white;
        border-radius:4px;
        box-shadow:rgba(0, 0, 0, 0.08) 0px 4px 16px 0px;
        transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
        overflow:hidden;
        padding:1rem;
        &:hover {
            transform: translateY(-8px);
            box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px 0px;
        }
        .cover {
            margin:0 auto;
        }
        .titlebody{
            display:block;
            text-decoration:none;
            cursor:pointer;
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
            text-align:center
            margin: 0px 0px 1.5rem;
            word-break:break-word;
            overflow-wrap:break-word;
            font-size:0.875rem;
            line-height:1.5;
            color:rgb(73,80,87);
        }
        .date{
            margin-top:1rem;
            font-size:0.75rem;
            line-height:1.5;
            color:rgb(134,142,150);
        }
        .footer {
            padding:0.625rem 0;
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
function SinglePostBox({key,title,body}) {
    //타이틀 부분 클릭시 타이틀에 대한 정보를 찾는 통신과 동시에
    //PostPage로 넘어가는 작업
    const onClick =() => {

    }
    return (
        <>
            <SinglePostBoxBlock>
                <div className="cover">
                    <Link className="titlebody" key={key} onClick={onClick} to="/PostPage">
                        <h4 className="title">
                            {title}
                        </h4>
                        <div className="body">
                            <p className="bodyhint">
                               {body}
                            </p>
                        </div>
                    </Link>
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
                </div>
                
                

            </SinglePostBoxBlock>
        </>
    )
}
export default SinglePostBox