import React from 'react'
import {Link} from 'react-router-dom'
export default function nav() {
    return (
        <div>
            <nav>
                <h1>REACT PROJECTS</h1>
                 <ul className="nav-Links">
                  {/* <Link to="/home"><li>Home</li></Link>  */} 
                     <Link  to="/weather"><h1><li style={{color:'white'}}>WEATHER APP</li></h1></Link>
                    <Link to="/todoapp"><h1><li style={{color:'white'}}>TODO APP</li></h1></Link> 
                </ul> 
            </nav>
        </div>
    )
}
