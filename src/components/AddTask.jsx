import React, { useState } from 'react';
import Button from "./Button";
import "./AddTask.css";


const AddTask = () => {

    //Criando state para salvar dados, Pode ser usado para as notas
    const [inputData, setInputData] = useState('');

    //Essa consta vai ser responsavel por setar o valor do inputData, usando o state e o onChange
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

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
            <Button>Adicionar</Button>
        </div>
    </div>
        )
}
 
export default AddTask;