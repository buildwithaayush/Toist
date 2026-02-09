"use client";
import { useState } from "react"


export default function Todoinput(){
    interface Todo {
        id: number,
        text: string,
        completed: boolean
    }
    const[text , setText ] = useState("");
    const [todo, setTodo] = useState<Todo[]>([]);

   

  

    const Todoload = () => {
        if(text.trim()==="") return;

        const newTodo: Todo = {
        id: Date.now(),
         text,
        completed: false
    }
        setTodo([...todo, newTodo])
        setText("")
    }

    const deletetodo = (idtodelete: number) => {
        const newTodos = todo.filter((item) => item.id !== idtodelete);
        setTodo(newTodos)
        
    }

    const toggleComplete = (idtotoggle: number ) =>{
        setTodo(
            todo.map((item) => item.id === idtotoggle ? {...item,completed: !item.completed} : item)
        )
    }
   return(<>
   <div>
    <input className="px-2 py-1 m-2 rounded-lg outline" type="text"  placeholder="Enter your todo" value={text} onChange={(e)=> setText(e.target.value)}/>
    <button className="p-1 m-2 rounded-lg outline" onClick={Todoload}>Add</button>
   
   </div>
    <ul className="m-2">
        {todo.map((item) => (<li key={item.id} className="p-2 flex items-center gap-2">
            <input type = "checkbox" 
            checked = {item.completed}
            onChange={() => {
                toggleComplete(item.id)
            }}/>

            <strong className={item.completed ? "line-through text-gray-400" : " "}>{item.text}</strong>

            <button className="p-1 m-2 outline rounded-lg" onClick={()=>{deletetodo(item.id)}}>delete</button>

        
        </li>))}

    </ul>
   </>)
}