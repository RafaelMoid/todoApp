import React, { useState } from 'react';
import Button from "./Button";
import "./AddTask.css";

//handleTaskAddition está vindo do App.jsx e é responsavel por trazer o valor do input
const AddTask = ({handleTaskAddition}) => {

    //Criando state para salvar dados, Pode ser usado para as notas
    const [inputData, setInputData] = useState('');

    //Essa consta vai ser responsavel por setar o valor do inputData, usando o state e o onChange
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    //Essa const vai fazer o envio dos dados para o handleTaskAddition que por sua vez vai para o App.js
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    };
    
    //Na Div add-task-container podemos ver o uso do onChange
    return (
    <div className="add-task-container">
        <input 
            onChange={handleInputChange}
            className="add-task-input"
            value={inputData}
            type="text" 
           
        />
        ;
        <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
    </div>
        )
}
 
export default AddTask;