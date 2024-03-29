import React,{useState} from 'react'
import styled, { css } from 'styled-components'
import profile from '../image/profile.jpg'
import IntroduceInfo from './introduceinfo'
import HeaderSmall from '../HeaderSmall'


function Introduce() {
    const [activeTab,setActiveTab] = useState(1)
    
    const toggle =tab => {
        if(tab!== activeTab) {
            setActiveTab(tab)
        }
    }
    const IntroBlock = styled.div`
        width:100%;
        position:absolute;
        font-family: 'Noto Sans KR', sans-serif;
        margin-top:3rem;
    `
    const SectionBlock = styled.div`
        position:relative;
        width:700px;
        margin:0 auto;
        @media(max-width:768px) {
            width:500px;

        }
        @media(max-width:500px){
            width:300px;
        }

    `
    const IntroHeaderBlock = styled.div`
        width:100%;
        margin-top:48px;
        .H1{
            display:block;
            font-size:28px;
            line-height:34px;
            color:#333;
            font-weight:400;

        }
        .SubH1 {
            margin-top:10px;
            display:block;
            font-size:13px;
            color:#959595;

        }
        .GrayText{
            font-size:13px;
            color:#959595;

        }
        .visitor {
            margin-top:15px;

        }
        .textnumber {
            font-size:18px;
            color:#959595;

        }
        .Md{
            position:relative;
            left:-10px;
        }

    `
    const TumbBlock = styled.div`
        position:absolute;
        top:0%;
        right:0%;
        .profile {
            
            width:100px;
            height:100px;
            border-radius:50px;
            display:flex;
            align-items:center;
            justify-content:center;
        }

    `
    const ButtonBlock = styled.div`

        height:30px;
        border-radius:16px;
        display:flex;
        margin-top:70px;
        align-items:center;
        justify-content:center;
        font-family:NeoDunggeunmo;
        box-shadow:rgba(0, 0, 0, 0.08) 0px 2px 16px 0px;
        border:1px solid lightgray;
        font-size:18px;
        cursor:pointer;
        
        &:hover{
            background:#f1f2f3;

        }

    `
    const IntroBottomBlock = styled.div`
        margin-top:48px;
        border-top:1px solid #eee;
        position:absolute;
        width:100%;
        .BottomUl {
            display:flex;
            justify-content:space-between;

        }
        .BottomLi{
            width:33.33%;
            display:block;
            height:24px;
            margin-top:-1px;
            padding:0;
            font-size:16px;
            text-align:center;
            cursor:pointer;
            margin-right:10px;
        }
        .a {
            color:#959595;
            text-decoration:none;
            font-size:16px;
           
            
        }
        .a1 {
             ${props=>props.activeTab===1&& css`
                color:#000;
            `}
        }
        .a2 {
            ${props=>props.activeTab===2&& css`
            color:#000;
        `}
        }
        .a3 {
            ${props=>props.activeTab===3&& css`
            color:#000;
        `}
        }
    `
    const MainBlock = styled.div`
        position:absolute;
        width:100%
    `

    return (
		<>
			<HeaderSmall />
			<IntroBlock>
				<SectionBlock>
					<IntroHeaderBlock>
						
						<TumbBlock>
							<img src={profile} className="profile" alt='aa' size="80" />
						</TumbBlock>
						<strong className="H1">김준영</strong>
						<span className="SubH1 GrayText">backend-developer</span>
						<div className="visitor">
							<p className="GrayText">끊임없는 성장을 추구합니다.</p>
							
						</div>
						<ButtonBlock onClick={()=> {
							window.location.assign('http://localhost:3000')
						}}>
							최신글 보러가기
						</ButtonBlock>
					</IntroHeaderBlock>
					<IntroBottomBlock activeTab={activeTab}>
						<ul className="BottomUl">
							<li className="BottomLi" onClick={()=>toggle(1)}>
								<a className="a a1" href="#info" onClick={()=>toggle(1)}>소개</a>
							</li>
							
							<li className="BottomLi" onClick={()=>toggle(3)}>
								<a className="a a3"  href="#Pot" onClick={()=>toggle(3)}>포트폴리오</a>
							</li>
						</ul>
						<MainBlock>
							<IntroduceInfo activeTab ={activeTab}/>
						</MainBlock>
					</IntroBottomBlock>
				</SectionBlock>
			</IntroBlock>
           
       

		</>
        
		
	)

}
export default Introduce
