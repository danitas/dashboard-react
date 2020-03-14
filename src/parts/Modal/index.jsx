import React from 'react';
import PropTypes from 'prop-types';


const Modal = ({ children, modalState, handleState }) => {
    const handleClick = e => {
        if (
            typeof e.target.className === "string" &&
            e.target.className.includes("modal-task")
        ) {
            handleState(false);
        }
    };
    return (
        <div
            className={`modal-task ${modalState ? "open" : ""}`}
            onClick={handleClick}
        >
            {children}

        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    modalState: PropTypes.bool.isRequired,
    handleState: PropTypes.func.isRequired,
};

export default Modal;