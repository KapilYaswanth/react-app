import React,{useState,useEffect} from 'react'

export default function Header({status,setStatus,title}) {
    const [time, setTime] = useState(new Date());
    const handleClick=()=>{
        console.log('clicked');
        setStatus(true);
        console.log(status);
    }
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date())
        },1000);
    });
    if(status===true)
           {
               throw new Error("It is an error");
           }
    return (
        
        <div className="header">
            <h4 style={{color:"white",textAlign:"center"}} onClick={handleClick}>It is {time.toLocaleTimeString()}</h4>
        <h1 >{title}</h1> 
        </div>
    )
}

