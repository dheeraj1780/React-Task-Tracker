import React from 'react'
import { useState } from 'react'
import Tasks from './components/Tasks'
import Header from './components/Header'

function App() {
// eslint-disable-next-line
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text:'doctor appointment',
    day: ' friday 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text:'house renovation',
    day: ' wednesday 11th at 2:30pm',
    reminder: true,
  },
  {
    id: 3,
    text:'gardening',
    day: ' saturday 5th at 5:30am',
    reminder: true,
  }])


  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  //toggle reminder
  const toggleRemainder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder } : task))
  }


  return (
    
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleRemainder}
        />
        
      ):(
        'No Tasks to show'
        )}
    </div>
  )
}

export default App
