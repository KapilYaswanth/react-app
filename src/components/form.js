import React, { useEffect } from 'react'
//import { render } from '@testing-library/react';
//import React from 'react';
//import {v4 as uuidV4} from "uuid";
const Form=({input,setInputs,todo,setTodo})=> {
    const onInputChange=(e)=>{
    setInputs(e.target.value);
    }
    const formOnSubmit=(e)=>{
        e.preventDefault();
        setTodo([...todo,{name:input}]);
        //alert(inputRef.current.value);
        console.log();
        setInputs("");
    }
    const inputRef=React.createRef();
   useEffect(()=>{
       inputRef.current.focus()
   });
    return (
        <div>
            <form onSubmit={formOnSubmit}>
                <input className="task-inputs" type="text" ref={inputRef} placeholder="Enter the item" value={input} required onChange={onInputChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="button-adds" type="submit">Add</button>
            </form>
        </div>
    )
}
export default Form;
