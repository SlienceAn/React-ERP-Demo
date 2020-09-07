import React, { Fragment, useEffect, useState, createContext } from 'react';
import { Button, InputGroup, FormControl, FormCheck } from 'react-bootstrap';
import imgs from "../../Imgs/logo192.png";
import { Redirect } from "react-router-dom";
import styled from 'styled-components';
import LoginAlert from "./LoginAlert";
const AlertStatus = createContext();

const LoginForm = (props) => {
    const [isLogin, setLogin] = useState(false)
    const [isToggle, setAlert] = useState(false)
    const toggleAlert = () => setAlert(false)
    const [text, setText] = useState('')
    const account = React.createRef();
    const password = React.createRef();

    useEffect(() => {
        account.current.focus();
    }, [])
    const checkLogin = () => {
        if (!account.current.value || !password.current.value) {
            setAlert(true)
            setText('帳號密碼不能是空的!')
            return
        }
        if (account.current.value == "React" && password.current.value == "React") {
            setLogin(true)
        } else {
            setAlert(true)
            setText('帳號密碼錯誤!')
        }
    }
    return (
        <Fragment>
            <Header>
                <img src={imgs} style={imgRoate} />
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
                        ref={account}
                        defaultValue="React"
                    />
                </InputGroup>
                <label style={{ fontSize: '1.5rem' }}>密碼</label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{ background: '#244680' }}>
                            <i className="fas fa-key" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="輸入密碼"
                        ref={password}
                        defaultValue="React"
                    />
                </InputGroup >
                <InputGroup className="mb-5">
                    <FormCheck label="記住密碼"></FormCheck>
                </InputGroup>
                <Button className="w-100" style={{ background: '#244680' }} onClick={checkLogin} type="submit">登入</Button>
            </Box>
            <AlertStatus.Provider value={{isToggle,toggleAlert}}>
                <LoginAlert open={isToggle} >{text}</LoginAlert>
            </AlertStatus.Provider>
            {isLogin && <Redirect push to="/Layout"></Redirect>}
        </Fragment>
    );
}
const imgRoate = {
    width: '85px',
    marginRight: '1rem',
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
export { LoginForm, AlertStatus }