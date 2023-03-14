import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import edit from '../../Assets/Images/edit.svg'

const CustomMsg = ({ customMessage, setMsgEditable, checkBoxChecked, setCheckBoxChecked }) => {
    const msgRef = useRef()

    useEffect(() => {
        msgRef.current.innerHTML = customMessage
    }, [customMessage]);

    return (
        <Wrapper>
            <MsgOptions>
                <CheckContainer>
                    <input id='check' type={'checkbox'} disabled={!!!customMessage } checked={checkBoxChecked} onChange={e => {
                        setCheckBoxChecked(p => !p)
                    }} />
                    <label htmlFor='check'>Add custom message</label>
                </CheckContainer>
                <EditContainer onClick={() => { setMsgEditable(true) }}>
                    <img src={edit} alt='edit' />
                    <span>Edit</span>
                </EditContainer>
            </MsgOptions>
            <Msg ref={msgRef}>
            </Msg>
        </Wrapper>
    )
}

const EditContainer = styled.span`
line-height:0;
display:flex;
cursor:pointer;
align-items:center;
img{
  margin-right:5px;
}
span{
  font-weight: 700;
font-size: 14px;
line-height: 18px;
color: #F44336;
}

`
const Wrapper = styled.div`
background: #F7F7F7;
border-radius: 5px;
padding:20px;
`;

const MsgOptions = styled.div`
display:flex;
justify-content:space-between;
line-height:0;
width:100%;

`
const CheckContainer = styled.div`
display:flex;
align-items:center;
label{
font-weight: 700;
font-size: 14px;
}
input[type="checkbox"] {
  width:18px;
  height:18px;
  accent-color:#1AAB2B;
  margin-right:8px;
  
}
`
const Msg = styled.div`
padding:5px 20px;
font-weight: 500;
font-size: 14px;
line-height: 18px;

color: #808080;
`
export default CustomMsg