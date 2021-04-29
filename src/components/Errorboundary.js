import React, { Component } from 'react';
class Errorboundary extends Component {
    constructor(props){
        super(props);
        this.state={hasError:false,date: new Date()}
    }
    static getDerivedStateFromError(error)
    {
        return {
            hasError:true
        }
    }
    componentDidMount() {
       this.time= setInterval(
          ()=>{
            this.setState({
          date: new Date()
        });},
          1000
        );
    }
    componentWillUnmount(){
    clearInterval(this.time);
    }
    render() {
        if(this.state.hasError)
        {
          return <div style={{color:"white",alignItems:"center",alignContent:"center",align:"center"}}><h1>Something went wrong</h1>
        <br /><br /><h2>It is {this.state.date.toLocaleTimeString()}</h2></div>
        }

        return this.props.children;
    }
}
export default Errorboundary;