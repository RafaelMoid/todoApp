import React from 'react';
import Task from "./Task"; //Sem isso nada será mapeado

//Essa é a div filha (Será renderizada por APP, logo App é a div Pai)
//Props passam dados entre divs pai e filha
//O que está entre Parenteses () logo abaixo são as props
//Usei destructure para exibis as taks que estão nas props
const Tasks = ({tasks, handleTaskClick}) => {
    //console.log(tasks) para printar todas as tasks
    return (
    <>
        {tasks.map((task) => (
        <Task task={task} handleTaskClick={handleTaskClick}/>
        ))}
    </>
    )}

export default Tasks;