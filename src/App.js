import React, { Component } from 'react'
import Weather from './components/weather'
import Todoapp from './components/todoapp'
import Nav from './components/nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class App extends Component {
    render() {
        return (
            <div>
                
                <Router>
                    <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/weather" component={Weather} />
                    
                    <Route path="/todoapp" component={Todoapp} />
                    
                    </Switch>
                    </div>
                    </Router>
                 
            </div>
        )
    }
}
