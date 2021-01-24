import React , {useEffect, useState} from 'react'
import styled from 'styled-components'
import tumb from '../image/tumb.PNG'
import instablack from '../image/instablack.PNG'
import facebook from '../image/facebook.PNG'
import user2 from '../image/user2.png'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import Comment from './Comment'
import HeaderSmall from '../HeaderSmall'
import {useSelector} from 'react-redux'
import CodeEditorPreview from './CodeEditorPreview'

//하나의 포스트를 클릭시 들어가지는 페이지
var refresh_data ={
    title:'',
    body:'',
    user_date:'',

}
function PostPage({title,body,thumbnail,user_date}){
    //단일 데이터를 받아온다
    var mydata  = useSelector(state=> state.singlepostdata)
   
    useEffect(()=> {
        refresh_data.title = mydata.title
        refresh_data.body = mydata.body
        refresh_data.user_date = mydata.user_date
        console.log(mydata)
        console.log(refresh_data)
      
    },[mydata])
    
    
    
    
    const [Toggle,SetToggle] = useState(false)
    const PostPageBlock = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        background:white;
        padding: 20px 11vw 50px;
        box-shadow: 0px -2px -4px 4px #eee;

        .PageBlock {
            
            width:100%;
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
                width:100%;
                padding: 20px 0 50px;
                .titleandDelete{
                    display:flex;
                    flex-direction:row;
                    justify-content:center;
                    align-items:center;
                    margin:2rem;
                    padding-top:50px;
                    padding-bottom:10px;
                    
                    .itemTitle {
                        color:rgba(0,0,0,0.84);
                        font-size:55px;
                        @media(max-width:1000px) {
                            line-height:0;
                        }
                        @media(max-width:600px) {
                            font-size:40px;
                        }
                        line-height:1.5rem;
                        font-weight:500;
                      
                        text-align:center;
                       
                    }
                   
                }
                
                .LogoWithIntro {
                    display:flex;
                    margin-top:10px;
                    justify-content:space-around;
                    align-items:center;
                    padding-bottom:60px;
                    border-bottom: 1px solid lightgray;
                    
                    @media(max-width:768px) {
                        flex-direction:column-reverse;
                    
                        
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
                       
                    }
                        
                    
                }
            }
            .body {
               
                box-sizing:border-box;
               
                display:flex;
                justify-content:center;

                .center {
                    box-sizing:border-box;
                    justify-content:center;
                    width:90%;
                    margin-bottom:3rem;
                    text-align:center;
                    padding-right:2rem;
                   

                }
               
            }
        }
    `
   
    return (
        <>
            <HeaderSmall />
            <PostPageBlock>
                {!Toggle ?
                    <>
                        <div className="PageBlock">
                            <div className="title">
                                <div className="titleandDelete">
                                    <h1 className="itemTitle">
                                        <p>
                                            {mydata.title}
                                        </p>
                                        
                                    </h1>
                                    
                                    

                                </div>
                                <div className="LogoWithIntro">
                                    <div className="Intro">
                                        <div>
                                            <img size ="14" src={user2} />
                                        </div>
                                        
                                        <div className="description">
                                            <p className="text name" style={{margin:'0'}}>
                                                <Link className ="text" to ="/introduce" style={{textDecoration:'none'}}><div className="text">김준영</div></Link>

                                            </p>
                                            <p className="text name" style={{margin:'0'}}>
                                                {mydata.user_date}
                                            </p>
                                        </div>                                             
                                    </div>
                                    <div className ="Logo">
                                        <p className=" Logo1 insta" onClick={() => {window.location.assign("https://www.instagram.com/c_mongkey/?hl=ko")}}>
                                            <img size ="14" src={instablack} alt="인스타" />
                                        </p>
                                        <p className="Logo1 facebook" onClick={() => {window.location.assign("https://www.facebook.com")}}>
                                            <img size ="14" src={facebook} alt="페이스북" />
                                        </p>
                                        <p className="Logo1 twitter" onClick={() => {window.location.assign("https://www.tumblr.com/blog/junyoung110707")}}>
                                            <img size ="14" src={tumb} alt="텀블러" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="body">
                                
                                <div className="center">
                                    <CodeEditorPreview mydata={mydata}/>
                                </div>
                             
                                
                                
                            </div>
                        </div>
                        
                    </>
                    : <></>
                }
    
                
            </PostPageBlock>
            <Comment/>
            <Footer/>
            


        </>
        
    )   
}

export default PostPage