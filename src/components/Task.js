import React from 'react';

//Usando função javascript no codigo html .map para trazer todos os dados do props
//Usando javascript podemos selecionar o campo que desejamos recolher a informação como na task do H!
const Task = ({ task }) => {
    return <h1>{task.title}</h1>
    }
 
export default Task;