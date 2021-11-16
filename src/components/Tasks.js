import React from 'react';

//Essa é a div filha (Será renderizada por APP, logo App é a div Pai)
//Props passam dados entre divs pai e filha
//O que está entre Parenteses () logo abaixo são as props
//Usei destructure para exibis as taks que estão nas props
const Tasks = ({tasks}) => {
    //console.log(tasks) para printar todas as tasks
    return <h1>Tasks</h1>
}

export default Tasks;