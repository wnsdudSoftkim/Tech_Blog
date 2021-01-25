import Axios from "axios"
export const FETCH_GET_POST = 'FETCH_GET_POST'
export const POST_IMAGE_DATA = "POST_IMAGE_DATA"
export const EDIT_BODY = "EDIT_BODY"
export const SINGLE_POST_DATA="SINGLE_POST_DATA"


export const fetchGetPost = async() => {
    const Data = await Axios.get('http://localhost:3000/Post/')
    return {
        type:'FETCH_GET_POST',
        payload:Data.data
    }
}
export const PostImageData=(data)=> {
    return {
        type:"POST_IMAGE_DATA",
        payload:data
    }
}
export const EditBody = (cursor,body,thumbnail) => {
    return {
        type:"EDIT_BODY",
        data:{
            cursor:cursor,
            body:body,
            thumbnail:thumbnail
        }
    }
}
export const SinglePostData =(title,body,thumbnail,user_date,my_id) => {
    return {
        type:"SINGLE_POST_DATA",
        data: {
            title:title,
            body:body,
            thumbnail:thumbnail,
            user_date:user_date,
            my_id:my_id,
        }
    }
}