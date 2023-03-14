import React, { useContext } from 'react'
import styled from 'styled-components'
import { ModalContext } from '../../ContextApi/ModalSelectContext/ModalSelectContext'
import Button from '../Button/Button'

const Model = ({ children }) => {
    const {Modal, modalDispatcher } = useContext(ModalContext)

    function outerCloseModal(event) {
        if (event.target === event.currentTarget) {
            modalDispatcher({ type: 'CLOSE_MODAL', closeModal: true })
        }

    }

    function innerCloseModal() {
        modalDispatcher({ type: 'CLOSE_MODAL', closeModal: true })

    }

    if (Modal.closeModal) {
        return null
    }

    return (
        <Wrapper onClick={outerCloseModal}>
            <InnerContainer>
                <span className='close'>
                    <Button
                        callback={innerCloseModal}
                        width={60}
                        height={25}
                        color={'#F44336'}
                        btnText={'Close'}
                        border={'#F44336'}
                        hoverBgColor={'rgba(244, 67, 54, 0.1)'} />

                </span>
                {children}
            </InnerContainer>
        </Wrapper>
    )
}


const Wrapper = styled.div`
position:fixed;
top:0;
left:0;
z-index: 105;
width:100%;
height:100%;
background: rgba(0, 0, 0, 0.25);
display:flex;
justify-content:center;
align-items:center;
overflow:scroll;
padding:20px;


`;


const InnerContainer = styled.div`
box-shadow: 0px 1px 17px 3px rgba(58, 58, 58, 0.2);
border-radius: 5px;
background:white;
padding:30px 80px ;
width:845px;
height:100%;
overflow:scroll;
position:relative;

& > .close{
    position:absolute;
    right:10px;
    top:10px;
}
`;

export default Model