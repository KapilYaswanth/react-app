import React from 'react'
import {Link} from 'react-router-dom'
export default function nav() {
    return (
        <div>
            <nav>
                <Link to="/"><h1 style={{color:'white'}}>REACT PROJECTS</h1></Link>
                 <ul className="nav-Links">
                 <Link to="/to-do-app"><h1><li style={{color:'white'}}>TODO APP</li></h1></Link> 
                     <Link  to="/weather-app"><h1><li style={{color:'white'}}>WEATHER APP</li></h1></Link>
                    
                </ul> 
            </nav>
        </div>
    )
}
