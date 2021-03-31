import React from 'react';
import { v4 as autoId } from 'uuid';
import useLocalStorage from './useLocalStorage';


const TaskContext = React.createContext();

const TaskProvider = (props) => {
    const [taskList, setTaskList] = useLocalStorage('tasks', [
        {
            _id: autoId(),
            name: "Cook Food",
            status: 'todo'
        },
        {
            _id: autoId(),
            name: "Eat Food",
            status: 'todo'
        },
        {
            _id: autoId(),
            name: "Sleep",
            status: 'todo'
        }
    ])

    const addTodo = (newTask) => {
        if(!newTask?.trim()) return;
        const newTodo = {
            _id: autoId(),
            name: newTask,
            status: 'todo'
        };

        setTaskList(tasks => [...tasks, newTodo])
    }

    const deleteTask = (id) => {
        const updates = taskList.filter(task => task._id !== id);
        
        setTaskList(updates)
    }

    const markAsDone = (id) => {
        const updates = taskList.map(task => {
            if (task._id === id) {
                task.status = 'done'
            }
            return task
        })
        setTaskList(updates)
    }

    const markAsInprogress = (id) => {
        const updates = taskList.map(task => {
            if (task._id === id) {
                task.status = 'inprogress'
            }
            return task
        })
        setTaskList(updates)
    }

    const markAsTodo = (id) => {
        const updates = taskList.map(task => {
            if (task._id === id) {
                task.status = 'todo'
            }
            return task
        })
        setTaskList(updates)
    }
    
    const value = {
        taskList,
        addTodo,
        deleteTask,
        markAsDone,
        markAsInprogress,
        markAsTodo
    }

    return (
        <TaskContext.Provider value={value} {...props} />
    );
};

export const useTask = () => {
    const context = React.useContext(TaskContext);

    if (!context) {
        throw new Error(`TaskContext  is out of scope`);
    }
    return context
}

export default TaskProvider;