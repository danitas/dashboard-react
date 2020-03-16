import React from 'react';
import TaskColumn from './TaskColumn';

const Board = ({ taskList, task, ...rest }) => {
    return (
        <div>
            <h2>Backlog</h2>
            <div className="row">
                {Object.keys(taskList).map(item => (
                    <TaskColumn
                        items={taskList[item]}
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