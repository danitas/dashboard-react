import React, {Modal} from 'react';
import {XSquare} from 'react-feather';

const addToList = (form) => {
    form.preventDefault();
    console.log(form);
}

const AddNewTaskForm = () => (
        <form>
            <div className="icon-close">
                <XSquare size='25' color="black"/>
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
            <button type="submit" className="btn btn-primary" onClick={addToList}>Submit</button>
        </form>
);


export default AddNewTaskForm;