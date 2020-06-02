import React, { Fragment, useState, useEffect } from 'react';
import styled from "styled-components";
import bg from "../../Imgs/react.jpg";
import boxBG from "../../Imgs/reactBg.jpg";
import rbg from "../../Imgs/rbg.png";
import { LoginForm } from "./LoginForm";
const Login = () => {
    const [isLogin, setLogin] = useState(true);
    return (
        <Fragment>
            <Box src={`url(${boxBG})`}>
                <CardMain>
                    <LeftImg src={`url(${rbg})`}></LeftImg>
                    <Forms>
                        <LoginForm />
                    </Forms>
                </CardMain>
            </Box>
        </Fragment >
    );
};

const Box = styled.div({
    width: '100%',
    minHeight: '100vh',
    backgroundImage: props => props.src,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
})

const CardMain = styled.main({
    width: '1200px',
    height: '600px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: '-300px 0 0 -600px',
    display: 'flex',
})

const LeftImg = styled.div({
    width: '60%',
    height: '100%',
    backgroundImage: props => props.src,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '45%',
    borderTopLeftRadius: '1.5rem',
    borderBottomLeftRadius: '1.5rem'
})

const Forms = styled.div({
    width: '40%',
    height: '100%',
    background: '#fff',
    borderTopRightRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
    padding: '.5rem'

})
export default Login
