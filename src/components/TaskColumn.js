import React from 'react';
import TaskItem from './TaskItem';

const TaskColumn = ({title, items, elementRef, isOver}) => {
    
    return (
        <div  className="col-md-4" ref={elementRef}>
            <div 
            style={{backgroundColor: isOver ? '#20c99711' : ''}} 
            className="card" >
                <div className="card-header">
                    {title} ({items.length || 0})
                </div>
                <ul className="list-unstyled p-3" style={{minHeight:'63vh'}}>
                    {
                        items.map(item => (<TaskItem key={item._id} {...item} />))
                    }
                </ul>
            </div>
        </div>
    );
};

export default TaskColumn;