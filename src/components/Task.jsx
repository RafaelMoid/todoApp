import React from 'react';
import './Task.css'; // Estilização dos componentes que resão mapeados

//Usando função javascript no codigo html .map para trazer todos os dados do props
//Usando javascript podemos selecionar o campo que desejamos recolher a informação como na task do H!
const Task = ({ task }) => {
    return <div className="task-container">
        {task.title}
    </div>;
    };
 
export default Task;