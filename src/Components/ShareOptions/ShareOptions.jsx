import React from 'react'
import styled from 'styled-components'
import { CustomMsg, TextEditor } from '..';


const ShareOptions = ({
    customMessage,
    setCustomMessage,
    msgEditable,
    setMsgEditable,
    setRadioValue,
    radioValue,
    checkBoxChecked,
    setCheckBoxChecked
}) => {
    const persons = [{ person: 'Manager', access: true }, { person: 'Peer', access: true }, { person: 'Other', access: false }]

    function radioChangeHandler(value) {
        setRadioValue(value)
        setCustomMessage(null)
        setMsgEditable(false)
        setCheckBoxChecked(false)
    }

    return (
        <Wrapper>
            <p>Are they your</p>
            <RadioOptions>
                <div>
                    {
                        persons.map(({ person, access }) => (
                            <div key={person}>
                                <input id={person} type={'radio'} name='person' value={person} onChange={() => radioChangeHandler({ person, access })} />
                                <label style={{ color: radioValue.person === person ? '#808080' : ' #C4C4C4' }} htmlFor={person}>{person}</label>

                            </div>
                        ))
                    }
                </div>
                {
                    (msgEditable && radioValue.access) && <TextEditor {...{ customMessage, setCustomMessage, setMsgEditable }} />

                }
                {
                    (radioValue.access && !msgEditable) && <CustomMsg {...{ checkBoxChecked, setCheckBoxChecked, setMsgEditable, customMessage }} />
                }
            </RadioOptions>
        </Wrapper >
    )
}

const Wrapper = styled.div`
margin:20px 0;
& > p{
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #808080;
}

`;

const RadioOptions = styled.div`
margin:8px 0;
div{
    flex-wrap:wrap;
    display:flex;
    div{
    label{
    font-weight: 500;
    line-height: 24px;
    margin:0 60px 0 8px ;
    }
    input[type="radio"]{
        accent-color:#808080;
    }
    }
}

`;

export default ShareOptions