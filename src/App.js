import React from 'react';
import { connect } from 'react-redux';

import { addNewTask } from './redux/actions';

import Board from './components/Board';

//reducers
const mapStateToProps = ({ task }) => ({
    task
});

//actions
const mapDispatchToProps = { addNewTask };

const App = ({ ...rest }) => {
    return (
    <div className="container">
      <h1>Home</h1>
        <Board {...rest} />
    </div>
  );
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
