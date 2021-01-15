import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import instagram from '../image/instagram.png'

function IntroduceInfo({activeTab}) {

    const InfoBlock = styled.div`
        display:flex;
        flex-direction:column;

        position:absolute;
        width:100%;
        font-family: 'Noto Sans KR', sans-serif;
        color:#959595;
        
        .span{
            font-size:13px;
            padding-bottom:1rem;
            
        }
        .p {
            font-size:13px;
        }
        .address {
            display:flex;
            flex-direction:row;
            align-items:center;
            .github{
                color:#4479A1;
                margin:0;
                cursor:pointer;
                &:hover {
                     color:#000;
                }
            }
            .instagram {
                margin-left:2rem;
                cursor:pointer;
                display:flex;
                flex-direction:row;
                align-items:center;
                .cm {
                    padding-bottom:.04rem;
                   
                }
                .img{
                    width:20px;
                    height:20px;
                    margin-right:4px;
                }
                &:hover {
                    .cm{
                        color:#000;
                    }
                }
            }
        }
        
    
    `
    const ArticleBlock = styled.div`
        display:block;
        position:absolute;
        width:100%;
        font-family: 'Noto Sans KR', sans-serif;
		color:#959595;
    `
    const PotBlock = styled.div`
        display:block;
        position:absolute;
        width:100%;
        font-family: 'Noto Sans KR', sans-serif;
		color:#959595;
    `

    if(activeTab===1) {
        return(
            <InfoBlock>
                <span className="span">Django와 React 기술에 대해 흥미를 느껴 블로그를 제작하게 되었습니다</span>
                <span className="span">Don't ever let somebody tell you. You can't do something</span>
                <span className="span">You got a dream. you gotta protect it.</span>
                <span className="span">좋아하는 영화 "행복을 찾아서" 명대사 입니다</span>
                <span className="span">느려도 한걸음씩 나아가는 마음으로 개발을 하려합니다.</span>
                <div className="address">
                   
                    <p className="github" onClick={() => {window.location.assign("https://github.com/wnsdudSoftkim")}}>Github</p>
                    <p className="instagram" onClick={() => {window.location.assign("https://www.instagram.com/cm_jun0/?hl=ko")}}>
							<img className="img" size ="10" src={instagram} alt="인스타"  />
							<p className="cm">cm_jun0</p>
					</p>
                </div>
                
                
                
            </InfoBlock>
        )
    }else if(activeTab===2){
        return (
            <ArticleBlock >
                <div className="Article">글 작성</div>
              
            </ArticleBlock>
        )
    }else {
        return (
            <PotBlock activeTab>
                <div className="Pot">포트폴리오</div>
               
            </PotBlock>
        )
    }

}
export default IntroduceInfo