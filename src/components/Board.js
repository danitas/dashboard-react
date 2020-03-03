import React from 'react';
import data from '../data';
import TaskColumn from './TaskColumn';




export const Board = () => {
    const sortedItems = {
        open: [],
        completed: []
    };

    data.map(item => {
        item.completed
            ? sortedItems.completed.push(item)
            : sortedItems.open.push(item);
    });

    return (
        <div>
            <h2>Backlog</h2>
            <div className="row">
                {Object.keys(sortedItems).map(item => (
                    <TaskColumn
                        items={sortedItems[item]}
                        key={item}
                        title={item}
                    />
                ))}
            </div>
        </div>
    );
};