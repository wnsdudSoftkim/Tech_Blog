import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from '../component/Home'
import Introduce from '../component/introduce/introduce'
import SignUp from '../component/Signup'
import SignIn from '../component/Signin'
import AddPost from '../component/Post/AddPost'
import PostPage from '../component/Post/PostPage'
import ScrollToTop from '../component/ScrollToTop'
import GuestBook from '../component/guest/GuestBook'

function Router() {
    return (
        <BrowserRouter>
            <Switch >
                <ScrollToTop>
                    <Route exact path="/" component={Home} />
                    <Route path="/Introduce" component={Introduce}/>
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/AddPost" component={AddPost}/>
                    <Route path="/PostPage" component={PostPage}/>
                    <Route path="/GuestBook" component={GuestBook}/>
                </ScrollToTop>
                
            </Switch>
        </BrowserRouter>
    )
}
export default Router