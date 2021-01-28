import React , {useEffect} from 'react'
import styled from 'styled-components'
import instablack from '../image/instablack.PNG'
import facebook from '../image/facebook.PNG'
import {BsChatSquareDots} from 'react-icons/bs'
import user2 from '../image/user2.png'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import Comment from './Comment'
import axios from 'axios'
import HeaderSmall from '../HeaderSmall'
import {useSelector,useDispatch} from 'react-redux'
import CodeEditorPreview from './CodeEditorPreview'
import {fetchComment} from '../../store/action/index'
import ShowComment from './ShowComment'

//하나의 포스트를 클릭시 들어가지는 페이지
var refresh_data ={
    title:'',
    body:'',
    user_date:'',
    my_id:'',

}
//댓글 갯수 받는 변수
var commentlist=[]
function PostPage({title,body,thumbnail,user_date}){
    //단일 데이터를 받아온다
    var mydata  = useSelector(state=> state.singlepostdata)
    const dispatch = useDispatch()
    useEffect(()=> {
        refresh_data.title = mydata.title
        refresh_data.body = mydata.body
        refresh_data.user_date = mydata.user_date
        refresh_data.my_id = mydata.my_id
        fetch_myComment()
        
        
      
    },[mydata])
    //id 에 맞는 post 댓글을 불러오는 로직 (store에 저장)
    const fetch_myComment=()=> {
        axios.defaults.xsrfCookieName = "csrftoken"
        axios.defaults.xsrfHeaderName = "X-CSRFToken"
        axios.post('/Comment/fetchcomment',{
            my_id:mydata.my_id
        }).then(function(response){
            dispatch(fetchComment(response.data))
            //response.data를 전부 store에 저장

        })
    }
    
    
    
    
    
    const onClickChat=()=> {
        var location = document.querySelector(".comment_container").offsetTop
        window.scrollTo({top:location, behavior:'smooth'});
    }
    
    
    const PostPageBlock = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        background:white;
        padding: 20px 11vw 50px;
        box-shadow: 0px -2px -4px 4px #eee;
        @media(max-width:767px) {
            padding:20px 0 50px;
            
           
            
        }
        .bschatdot{
            position: fixed;
            top: 4rem;
            right: 24px;
            z-index: 999999;
            width: 32px;
            height: 32px;
            cursor:pointer;
        }

        .PageBlock {
            
            width:100%;
            display:flex;
            flex-direction:column;
            @media(max-width:767px) {
                width:100%;

               
                
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
                    @media(max-width:767px) {
                        margin:1rem;
                        
                       
                        
                    }
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
                  
                    @media(max-width:700px){
                        padding-bottom:0;
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
                               line-height:34px;
                               &:hover {
                                   text-decoration:underline;
                                   opacity:1;
                               }
                           }
                           
                       }
                    }
                    .Logo {
                        display:flex;
                        padding-top:2rem;
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
                  
                    @media(max-width:767px) {
                        padding-right:0;
                        
                       
                        
                    }
                   

                }
               
            }
        }
    `
   
    return (
        <>  
            <HeaderSmall />
            <PostPageBlock>
                <div className="bschatdot"  onClick={onClickChat}>
                    <BsChatSquareDots size="48"/>
                </div>
                
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
                                
                            </div>
                        </div>
                    </div>
                
                    <div className="body">
                        
                        <div className="center">
                            <CodeEditorPreview mydata={mydata}/>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </PostPageBlock>
            <ShowComment/>
                        
            
            
            <Comment my_id={refresh_data.my_id} />
            <Footer/>
            


        </>
        
    )   
}

export default PostPage