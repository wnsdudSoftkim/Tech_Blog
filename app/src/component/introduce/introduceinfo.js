import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import instagram from '../image/instagram.png'
import './introduceinfo.scss'
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
    }else {
        return (
            <PotBlock activeTab>
                <div className="Pot">
                    <div className="Basic-table">
                        <table className="table">
                            <thead>
                                <tr className="tr">
                                    <th>
                                        FORM
                                    </th>
                                    <th>
                                        INFORMATION
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="tr">
                                    <td>
                                        이름
                                    </td>
                                    <td>
                                        김준영
                                    </td>
                                </tr>
                                
                                <tr className="tr">
                                    <td>
                                        이메일
                                    </td>
                                    <td>
                                        flgkselql98@gmail.com
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="interest-skill">
                        <h2>
                        Techs that I've used at least once
                        </h2>
                        <ul>
                            <li> 
                                <p>Language</p>
                                <code>
                                    Java
                                </code>
                                <code>
                                    Python
                                </code>
                                <code>
                                    Javascript
                                </code>
                                <code>
                                    Markdown
                                </code>
                                <code>
                                    HTML5/CSS
                                </code>
                                <code>
                                    Kotlin
                                </code>
                                
                            </li>
                            <li> 
                                <p>Framework</p>
                                <code>
                                    Django
                                </code>
                                <code>
                                    React(+Redux)
                                </code>
                                <code>
                                    Node.js
                                </code>
                               
                            </li>
                        
                       
                            <li> 
                                <p>Database</p>
                                <code>
                                    MySQL
                                </code>
                                <code>
                                    MongoDB
                                </code>
                               
                            </li>
                            <li> 
                                <p>Cloud</p>
                                <code>
                                    AWS
                                </code>
                                <code>
                                    Firebase
                                </code>
                               
                            </li>
                        </ul>
                      
                          
                        
                    </div>
                    <div className="education">
                            <table>
                                <thead>
                                    <tr>
                                    <th >Level</th>
                                    <th >Name</th>
                                    <th>Major</th>
                                    <th >Start</th>
                                    <th >End</th>
                                    <th>Status</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td >University</td>
                                    <td >HANKUK UNIVERSITY OF FOREIGN STUDIES</td>
                                    <td>Information and Communication Engineering</td>
                                    <td >2017.03</td>
                                    <td >-</td>
                                    <td >재학</td>
                                    
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    <div className="education">
                            <table>
                                <thead>
                                    <tr>
                                    <th >Rank</th>
                                    <th >Name</th>
                                    <th>Major</th>
                                    <th >Start</th>
                                    <th >End</th>
                                    <th>Status</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td >육군 병장</td>
                                    <td >JunYoungKim</td>
                                    <td>Radio communication</td>
                                    <td >2018.10.02</td>
                                    <td >2020.05.16</td>
                                    <td >전역</td>
                                    
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    <h3>Project</h3>
                    <div className="project">
                        <ul>
                            <li> 
                                <p>기술 블로그 Demo 런칭  <span> | 2020.04~2020.05</span></p>
                                <h3>소개</h3>
                                <b>
                                    개인프로젝트 | FastCampus 강의를 토대로 만든 블로그 |
                                    
                                   
                                   
                                </b>
                                
                                <h3>역활</h3>
                                <b>
                                   프론트엔드 구현 | 기획,개발
                                </b>
                                <h3>기술 스택</h3>
                                <b>
                                    React | Node.js | Heroku | MongoDB
                                </b>
                               
                            </li>
                            
                            <li> 
                                <p>전역일 계산기 앱  <span> | 2020.05~2020.06</span></p>
                                <h3>소개</h3>
                                <b>
                                    개인프로젝트 | Kotlin 기반으로 기획,개발하여 구글 플레이 스토어 배포
                                    | 사용자 중심 첫 APP 개발 프로젝트
                                   
                                   
                                </b>
                                
                                <h3>역활</h3>
                                <b>
                                   기획 | 프론트엔드 구현 | DB,API 설계 | 간단한 로그인, 커뮤니티 구현
                                </b>
                                <h3>기술 스택</h3>
                                <b>
                                   Kotlin, Firebase
                                </b>
                                
                               
                            </li>
                            <li> 
                                <p>온비드 공공매매 앱  <span> | 2020.07~2020.10</span></p>
                                <h3>소개</h3>
                                <b>
                                    팀프로젝트 | Kotlin 기반으로 기획,개발하여 제출 |첫 팀 프로젝트 |
                                    깃으로 협업 방법 학습
                                   
                                   
                                </b>
                                
                                <h3>역활</h3>
                                <b>
                                   프로젝트 조장 | 기획 | DB,API 설계 | OpenAPI 통신
                                </b>
                                <h3>기술 스택</h3>
                                <b>
                                   Kotlin | Firebase
                                </b>
                               
                            </li>
                            <li> 
                                <p>기술 블로그 런칭<span> | 2020.10~2021.2</span></p>
                                <h3>소개</h3>
                                <b>
                                    개인프로젝트 | 마크다운으로 작성하는 기술 블로그 런칭 |
                                    Issue 에 대한 내용을 정리 | 
                                </b>
                                
                                <h3>역활</h3>
                                <b>
                                   기획,개발 | 프론트엔드 구현 | 백엔드 구현 | DB연동 | 이미지 DrapDrop을 aws s3에 저장하여 실시간 이미지 Preview 기능 구현
                                   | 댓글 구현 | 마크다운 글쓰기 기능 구현 | 회원가입 , 로그인 기능 구현 |
                                   SQLite 에서 MySQL 로 DB 변경

                                </b>
                                <h3>기술 스택</h3>
                                <b>
                                   React | Redux | Django | MySQL | AWS S3 | 
                                </b>
                               
                            </li>
                            <li> 
                                <p>우리 지금 만나 앱<span> | 2020.10~</span></p>
                                <h3>소개</h3>
                                <b>
                                    팀프로젝트 | 최대 4명의 사용자의 중간지점을 찾아 범위를 늘려가며 맛집, 관광명소 , 음식점 등 유용한 정보를 제공
                                </b>
                                
                                <h3>역활</h3>
                                <b>
                                    프로젝트 조장 | PM 역활 수행 | 프론트엔드 구현 | DB 설계

                                </b>
                                <h3>기술 스택</h3>
                                <b>
                                   React | MySQL 
                                </b>
                               
                            </li>
                            
                        </ul>
                    </div>
                </div>
               
            </PotBlock>
        )
    }

}
export default IntroduceInfo