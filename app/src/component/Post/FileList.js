import React,{useEffect, useState} from 'react'
import DragAndDrop from './DragAndDrop'
function FileList() {
    const [fileinput,SetFiles] = useState({
        files:[
            
        ]
   })
   useEffect(()=> {

   },[fileinput.files])

   const handleDrop = (files) => {
       console.log(files)
       let fileList = fileinput.files
       for(var i=0; i<files.length; i++){
           if(!files[i].name) return
           fileList.push(files[i].name)
           console.log(fileList)
           const imageurl = window.URL.createObjectURL(new Blob(fileList[0],{type: "application/zip"}))
           console.log(imageurl)
       }
       SetFiles(
           ...files,
           fileList
       )
   }
    return (
        <>
            <DragAndDrop handleDrop ={handleDrop}>
                <div style={{height:100,width:250}}>
                    {fileinput.files}
                </div>
            </DragAndDrop>
        </>
    )
}
export default FileList