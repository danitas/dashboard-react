import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addNewTask } from './redux/actions';

import Board from './components/Board';

//reducers
const mapStateToProps = ({ count }) => ({
    count
});

//actions
const mapDispatchToProps = { addNewTask };

const App = ({ addNewTask }) => {
  return (
    <div className="container">
      <h1>Home</h1>
        <Board addNewTask={addNewTask} />
    </div>
  );
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
    addNewTask: PropTypes.func
};

App.defaultTypes = {
    addNewTask: null
};

export default connectedApp;
