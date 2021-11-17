import React from 'react';
import './Task.css'; // Estilização dos componentes que resão mapeados
import {CgClose} from "react-icons/cg";

//Usando função javascript no codigo html .map para trazer todos os dados do props
//Usando javascript podemos selecionar o campo que desejamos recolher a informação como na task do H!
const Task = ({ task, handleTaskClick,handleTaskDeletion }) => {
   return (
       <div 
       className="task-container" 
       style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}} 
       >
           <div className="task-title" onClick={()=> handleTaskClick(task.id)}>
               {task.title}
            </div>

            <div className="buttons-container">
                <button 
                    className="remove-task-button" 
                    onClick={()=> handleTaskDeletion(task.id)}
                    >
                        <CgClose/>
                </button>
            </div>
       </div>
   );
};
   
 
export default Task;