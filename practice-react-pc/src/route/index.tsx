import React, {lazy, Suspense} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

let login = lazy(() => import('../pages/Mine/Login'))
let home = lazy(() => import('../pages/Home'))
let NotFound = lazy(() => import('../pages/NotFound'))

function Index(props: any) {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>...加载中</div>}>
                    <Switch>
                        <Route path={'/'} component={login} exact={true}/>
                        <Route path={'/home'} component={home}/>
                        <Route path={'/404'} component={NotFound}/>
                        <Redirect to={'/404'} path={'*'}/>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default Index;