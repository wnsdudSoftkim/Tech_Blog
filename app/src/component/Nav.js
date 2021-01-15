import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import user from './image/user.png'

const PageBlock = styled.div`
    position:fixed;
    z-index:300;
    width:100%;
    height:100%;
    opacity:0.8;
    transition:0.8s;
    transform:${prop=>prop.Toggle ? 'translateX(0%)':'translatex(-100%)'}
`
const SidePageBlock=styled.div`
    width:50%;
    height:100%;
    background:#f1f3f5;
    overflow-y:scroll;
    @media(max-width:768px){
        z-index:300;
        background:#f8f8f8;
    }
    overflow:auto;
`
const SideBox=styled.div`
    width:80%;
    margin:0 auto;
    margin-left:20px;
`
const UIBlock = styled.div`
    display:flex;
    flex-direction:column;
    .list-item{
        font-size:14px;
        font-family:NeoDunggeunmo;
        line-height:11px;
        cursor:pointer;
        color:black;
        border-bottom:1px solid lightgray;
        padding: 30px 5px;
        @media(max-width:768px) {
            font-weight:bold;
            font-size:15px;
            border:none;
            &:hover{
                color:white;
            }

        }
        &:hover{
            color:#9939f2;
        }
        
    }
`
const SideBottomBlock = styled.div`
    margin-top:40px;
    @media(max-width:768px) {
        display:flex;
        flex-direction:column;
        margin-top:15px;
        box-sizing:border-box;

    }
    .UserBlock{
        @media(max-width:768px){

        }
    }
    .Text{
        font-size:14px;
        font-family: 'Crimson Text', serif;
    }
    
`
const MediaBottomBlock = styled.div`
    display:none;
    @media(max-width:768px){
        display:flex;
        flex-wrap:wrap;
        margin-top:30px;
    }
    @media(max-width:400px){
        display:flex;
        flex-direction:column;
        margin-top:0px;
    }
    .margin{
        margin-top:10px;
    }
    .text{
        color:black;
        font-size:16px;
        margin-left:2px;
        padding: 2px 3px;
        cursor: pointer;
        transition:0.5s;
        &:hover{
            color:#99e9f2;
        }
    }

`


function Nav({Toggle}) {
	return (
		<PageBlock Toggle={Toggle}>
			<SidePageBlock>
				<SideBox>
					<UIBlock>
						
						<div className="list-item">전체보기</div>
						<div className="list-item">전체보기</div>
					</UIBlock>
					<SideBottomBlock>
						<div className="UserBlock">
							<img src= {user} alt="jun" />
						</div>
						<p className="Text">test<br /> test<br />test </p>
						
					</SideBottomBlock>
					<MediaBottomBlock>
						<div className="margin">
							<Link to ="/" style={{textDecoration:'none'}}><div className="text">홈으로</div></Link>
						</div>
						<div className="margin">
							<Link to ="/introduce" style={{textDecoration:'none'}}><div className="text">소개</div></Link>
						</div>
						<div className="margin text">
							포트폴리오
						</div>
						<div className="margin">
							<Link to ="/GuestBook" style={{textDecoration:'none'}}><div className="text">방명록</div></Link>
						</div>
						<div className="margin">
							<Link to ="Signin" style={{textDecoration:'none'}}><div className="text">관리자</div></Link>
						</div>
						<div className="margin">
							<Link to ="AddPost" style={{textDecoration:'none'}}><div className="text">글쓰기</div></Link>
						</div>
					</MediaBottomBlock>
				</SideBox>
			</SidePageBlock>
		</PageBlock>
	)
}

export default Nav