import React, { useEffect}from 'react'
import {useDispatch} from 'react-redux'
import {EditBody} from '../../store/action/index'
import './CodeEditor.scss'
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/display/placeholder';
//mode
import 'codemirror/mode/shell/shell'
import 'codemirror/mode/python/python'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/go/go'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/css/css'
import 'codemirror/mode/swift/swift'
import 'codemirror/mode/ruby/ruby'
//theme
import 'codemirror/theme/monokai.css';
//action
const CodeMirror = require("codemirror")

function CodeEditor() {
   
    const state ={
        cursor:"",
        body:""
    }
    const dispatch = useDispatch()
    
    useEffect(()=> {
        const editor = document.getElementById("editor")
        const codeMirror = CodeMirror(editor,{
            mode:'markdown',
            theme:'default',
            dragDrop:true,
            linenumbers:true,
            lineWrapping:true,
            scrollbarStyle:'overlay',
            placeholder:'마크다운 형식으로 작성됩니다.',
        
        })
                
        codeMirror.on('change',onChange)
        codeMirror.on('drop',function(data,e) {
            var file;
            var files;
            // Check if files were dropped
            files = e.dataTransfer.files;
            if (files.length > 0) {
                e.preventDefault();
                e.stopPropagation();
                file = files[0];
                alert('File: ' + file.name);
                return false;
            }
          
        })

    },[])
    // useEffect(()=> {
    //     // EditBody(value["cursor"],value["body"]).then(function(result){
    //     //     dispatch(result)
    //     // })
    //     dispatch(EditBody(value["cursor"],value["body"]))
       
    //     console.log(mydata)
    // },[value])
   
        
  
   
    

    const onChange = (doc) => {
        
        state.cursor = doc.getCursor()
        state.body = doc.getValue()
        // EditBody(state.cursor,state.body).then(function(result){
        //     dispatch(result)
        // })
        dispatch(EditBody(state.cursor,state.body))  
   
   
    
        
      
    }
    
    
   
    return (
        <>
            <div className="CodeEditor">
                <div className="editor" id="editor"  >
                
                </div>
            </div>
        </>

        
        
    )
    
}

export default CodeEditor

