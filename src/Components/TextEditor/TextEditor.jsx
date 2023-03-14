import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Quill from 'quill'
import '../../Assets/Styles/Quill/quill.css'
import Button from '../Button/Button'

const TextEditor = ({
    setCustomMessage,
    setMsgEditable }) => {

    const TextArearef = useRef();
    function clearHandler() {
        setCustomMessage(null)
        TextArearef.current.querySelector('.ql-editor').innerHTML = ''
    }
    const arr = [{ txt: 'Cancel', callback: setMsgEditable, value: false }, { txt: 'Clear', callback: clearHandler, value: '' }]

    useEffect(() => {
        const toolbarOptions = [
            ['bold', 'italic'],
            [{ 'list': 'bullet' }, { 'list': 'ordered' }],

        ]

        new Quill(TextArearef.current, {
            modules: {
                toolbar: toolbarOptions
            }
        })

    }, [])


    return (
        <Wrapper>
            <TextArea onInput={({ target }) => {
                setCustomMessage(target.innerHTML)
            }} ref={TextArearef}></TextArea>
            <CancelClear>
                {
                    arr.map(({ txt, callback, value }) => (
                        <Button
                            key={txt}
                            callback={() => callback(value)}
                            width={60}
                            height={25}
                            color={'#F44336'}
                            btnText={txt}
                            border={'#F44336'}
                            hoverBgColor={'rgba(244, 67, 54, 0.1)'} />

                    ))
                }
            </CancelClear>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin:20px;
border: 1px solid #808080;
border-radius:5px;
padding:20px 0;
margin-top:10px;
position:relative;


`;

const CancelClear = styled.span`
position:absolute;
right:0;
bottom:15px;
display:flex;
align-items:center;
gap:10px;
margin-right:15px;
& > span{
    color:#F44336;
    font-weight:600;
    font-size:12px;
    cursor:pointer;

    &:hover{
        background:rgba(244, 67, 54, 0.1);
    }
}

`
const TextArea = styled.div`
height:200px;
width:100%;
color:#808080;
outline:none;
overflow-y:scroll;
margin-bottom:30px;
padding:0 20px;
`

// const OptionsContainer = styled.div`
// display:flex;
// justify-content:space-between;
// align-items:center;
// background:blue;

// span{
//     color:#F44336;
//     font-weight:600;
//     font-size:12px;
//     cursor:pointer;

// }
// `;

// const Options = styled.div`
// gap:15px;
// display:inline-flex;
// button{
//     cursor:pointer;
//     background:#F7F7F7;
//     border:none;
//     border-radius:2px;
//     outline:none;
//     width:22px;
//     height:22px;
// }
// `;

export default TextEditor