import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
const Login = lazy(() => import('../views/Mine/Login'))
const Home = lazy(() => import('../views/Home/index'))
const NotFound = lazy(() => import('../views/NotFound'))
export default function index() {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>...加载中</div>}>
                    <Switch>
                        <Route path={'/'} component={Login} exact={true} />
                        <Route path={'/home'} component={Home}/>
                        <Route path={'/404'} component={NotFound}/>
                        <Redirect path='*' to={'/404'} />
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}
