import React from 'react';
import {XSquare} from 'react-feather';

const AddNewTaskForm = ({ showForm }) => {
    return (
        <form>
            <div
                className="icon-close"
                onClick={() => showForm(false)}
            >
                <XSquare size='25' color="black" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Enter Title</label>
                <input type="text" className="form-control" id="inputTitle" aria-describedby="emailHelp"
                       placeholder="Enter title"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Enter Description</label>
                <input type="text" className="form-control" id="inputDesc" placeholder="Description"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}



export default AddNewTaskForm;