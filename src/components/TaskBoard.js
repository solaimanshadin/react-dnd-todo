import React from 'react';
import TaskColumn from './TaskColumn';
import { useDrop } from 'react-dnd';
import { useTask } from '../utils/task-context';

const TaskBoard = () => {
    const { taskList, markAsDone, markAsInprogress, markAsTodo,  } = useTask();

    const [{ isOver: isInprogressOver }, inprogressRef] = useDrop({
        accept: 'task',
        drop: (item) => markAsInprogress(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver: isDoneOver }, doneRef] = useDrop({
        accept: 'task',
        drop: (item) => markAsDone(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver: isTodoOver }, todoRef] = useDrop({
        accept: 'task',
        drop: (item) => markAsTodo(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    return (
        <div className="container my-5">
            <div className="row">
                <TaskColumn
                    elementRef={todoRef}
                    isOver={isTodoOver}
                    items={taskList.filter(task => task.status === 'todo')}
                    title="Todo"
                />
                <TaskColumn
                    elementRef={inprogressRef}
                    isOver={isInprogressOver}
                    items={taskList.filter(task => task.status === 'inprogress')}
                    title="Inprogress"
                />
                <TaskColumn
                    elementRef={doneRef}
                    isOver={isDoneOver}
                    items={taskList.filter(task => task.status === 'done')}
                    title="Done"
                />
            </div>
        </div>

    );
};

export default TaskBoard;