import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {XSquare} from 'react-feather';

const AddNewTaskForm = ({ showForm, addNewTask, title, description }) => {
    const iniInputsValue = {
        title: title,
        description: description || title
    };
    const [inputGroup, changeInputValue] = useState(iniInputsValue);
    const onSubmit = event => {
        event.preventDefault();
        addNewTask(inputGroup);
        showForm(false);
    };

    useEffect(()=>{
        changeInputValue(iniInputsValue);
    }, [title]);

    return (
        <form onSubmit={onSubmit}>
            <div
                className="icon-close"
                onClick={() => showForm(false)}
            >
                <XSquare size='25' color="black" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Enter Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputTitle"
                    placeholder="Enter title"
                    value={inputGroup.title}
                    onChange={({ target: { value } }) => changeInputValue({...inputGroup, title: value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Enter Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputDesc"
                    placeholder="Description"
                    value={inputGroup.description}
                    onChange={({ target: { value } }) => changeInputValue({...inputGroup, description: value })}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

AddNewTaskForm.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

AddNewTaskForm.defaultProps = {
    title: '',
    description: ''
};

export default AddNewTaskForm;