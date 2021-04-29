import React from 'react'

export default function TodoList({todos,setTodos}) {
    const handleDelete=(index)=>{
        const a=[...todos];
        a.splice(index,1);
        setTodos(a);
    }
    return (
        <div>{
            todos.map((value,index) => (
                 <li className="list-item" key={index}>
                     <input  className="list" value={value.name} onChange={(e)=>{e.preventDefault()}} />
                     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <button className="button-deleted" onClick={()=>handleDelete(index)}>
                Done
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
                 </li>
    ))}
        </div>
        
    );
}
