import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ShowPost from '../Post/ShowPost'

function Home() {
    return (
        <>
            <Header />
            <ShowPost/>
            <Footer/>
        </>
    )
}
export default Home