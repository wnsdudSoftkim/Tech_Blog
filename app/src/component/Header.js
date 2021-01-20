import React,{useState} from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
function Header() {
    // const [Toggle,SetToggle] = useState(false)
    // const onToggle =() => {
    //     return (
    //         SetToggle(!Toggle)
    //     )
    // }
    // let Mdkey = null
    // if(Toggle) {
	// 	Mdkey = <div>{<MdKeyboardArrowDown size="30"></MdKeyboardArrowDown>}</div>

	// }else {
	// 	Mdkey =<div>{<MdKeyboardArrowUp size = "30"></MdKeyboardArrowUp>}</div>
    // }
    const GoHome=()=> {
        return(
            <Link to="/"></Link>
        )
    }
    // const HeaderBlock = styled.div`
    //     position:relative;
    //     width:100%;
    //     height:65px;
    //     background:white;
    //     display:flex;
    //     justify-content:space-between;
    //     align-items:center;
    //     cursor:pointer;
    //     font-family:NeoDunggeunmo;
    //     @media(max-width:768px) {
    //         display:none;
    //     }
    // `
    // const LeftMenu = styled.div`
    //     display:flex;
    //     align-items:center;
    //     justify-content:center;
    //     .Left {
    //         margin-right:20px;
    //     }
    //     .Left1 {
    //         margin-left:20px;
    //     }
    //     .Left2{
    //         width:70px;
    //         display:flex;
    //         justify-content:center;
    //         align-items:center;
    //         flex-direction:row;
    //         cursor:pointer;
    //     }
    //     .MenuText{
    //         font-size:20px;
    //         color:#1a1a1a;
    //         font-weight:bold;

    //     }
    //     .LoGo{
    //         margin-top:5px;

    //     }


    // `
    // const RightMenu = styled.div`
    //     display:flex;
    //     align-items:center;
    //     justify-content:center;
    //     .MenuText{
    //         font-size:18px;
    //         color:#1a1a1a;
    //         font-weight:bold;

    //     }
    //     .Right{
    //         margin-right:10px
    //     }
    // `
    // const MediaBlock = styled.div`
    //     display:none;
    //     @media(max-width:768px){
    //         display:flex;
    //         position:relative;
    //         justify-content:flex-start;
    //         align-items:center;
    //         background:white;
    //         height:56px;
    //         cursor:pointer;
    //         font-family:NeoDunggeunmo;
    //     }
    //     @media(max-width:400px){
    //         width:384px;
    //     }
    //     .Logo {
    //         cursor:pointer;
    //         margin-left:20px;
    //         margin-right:10px;

    //     }
    //     .Title{
    //         margin 0 auto;

    //     }
    //     .TitleText{
    //         font-size:24px;
    //         font-weight:bold;
    //     }
    // `

    





    return(
        <>
            <header className="header">
                
                <div className="inner-header">
                    <div className="site-header-content">
                        <h1 className="site-title">
                            Jun_0 Blog
                        </h1>
                    </div>
                </div>
                <nav className="site-nav">
                    <ul className="nav">
                        <li className="nav-home">
                            <Link to="/" className="Link">
                                HOME
                            </Link>
                            
                        </li>
                        <li className="nav-home">
                            <Link to="/addpost"  className="Link">
                                POSTS
                            </Link>
                           
                        </li>
                        <li className="nav-home">
                            <Link to="/"  className="Link">
                                GUEST BOOK
                            </Link>
                            
                        </li>
                        <li className="nav-home">
                            <Link to="/introduce"  className="Link">
                                ABOUT
                            </Link>
                            
                        </li>
                       
                    </ul>
                </nav>

            </header>
            
            
        </>

    )
}
export default Header