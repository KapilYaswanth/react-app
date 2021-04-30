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
                <Route path="/" exact component={this.Home} />
                    <Route path="/weather-app" component={Weather} />
                    
                    <Route path="/to-do-app" component={Todoapp} />
                    
                    </Switch>
                    </div>
                    </Router>
                 
            </div>
        )
    }
   
    Home=()=>{
        return(<div className="home">
            <h1 style={{textAlign: "center"}}>React Projects</h1>
        <h4>Project 1: To-do App</h4>
        <h4>Technology used : React.js</h4>
        <h4>Tools : Vs Code and Git(version control)</h4>
        <h4>Description : </h4> 
        <p>In this user can enter the task he/she want to do and click add for displaying the tasks in the app and it will show done button once the user adds the task and user can click done after finishing that task and now that particular task will be removed from the app
        </p>
           <h4>Project 2: Weather App</h4>
        <h4>Technology used : React.js</h4>
        <h4>Tools : Vs Code and Git(version control)</h4>
        <h4>Description : </h4> <p>In this user can search for the place for which he/she needs the weather and hit weather button then the app will show the weather of that place. There are many API's available for weather and here I have used OpenWeather API for getting the weather data</p></div>);
    }
}
