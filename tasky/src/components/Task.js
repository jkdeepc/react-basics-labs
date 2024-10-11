import React from 'react';

    
    const Task = (props) => {
        const priorityClass = props.priority === 'high' ? 'high' : props.priority === 'medium' ? 'medium' : 'low';
        return (
            <div className={`card ${priorityClass}`}  style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
                <p className="title">{props.title}</p>
                <p>Due: {props.deadline}</p>
                <p className="content">{props.description}</p>
                <p>Priority: {props.priority.charAt(0).toUpperCase() + props.priority.slice(1)}</p>
                <button onClick={props.markDone} className='doneButton'>Done</button>
                <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
            </div>
            
        )
    }


export default Task;