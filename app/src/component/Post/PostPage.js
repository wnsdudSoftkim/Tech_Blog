import React , {useState} from 'react'
import styled from 'styled-components'
import Header from '../Header'
import tumb from '../image/tumb.PNG'
import instablack from '../image/instablack.PNG'
import facebook from '../image/facebook.PNG'
import user2 from '../image/user2.png'
import {Link} from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import Comment from './Comment'
//하나의 포스트를 클릭시 들어가지는 페이지
function PostPage({match}){
    const [title,SetTitle] = useState()
    const [body,SetBody] = useState()
    const [Toggle,SetToggle] = useState(false)
    const PostPageBlock = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        background:white;
        box-shadow: 0px -2px -4px 4px #eee;

        .PageBlock {
            width:768px;
            border-top:1px solid #a8a5a5;
            display:flex;
            flex-direction:column;
            @media(max-width:767px) {
                width:512px;
               
                
            }
            @media(max-width:540px) {
            
                margin-left:20px;
                margin-right:20px;
                
            }
            @media(max-width:400px) {
                
            }
            .title {
                .titleandDelete{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    margin-top:10px;
                    .itemTitle {
                        color:rgba(0,0,0,0.84);
                        font-size:32px;
                        line-height:40px;
                        font-weight:400;
                        margin-top:10px;
                       
                    }
                    .Delete {
                        cursor:pointer;
                    }
                }
               
                .LogoWithIntro {
                    display:flex;
                    margin-top:10px;
                    justify-content:space-between;
                    align-items:center;
                    @media(max-width:768px) {
                        flex-direction:column-reverse;
                        align-items:stretch;
                    }
                    .Intro {
                       display:flex;
                       .description {
                           margin-left:12px;
                           display:flex;
                           flex-direction:column;
                           .text {
                               color:rgba(0,0,0,0.84);
                               font-size:16px;
                               opacity:0.8;
                               cursor:pointer;
                               &:hover {
                                   text-decoration:underline;
                                   opacity:1;
                               }
                           }
                           
                       }
                    }
                    .Logo {
                        display:flex;
                        .Logo1 {
                            padding-right:8px;
                            cursor:pointer;
                            @media(max-width:768px) {
                                margin-bottom:30px;
                            }
                        }
                        .insta {
                            
                        }
                    }
                        
                    
                }
            }
            .body {
                margin-bottom:20px;
                
                margin-top:28px;
                .center {
                    font-size:18px;

                }
               
            }
        }
    `
    
    return (
        <>
            <Header />
            <PostPageBlock>
                {!Toggle ?
                    <>
                        <div className="PageBlock">
                            <div className="title">
                                <div className="titleandDelete">
                                    
                                    <h1 className="itemTitle"style={{margin:'0'}}>
                                        {title}
                                    </h1>
                                    
                                    <div className="Delete"  >
                                        <MdDelete size="25"></MdDelete>
                                        
                                    </div>
                                </div>
                                <div className="LogoWithIntro">
                                    <div className="Intro">
                                        <div>
                                            <img size ="10" src={user2} />
                                        </div>
                                        
                                        <div className="description">
                                            <p className="text name" style={{margin:'0'}}>
                                                <Link className ="text" to ="/introduce" style={{textDecoration:'none'}}><div className="text">김준영</div></Link>

                                            </p>
                                            <p className="text name" style={{margin:'0'}}>
                                            <Link to={`/PostPage/${match.params.id}`} style={{textDecoration:'none'}}><div className="text">MAY 7, 2020</div></Link>
                                            </p>
                                        </div>                                             
                                    </div>
                                    <div className ="Logo">
                                        <p className=" Logo1 insta" onClick={() => {window.location.assign("https://www.instagram.com/c_mongkey/?hl=ko")}}>
                                            <img size ="10" src={instablack} alt="인스타" />
                                        </p>
                                        <p className="Logo1 facebook" onClick={() => {window.location.assign("https://www.facebook.com")}}>
                                            <img size ="10" src={facebook} alt="페이스북" />
                                        </p>
                                        <p className="Logo1 twitter" onClick={() => {window.location.assign("https://www.tumblr.com/blog/junyoung110707")}}>
                                            <img size ="10" src={tumb} alt="텀블러" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="Section">
                                    <p className="center">
                                        {body}
                                    </p>
                                </div>
                                <div className="catalog">
                                
                                </div>
                                
                            </div>
                        </div>
                        
                    </>
                    : <></>
                }
    
                
            </PostPageBlock>
            <Comment/>
            


        </>
        
    )   
}

export default PostPage