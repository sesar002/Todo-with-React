import React from 'react';
import Task from './Task';
import NewTask from './NewTask';
import {filters} from './Filters'
import './App.css';
import FIlterComponent from './FilterComponent';


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [
        {id: 1, text: 'operi suđe', completed: false, },
        {id: 2, text: 'odmori', completed: false, }
      ],
      maxId: 2,
      minInputLength: 3,
      filter: filters.ALL
    }
  }

  handleTaskAdd = (newTaskText) => {
    const newId = this.state.maxId + 1;
    const newTask = {id: newId, text: newTaskText, completed: false};

    const newTasksList = [newTask, ...this.state.tasks];
    this.setState({tasks: newTasksList, maxId: newId});
  }

  handleDelete = (taskId) => {
    const tasksCopy = [...this.state.tasks]
    const newList = tasksCopy.filter((task) => task.id !== taskId);

    this.setState({tasks: newList});
  }

  handleCompleteToggle = (taskId) => {
    const tasksCopy = [...this.state.tasks]
    const tasksToCompleteToggle = tasksCopy.filter((task) => task.id === taskId);
    if(tasksToCompleteToggle.length > 0 ){
      const task = tasksToCompleteToggle[0];
      if(task.completed){
        task.completed = false;
      }else {
        task.completed = true;
      }
      // task.completed = !task.completed

      this.setState({tasks: tasksCopy});
    }
  }

  setFilter = (filterToSet) =>{
    this.setState({filter: filterToSet})
  }

  getFilteredOnes = () => {
    switch(this.state.filter){
      case filters.COMPLETED:
        return this.state.tasks.filter(task => task.completed === true);
      case filters.NOT_COMPLETED:
        return this.state.tasks.filter(task => task.completed === false);
      default:
        return this.state.tasks
    }
  }
  
  render(){
    const filteredTasks = this.getFilteredOnes();

    return (
      <div className='container'>
        <h1 className='heading'>What To Do?</h1>
        <FIlterComponent setFilter={this.setFilter} filterProp={this.state.filter}/>
        <div className='todolist'>
          <NewTask minInputLength={this.state.minInputLength} onAdd={this.handleTaskAdd} />
          {filteredTasks.map((taskItem) => <Task 
                                                key={taskItem.id} 
                                                task={taskItem} 
                                                onDelete={this.handleDelete} 
                                                onCompleteToggle={this.handleCompleteToggle}
                                              />)}
        </div>
      </div>
    );
  }
}

