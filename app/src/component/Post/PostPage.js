import React , {useState,useEffect} from 'react'
import styled,{createGlobalStyle} from 'styled-components'
import axios from 'axios'
import Header from '../Header'
import tumb from '../image/tumb.PNG'
import instablack from '../image/instablack.PNG'
import facebook from '../image/facebook.PNG'
import user2 from '../image/user2.png'
import {Link} from 'react-router-dom'
import { MdDelete } from "react-icons/md";
//하나의 포스트를 클릭시 들어가지는 페이지
function PostPage({match}){
    const [title,SetTitle] = useState()
    const [body,SetBody] = useState()
    const [Toggle,SetToggle] = useState(false)
    
    return (
        <>
        </>
    )
}
export default PostPage