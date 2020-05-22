import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { createPortal } from 'react-dom';
const backTop = () => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}
const ScrollTopButton = () => {
    return createPortal(
        <Button className="d-flex justify-content-center align-items-center" variant="danger" onClick={backTop}>
            <i className="fas fa-arrow-alt-circle-up mr-2"></i>
            <div>Top</div>
        </Button>,
        document.getElementById('top')
    );
}

export default ScrollTopButton;
