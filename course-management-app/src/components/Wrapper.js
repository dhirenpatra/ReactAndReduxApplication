import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { HomePage, AboutPage, Header, PageNotFound, CoursesPage} from '../components'

const Wrapper = () => {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default Wrapper
