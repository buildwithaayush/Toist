'use client'
import { useState } from "react";

export default function Todoinput(){
    const [text , setText ] = useState("");
    const [todos, setTodos] = useState<Todo[]>([])
    const [completed,setCompleted] = useState(false)
    type Todo = {
        text: string,
       
    }

    return(<>
    <div className="flex gap-2 items-center">
    
        <input type="text" placeholder="write your task "  value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={()=>{
            if (!text.trim()) return;
            setText("")
            setTodos([...todos,{text}])
        }}>Add</button>

    </div>
    <div className="flex items-center">
        <input type="checkbox" checked={completed} 
        onChange={()=>setCompleted(!completed)}/>
        {todos.map((todo,index)=> (<div key={index}>{todo.text}</div>))}
    </div>

    </>)
}