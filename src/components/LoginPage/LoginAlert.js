import React, { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { AlertStatus } from './LoginForm'
import  Animate  from 'react-smooth';
const LoginAlert = props => {
    const values = useContext(AlertStatus)
    const { isToggle, toggleAlert } = values
    return createPortal(
        <Fragment>
            {props.open && <AlertBg onClick={toggleAlert}>
                <Animate to="1" from="0" attributeName="opacity">
                    <Alerts>
                        <i className="far fa-times-circle mb-4" style={{ color: "red", fontSize: '5rem' }}></i>
                        <span className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>Oops....{props.children}</span>
                        <Button className="mb-2" style={{ background: '#244680' }} onClick={toggleAlert}> 確認</Button>
                    </Alerts>
                </Animate>
            </AlertBg>}
        </Fragment> 
        ,
        document.getElementById('alert')
    )
};

const AlertBg = styled.div({
    position: 'absolute',
    zIndex: '99',
    width: '100%',
    height: '100vh',
    top: 0,
    background: 'rgba(0,0,0,0.5)'
})

const Alerts = styled.div({
    position: 'absolute',
    width: '500px',
    height: '250px',
    top: '50%',
    left: '50%',
    background: '#fff',
    margin: '-125px 0 0 -250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2rem',
    transition: 'all .5s'

})
export default LoginAlert;