import React, { createContext, useReducer } from 'react'

export const SliderContext = createContext(25);

export function sliderReducer(state,action){
switch(action.type){
    case 'SET_RANGE':
        return action.value
    default:
        return state
}
}
const MovablesliderContext = ({ children }) => {
    const [rangeValue, dispatch] = useReducer(sliderReducer,25);
    return (

        <SliderContext.Provider value={{ rangeValue, dispatch }}>
            {children}
        </SliderContext.Provider>
    )
}

export default MovablesliderContext