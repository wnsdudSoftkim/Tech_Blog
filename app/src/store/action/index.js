import Axios from "axios"
export const FETCH_GET_POST = 'FETCH_GET_POST'
export const POST_IMAGE_DATA = "POST_IMAGE_DATA"


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