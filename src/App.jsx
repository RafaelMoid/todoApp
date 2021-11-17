import React, { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {v4 as uuidv4} from 'uuid'; //Biblioteca para gerar ID
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
    },
    {
      id: '3',
      title: 'Amar amor',
      completed: false,
    }
  ]);

  //Função para alterar o estado de completo da Task
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task =>{
      if (task.id === taskId) return {... task, completed: !task.completed};

      return task;
    });

    setTasks(newTasks)
  };

  //Aqui vamos criar uma const para lidar com a adição de tarefas 
  const handleTaskAddition = (taskTitle) => {
      const newTasks = [
        ... tasks, 
        {
          title: taskTitle,
          id: uuidv4(), //Aqui está gerando id
          completed: false,
        },
      ];
  
    setTasks(newTasks);
  };
//Aqui termina o taskAddition
//Criando a função para deletar task que será chamada nos botões
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  //Quando usamos Chaves {} dentro do codigo HTML no JSX podemos usar JS no HTML, ai que tá a magica
  //Observe que varias funções estão sendo passadas como props em tasks, dessa forma podemos mandar
  //uma função JS para os filhos desse arquivo
  return (
  <div>
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks 
          tasks={tasks} 
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
          />
    </div>  
  </div>
  )
} ;
export default App;
