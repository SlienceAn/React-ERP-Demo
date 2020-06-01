import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import styled from "styled-components";
const LoginAlert = props => {
    return createPortal(
        <AlertBg>
            <Alerts></Alerts>
        </AlertBg>,
        document.getElementById('alert')
    )
};

const AlertBg = styled.div({
    position: 'absolute',
    width: '100%',
    height: '100vh',
    top:0,
    background:'rgba(0,0,0,0.5)'
})

const Alerts = styled.div({
    position: 'absolute',
    width:'500px',
    height:'250px',
    top:'50%',
    left:'50%',
    background:'#fff',
    margin:'-200px 0 0 -125px'
})
export default LoginAlert;