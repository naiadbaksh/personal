import React from 'react';
import './Modal.css';

export const Modal = ({ showModal, setShowModal}) => {
    return (
        <>
        { showModal ? <div>Modal</div> : null }        
        </>
    );
};
 