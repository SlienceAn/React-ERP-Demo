import React, { Fragment, useEffect, useState } from 'react';
import { Button, InputGroup, FormControl, FormCheck } from 'react-bootstrap';
import imgs from "../../Imgs/logo192.png";
import { Link } from "react-router-dom";
import styled from 'styled-components';
const LoginForm = (props) => {
    return (
        <Fragment>
            <Header>
                <img src={imgs} style={{ width: '85px', marginRight: '1rem' }} />
                <Htext>瑞特企業管理系統</Htext>
            </Header>
            <Box>
                <label style={{ fontSize: '1.5rem' }}>帳號</label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{ background: '#244680' }}>
                            <i className="far fa-address-book" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="輸入帳號"
                    />
                </InputGroup>
                <label style={{ fontSize: '1.5rem' }}>密碼</label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{ background: '#244680' }}>
                            <i className="far fa-address-book" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="輸入密碼"
                    />
                </InputGroup >
                <InputGroup className="mb-5">
                    <FormCheck label="記住密碼"></FormCheck>
                </InputGroup>
                <Button className="w-100" style={{ background: '#244680' }}>
                    <Link to="/StaffList" style={{ display: 'block', color: '#fff' }}>登入</Link>
                </Button>
            </Box>
        </Fragment>
    );

}
const Header = styled.div({
    minHeight: '150px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

})
const Htext = styled.div({
    textShadow: 'rgb(204, 204, 204) 0px 1px 0px, rgb(201, 201, 201) 0px 2px 0px, rgb(187, 187, 187) 0px 3px 0px, rgb(185, 185, 185) 0px 4px 0px, rgb(170, 170, 170) 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 6px 1px, rgba(0, 0, 0, 0.1) 0px 0px 5px, rgba(0, 0, 0, 0.3) 0px 1px 3px, rgba(0, 0, 0, 0.15) 0px 3px 5px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.2) 0px 10px 10px, rgba(0, 0, 0, 0.1) 0px 20px 20px;',
    fontSize: '2.2rem'
})
const Box = styled.div({
    width: '80%',
    minHeight: '420px',
    margin: '0 auto',
    paddingTop: '1.6rem',

})
export default LoginForm;