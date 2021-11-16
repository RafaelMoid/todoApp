import React, { useState } from "react";
import Tasks from "./components/Tasks";
import './App.css';

const App = () => {
  //O useState é a propriedade que permite alterar dados estaticos inseridos
  //dentro de uma página HTML, criamos uma variavel com 2 parametros
  //o primeiro para receber o valor e o segundo para setar o valor
  //Seguido de uma função com o valor inicial
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: true,
    },
    {
      id: '2',
      title: 'Jogar Botw',
      completed: false,
    }
  ]);

  //Quando usamos Chaves {} dentro do codigo HTML no JSX podemos usar JS no HTML, ai que tá a magica
  return (
  <div>
    <div className="container">
      <Tasks tasks={tasks}/>
    </div>  
  </div>
  )
} ;
export default App;
