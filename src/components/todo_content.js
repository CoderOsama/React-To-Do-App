import React, { Component } from "react";

class todo extends Component{

    state = {
        tasks: [],
        todoInput: "",
    };

    componentDidMount(){
        let tasks = [...this.state.tasks];
        for (let i = 0; i < localStorage.length; i++){  
            let key = localStorage.key(i);  
            let completeState = localStorage.getItem(key).slice(0, localStorage.getItem(key).indexOf("__"));
            if(completeState === "false"){
                completeState = false;
            } else{
                completeState = true;
            }
            tasks.push({
                taskName: localStorage.key(i),
                taskCompleted: completeState
            });
        };
        this.setState({
            tasks: tasks
        });
    }
    

    handleInputChange = (e) => {
        this.setState({
            todoInput: e.target.value
        })
    }

    add = (e) => {
        e.preventDefault();
        let tasks = [...this.state.tasks];
        let exists = false;
        tasks.map(task=>{
            if(task.taskName === this.state.todoInput){
                exists = true;
            }
        });
        if(this.state.todoInput.length){
            if(exists === false){
                tasks.push({
                    taskName: this.state.todoInput,
                    taskCompleted: false
                });
                this.setState({
                    todoInput: "",
                    tasks: tasks
                });
            }
        }
        //! Add To Local Storage
        localStorage.setItem(this.state.todoInput, `false__${this.state.todoInput}`);
    }

    remove = (index) => {
        let tasks = [...this.state.tasks];
        //! Remove From Local Storage
        localStorage.removeItem(tasks[index].taskName);
        tasks.splice(index, 1);
        this.setState({
            tasks: tasks
        });
        
    }

    toggleCompleted = (index) => {
        let tasks = [...this.state.tasks];
        tasks[index].taskCompleted = !tasks[index].taskCompleted;
        //! Update On Local Storage
        localStorage.setItem(tasks[index].taskName, `${tasks[index].taskCompleted}__${tasks[index].taskName}`);
        this.setState({
            tasks: tasks
        });
    }

    
    render(){
        return(
            <div className="todo_content">
                <ul>
                    {this.state.tasks.map((task, index)=>{
                        return(
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    id={`check${index}`}
                                    defaultChecked={task.taskCompleted}
                                />
                                <label
                                    onClick={()=>this.toggleCompleted(index)}
                                    className={task.taskCompleted ?'complete' :''}
                                    htmlFor={`check${index}`}>
                                    {task.taskName}
                                </label>
                                <div
                                    className="remove"
                                    onClick={()=>this.remove(index)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                                </div>
                            </li>
                        )                            
                    })}
                </ul>
                <div className="add">
                    <div className="add_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="35px" height="35px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                    </div>
                    <form className="new_task" onSubmit={this.add}>
                        <input
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Add a task"
                            value={this.state.todoInput}
                        />
                        <div className="add_btn" onClick={this.add}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="30px" height="30px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default todo;