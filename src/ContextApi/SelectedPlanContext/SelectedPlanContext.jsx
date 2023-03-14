import React, { createContext, useReducer } from 'react'
const initialState = { plan: {}, plans: [] }
export const PlanContext = createContext(initialState)

function planReducer(state, action) {

    switch (action.type) {
        case 'PLAN_DETAILS':
            return action.value
        default:
            return state
    }
}
const SelectedPlanContext = ({ children }) => {
    const [planDetails, planDetailsDispatcher] = useReducer(planReducer, initialState)

    return (
        <PlanContext.Provider value={{ ...planDetails, planDetailsDispatcher }}>
            {children}
        </PlanContext.Provider>
    )
}

export default SelectedPlanContext