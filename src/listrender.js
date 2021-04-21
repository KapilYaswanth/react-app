import React from 'react'
//import ReactDOM from 'react-dom'
import './index.css'
export default class Home extends React.Component{
    constructor()
    {
        super();
        this.state={data:0}
    }
    globalchange(e){
        this.setState({data:e.target.value})
    }
    render()
    {
        return (<div className="person"><h1>Lifting state</h1>
        <Child val={this.state.data} globalChange={this.globalchange.bind(this)}/>
        <Child val={this.state.data} globalChange={this.globalchange.bind(this)}/></div>);
    }
}
class Child extends React.Component{
    constructor()
    {
        super();
        this.state={}
    }
    render()
    {
        return (<div><input value={this.props.val} onChange={this.props.globalChange}/></div>);
    }
}
/*function Listrender(){
const personlist=[{name:"kapil",age:22},{name:"yaswanth",age:21}]
const personsmap=personlist.map(person => <div><h1>Hello I,m {person.name} and {person.age} years old</h1></div> );
return (<div>{personsmap}</div>);
}
export default Listrender;*/