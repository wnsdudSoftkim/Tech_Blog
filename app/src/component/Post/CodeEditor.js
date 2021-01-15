import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css';
import styled from 'styled-components'
const code = 'const a =0;'
function CodeEditor() {
    const CodeEditorBlock = styled.div`
        width:100%;
        height:30rem;
    `
    const editor = document.getElementById("editor")
    var myCodeMirror = CodeMirror(editor,{
        value:"aaa",
        mode:'markdown',
        lineNumbers: false, // 좌측에 라인넘버 띄우기
        lineWrapping: true, // 내용이 너무 길면 다음 줄에 작성
        
        placeholder: '당신의 이야기를 적어보세요...',
        theme: 'material',
      
    })
    window.CodeMirror = myCodeMirror
   
    return (
        <>
            <div id="editor" className="editor">

            </div>
           
           

        </>
    )
}
export default CodeEditor