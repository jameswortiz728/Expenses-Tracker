import React from 'react';
import Modal from 'react-modal';

const RemoveModal = ({ open, closeModal, onRemove }) => {

    return (
        <div>
            <Modal
                isOpen={open}
                contentLabel="Expense Removal"
                closeTimeoutMS={200}
                ariaHideApp={false}
                className="modal"
            >
                <h3 className="modal__title">Expense will be deleted</h3>
                <p className="modal__body">Are you sure?</p>
                <button className="button button--remove" onClick={onRemove}>Delete</button>
                <button className="button button--secondary" onClick={closeModal}>Nevermind</button>
            </Modal>
        </div> 
    )
};

export default RemoveModal;