import React, { createContext, useReducer } from 'react'
import { PlanModel, ShareWithColleagueModal } from '../../Components'

export const ModalContext = createContext({ modal: null, closeModal: false })
const ModalSelectContext = ({ children }) => {

    function modalReducer(state, { type, closeModal = false }) {

        switch (type) {
            case 'PLAN_MODAL':
                return { modal: <PlanModel />, closeModal }

            case 'SHARE_MODAL':
                return { modal: <ShareWithColleagueModal />, closeModal }
            case 'CLOSE_MODAL':
                return { ...state, closeModal }

            default:
                return state;
        }
    }
    const [Modal, modalDispatcher] = useReducer(modalReducer, { modal: null })

    return (
        <ModalContext.Provider value={{ Modal, modalDispatcher }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalSelectContext