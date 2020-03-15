import React, {useState} from 'react';
import { Edit, Plus } from 'react-feather';
import PropTypes from 'prop-types';
import AddNewTaskForm from "./AddNewTaskForm";
import { Modal } from "../parts";

const TaskColumn = ({ items, title, ...rest }) => {
    const [show, showForm] = useState(false);
    const [selectedItem, setItem] = useState({});
    return (
        <div className="development col-sm">
            <ul className={`list-group ${title === "completed" ? "completed" : "open"}`}>
                <li className={`list-group-item ${title === "completed" ? "green" : "pink"}`}>
                    <h6 className="white-text">{title}</h6>
                </li>

                {items.map(item => (
                    <li key={item.id} className="list-group-item">
                        { item.title}
                        {title === "open" &&
                        (
                            <button
                                type="button"
                                onClick={
                                    () => {
                                        setItem(item);
                                        showForm(!show);
                                    }
                                }
                                className="float-right"
                            >
                                <Edit size='20' color="grey" className="float-right"/>
                            </button>
                        )}

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
            <Modal modalState={show} handleState={showForm}>
                <div className="contained-modal-title-vcenter">
                    <AddNewTaskForm showForm={showForm} title={selectedItem.title}  {...rest} />
                </div>
            </Modal>
        </div>
    );
};

TaskColumn.propTypes = {
    addNewTask: PropTypes.func,
    items:  PropTypes.array.isRequired,
    title:  PropTypes.string

};

TaskColumn.defaultTypes = {
    addNewTask: null,
    title:  ''

};

export default TaskColumn;

