import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from '../component/Home'
import Introduce from '../component/introduce/introduce'
import SignUp from '../component/Signup'
import SignIn from '../component/Signin'
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Introduce" component={Introduce}/>
                <Route path="/SignUp" component={SignUp} />
                <Route path="/SignIn" component={SignIn} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router