import React,{useState}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Home from './listrender';
import Forms from './forms';
//import Listrender from './listrender' 
class Header extends React.Component{
  render(){
    return(<div><header className="head"><p>This is a header</p>
    </header></div>);
  }
}
class Footer extends React.Component{
  render(){
    return(<footer className="foot">This is a footer</footer>);
  }
}
const Person=props=>{
  const [states, setstate] = useState({
    persons:[{name :"Login",message:"You're logged out",isLoggedIn:false,clicked:0,myname:""},
  ]
  });
  


const fun=()=>{
  var a=states.persons[0].isLoggedIn;
  if(a === false)
  {
  setstate({persons:[{name:"Logout",message:"You are logged in",isLoggedIn:!(a),clicked:states.persons[0].clicked+1}
  ]});
}
  else{
    setstate({persons:[{name:"Login",message:"You're logged out",isLoggedIn:!(a),clicked:states.persons[0].clicked+1}
  ]});

  }
}
const eventchanger=(event)=>{
  setstate({persons:[{name:states.persons[0].name,message:states.persons[0].message,isLoggedIn:states.persons[0].isLoggedIn,clicked:states.persons[0].clicked,myname:(event.target.value*9/5)+32}]});
}
return (
  <div className="person"> 
  {/*<button
          type="button"
          onClick={fun}
  >Check</button>*/}
    <App name={states.persons[0].name} message={states.persons[0].message} myname={states.persons[0].myname} isLoggedIn={states.persons[0].isLoggedIn} changed={eventchanger} clicked={states.persons[0].clicked} click={fun}></App>
    
    {/*<App name={states.persons[0].name} message={states.persons[0].message} click={fun}></App>*/}
    
  </div>
);
}
/*class Person extends React.Component
{
  state={
    persons:[{name :"Raja",age:"20"},
    {name :"Rahul",age:"30"}]
  }
  fun=()=>{
    this.setState({persons:[{name:"Kumar",age:"20"},
    {name:"Mohan",age:"12"}
  ]});
  }
  render(){
  return (
  <div className="person"> 
    {/*<h1>{this.props.name}</h1>
    <p>I'm {this.props.age} years old</p>
  <p>{this.props.children}</p>*//*}
  <button
          type="button"
          onClick={this.fun}
        >Change color</button>
    <App name={this.state.persons[0].name} age={this.state.persons[0].age}></App>
    <App name={this.state.persons[1].name} age={this.state.persons[1].age}></App>
    
  </div>
  );
}
}*/
var app=(
<div >
  <Header/>
  {/*<Person name="Bala" age="25">Hii</Person>
  <Person name="Franklin" age="28" />*/}
  <Person />
  {/*<Listrender />*/}
  <Home />
  <Forms />
  <Footer/>
</div>
);

ReactDOM.render(app,document.getElementById("root"));

/*function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Greeting(props) {
  if (props.isLoggedIn) {    return <h1>Welcome back!</h1>;  }  
  return <h1>Please sign up.</h1>;}
/*ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,  document.getElementById('root'));


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  
  render() {
    let button;
    if (this.state.isLoggedIn) {      
      button=<LogoutButton onClick={this.handleLogoutClick} />;   
     } else {  
          button= <LoginButton onClick={this.handleLoginClick} />;  
            }
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />        {button}      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);*/