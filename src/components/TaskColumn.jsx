import React, {useState} from 'react';
import { Edit, Plus } from 'react-feather';
import AddNewTaskForm from "./AddNewTaskForm"

const TaskColumn = ({ addNewTask, items, title }) => {
    const [show, showForm] = useState(false);
    return (
        <div className="development col-sm">
            <ul className={`list-group ${title === "completed" ? "completed" : "open"}`}>
                <li className={`list-group-item ${title === "completed" ? "green" : "pink"}`}>
                    <h6 className="white-text">{title}</h6>
                    {title === "open" && <Edit size='20' color="white" />}
                </li>

                {items.map(item => (
                    <li key={item.id} className="list-group-item">
                        { item.title}
                    </li>
                    ))
                }

                {title === "open" &&
                    <li className="list-group-item">
                        <Plus size='18' color="#212529"/>
                        <label onClick={ () => showForm(!show) }>Add new task...</label>

                    </li>

                }
            </ul>
            {show && <div className="modal"><div className="contained-modal-title-vcenter"><AddNewTaskForm show={show}/></div></div>}
        </div>
    );
};

export default TaskColumn;

