import React from 'react'
import HeaderSmall from '../HeaderSmall'
import './GuestBook.scss'
function GuestBook() {
    return (

        <>
            <HeaderSmall/>
            <div className="guest-container">
                <div className="guest-header">
                    <h1 className="guest-h1">
                        자유롭게 이야기를 나누는 공간입니다
                    </h1>
                </div>
                <div className="guest-body">
                    <div className="guest-body-box">

                    </div>
                </div>
            </div>
        </>
    )
}
export default GuestBook