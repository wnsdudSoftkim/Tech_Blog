import React from 'react'
import styled from 'styled-components'

function PostModal() {
    const dimLayoutBlock = styled.div`
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 410px;
        height: 410px;
        z-index: 100;
        .pop-container {
            padding: 20px 25px;
        }
        .pop-layer{

        }
        .ctxt {
            color: #666;
            line-height: 25px;
        }
        .dimBg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: .5;
            filter: alpha(opacity=50);
        }
        .btn-layerClose {
            display: inline-block;
            height: 25px;
            padding: 0 14px 0;
            border: 1px solid #304a8a;
            background-color: #3f5a9d;
            font-size: 13px;
            color: #fff;
            line-height: 25px;
        }
        .btn-layerClose:hover {
            border: 1px solid #091940;
            background-color: #1f326a;
            color: #fff;
        }
    
    `
    return (
        <> 
            <dimLayoutBlock>
                <div className="dimBg"></div>
                <div className="pop-layer">
                    <div className="pop-container">
                        <div className="pop-conts">
                        
                            <p className="ctxt mb20">Thank you.<br/>
                                Your registration was submitted successfully.<br/>
                                Selected invitees will be notified by e-mail on JANUARY 24th.<br/><br/>
                                Hope to see you soon!
                            </p>

                            <div className="btn-r">
                                <a href="#" className="btn-layerClose">Close</a>
                            </div> 
                        </div>
                    </div>
                </div>
            </dimLayoutBlock>
        
        </>
    )
}
export default PostModal