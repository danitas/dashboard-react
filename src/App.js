import React from 'react';
import { connect } from 'react-redux';

import { addNewTask } from './redux/actions';

import {Board} from './components/Board';

//reducers
const mapStateToProps = ({ count }) => ({
    count
});

//actions
const mapDispatchToProps = { addNewTask };

function App({ addNewTask }) {
  return (
    <div className="container">
      <h1>Home</h1>
        <Board addNewTask={addNewTask} />
    </div>
  );
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
