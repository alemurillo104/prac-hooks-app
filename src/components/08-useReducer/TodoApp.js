import React, { useEffect, useReducer } from 'react' 
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => { 

   const [ todos, dispatch ] = useReducer(todoReducer, [], init);


   useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
   }, [todos]);


    const handleDelete = (e, todoId) => {
        e.preventDefault();

        //action
        const action = {
            type: 'delete',
            payload: todoId
        };

        //dispatch
        dispatch( action );
    };

    const handleToggle = ( todoId ) => {

        const action = {
            type: 'toggle',
            payload: todoId
        };

        dispatch( action);
    }
    
    const handleAdd = ( newTodo ) => {
        const action = {
            type: 'add',
            payload: newTodo
        };
    
        dispatch( action );
    }

   return ( 
       <div> 
          <h1> TodoApp ( { todos.length } )</h1> 
          <hr /> 

            
          <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />    
              </div>
              <div className="col-5">

                    <TodoAdd 
                        handleAdd={handleAdd}
                    />

              </div>
          </div>
       </div> 
   ); 
} 
