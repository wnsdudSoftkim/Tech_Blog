import React, {Component} from 'react'
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
const CodeMirror = require("codemirror")
class CodeEditor extends Component {
    initialize = () => {
        this.coeMirror = CodeMirror(this.editor,{
            mode:'markdown',
            theme:'default',
            linenumbers:true,
            lineWrapping:true,
            scrollbarStyle:'overlay',
            placeholder:'글을 적어보세요',
           
        })
    }
    editor.on()
    componentDidUpdate() {

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

