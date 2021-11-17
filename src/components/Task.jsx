import React from 'react';
import './Task.css'; // Estilização dos componentes que resão mapeados

//Usando função javascript no codigo html .map para trazer todos os dados do props
//Usando javascript podemos selecionar o campo que desejamos recolher a informação como na task do H!
const Task = ({ task, handleTaskClick }) => {
   return (
       <div 
       className="task-container" 
       style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}} 
       >
           <div className="task-title" onClick={()=> handleTaskClick(task.id)}>
               {task.title}
            </div>

            <div className="buttons-container">
                <button className="remove-task-button">X</button>
            </div>
       </div>
   );
};
   
 
export default Task;