import React from 'react';
import data from '../data';
import TaskColumn from './TaskColumn';

const Board = ({ task, ...rest }) => {
    const sortedItems = {
        open: [],
        inprogress: [],
        completed: [],
        onhold: []
    };

    data.map(item => {
        if (item.completed) {
            return sortedItems.completed.push(item);
        }
        return sortedItems.open.push(item);
    });

    if(Object.keys(task).length) {
        sortedItems.open.push(task);
    }

    return (
        <div>
            <h2>Backlog</h2>
            <div className="row">
                {Object.keys(sortedItems).map(item => (
                    <TaskColumn
                        items={sortedItems[item]}
                        key={item}
                        title={item}
                        {...rest}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;