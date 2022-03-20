import React from 'react';
import './CodeEditorPreview.scss'
var marked = require('marked');
marked.setOptions({
    headerPrefix: "header-"
});
function CodeEditorPreview ({mydata}) {
    var value = marked(mydata.body||'')
    
    return (
        <>
            
            <div className="preview" >
                <div  className="tab-pane result_preview active" 
                    dangerouslySetInnerHTML={{__html:value}} style={{maxWidth: '100%',
                        height: 'auto'}}></div>
            </div>
      
        </>
    )
}
export default CodeEditorPreview
