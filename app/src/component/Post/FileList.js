import React,{useEffect, useState} from 'react'
import CodeEditor from './CodeEditor'

import DragAndDrop from './DragAndDrop'
function FileList() {
    const [fileinput,SetFiles] = useState({
        file:'',
        previewURL:''
   })
  
   useEffect(()=> {
      
   },[fileinput]) 
   const tempImage = new Image()
   const handleDrop = (files) => {
        let reader = new FileReader()
        reader.onloadend=() => {
            SetFiles({
                file:files[0],
                previewURL:reader.result
            })
            tempImage.src=reader.result
            tempImage.onload = function() {
                const canvas = document.createElement('canvas')
                var canvasContext = canvas.getContext('2d')
                canvas.width=100;
                canvas.height=100;
                canvasContext.drawImage(this,0,0,100,100)
                var dataURI = canvas.toDataURL("image/jpeg")
                document.querySelector('#thumbnail').src = dataURI;
            }
        }
        reader.readAsDataURL(files[0])
        console.log(fileinput)
   }
    return (
        <>
            <DragAndDrop handleDrop ={handleDrop}>
                <div style={{height: 300, width: 250}}>
                </div>
            </DragAndDrop>
            <CodeEditor/>
            <img id="thumbnail" src="" width="200" alt="썸네일영역 (클릭하면 다운로드 가능)"></img>
            
        </>
    )
}
export default FileList