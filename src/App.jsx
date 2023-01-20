import { useState } from 'react'
import './App.css'
import Ajouter from './components/Ajouter';
import Task from './components/Task';
import {v4} from 'uuid'


function App() {
  const [tasks,settasks] = useState([
    {id: v4(), task: 'Sport', done: false},
    {id: v4(), task: 'Manger', done: true},
    {id: v4(), task: 'Coder', done: false}
  ]);
  const [task,settask] = useState("");
  function ajt(){
    let id = v4();
    let ntasks = [...tasks,{id:id,task:task,done:false}];
    settasks(ntasks);
  }

  function supp(id){
    let ntasks = tasks.filter((task)=>task.id !== id);
    settasks(ntasks);
  }
  
  function cdone(id){
    settasks(tasks.map((task)=>{
      if (task.id === id) {
        task.done = !task.done
      } 
      return task
    }));
  }
  return (
    <div className="App">
      <center>

        <Ajouter ajt={ajt} settask={settask} task={task} />
        <ul>
          {tasks.map((e)=><li className={e.done ? "done" : ""}  key={e.id}><Task t={e} supp={supp} cdone={cdone}/></li>)}
        </ul>
      </center>
    </div>
  )
}

export default App
