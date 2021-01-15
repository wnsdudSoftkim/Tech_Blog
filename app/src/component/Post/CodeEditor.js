import React, {Component} from 'react'
import './CodeEditor.scss'
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/theme/monokai.css';
const CodeMirror = require("codemirror")
class CodeEditor extends Component {
    initialize = () => {
        this.coeMirror = CodeMirror(this.editor,{
            mode:'markdown',
            theme:'monokai',
            linenumbers:true,
            lineWrapping:true,
        })
    }
    componentDidMount() {
        this.initialize()
    }
    render() {
        return (
            <div className="CodeEditor">
                <div className="editor" ref={(ref)=> this.editor = ref}>

                </div>
            </div>
        )
    }
}
export default CodeEditor

