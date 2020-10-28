import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from '../component/Home'
import Introduce from '../component/introduce/introduce'
import SignUp from '../component/Signup'
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Introduce" component={Introduce}/>
                <Route path="/SignUp" component={SignUp} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router