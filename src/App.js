import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { addNewTask, setData } from './redux/actions';

import Board from './components/Board';

//reducers
const mapStateToProps = ({ task, taskList }) => ({
    task,
    taskList
});

//actions
const mapDispatchToProps = { addNewTask, setData };

const App = ({ setData, ...rest}) => {
    useEffect(() => {
        setData();
    }, []);

    return (
    <div className="container">
      <h1>Home</h1>
        <Board {...rest} />
    </div>
  );
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
