
import React from 'react';
import { useDrag } from 'react-dnd';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTask } from '../utils/task-context';

const TaskItem = ({ _id, name }) => {
    const { deleteTask } = useTask()
    const [ , drag] = useDrag(() => ({
        type:  "task",
        item: {
            id: _id
        },
    }))
    

    return (
        <li
            ref={drag}
            className="border bg-light m-2 p-3 d-flex justify-content-between align-items-center"
        >
            <span>{name}</span>
            <RiDeleteBin6Line onClick={() => deleteTask(_id)} />
        </li>
    );
};

export default TaskItem;