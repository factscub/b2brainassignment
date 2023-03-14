import React from 'react'
import styled from 'styled-components';
import warningImg from '../../Assets/Images/warning.svg'

const InputText = ({ email, setEmail, err }) => {

    return (
        <Wrapper err={err}>
            <label>Enter colleague’s email</label>
            <input placeholder='name@example.com' value={email} onChange={e => setEmail(e.target.value)} />
            {
                err && <ErrorContainer><img src={warningImg} alt='error' /><span>Invalid email.</span></ErrorContainer>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
label{
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #808080;
}
input{
    width:100%;
    display:block;
    outline:none;
    padding:10px;
    font-weight:500;
    font-size:16px;
    border-radius: 3px;
    color:${({ err }) => err ? '#F44336' : '#808080'};
    border:1px solid ${({ err }) => err ? '#F44336' : 'rgba(196, 196, 196, 0.7)'};
    // padding: 14px 20px;
}

`;

const ErrorContainer = styled.div`
display:flex;
align-items:center;
gap:5px;
margin-top:3px;
span{
    color:#F44336;
    font-weight:600;
    font-size:12px;
}
`;

export default InputText;