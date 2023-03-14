import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SliderContext } from '../../ContextApi/MovablesliderContext/MovablesliderContext';

const MovableSlider = () => {
    const { rangeValue, dispatch } = useContext(SliderContext);
    const inputRef = useRef();

    function setRangeHandler(value) {
        const vl = parseInt(value) === 0 ? 25 : parseInt(value);
        dispatch({
            type: 'SET_RANGE',
            value: vl
        })

    }
    useEffect(() => {
        const { min, max,value } = inputRef.current
        inputRef.current.style.background = `#DEE2E6`
        inputRef.current.style.background = `linear-gradient(to right,#1AAB2B ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%)`

        inputRef.current.oninput = function () {
            inputRef.current.style.background = `linear-gradient(to right,#1AAB2B ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%)`
        };

    }, [rangeValue]);

    return (
        <Wrapper>
            <input ref={inputRef} type="range"
                min="0" max="150" value={rangeValue === 25 ? 0 : rangeValue} step="50" onInput={(e) => {
                    setRangeHandler(e.target.value)
                }} />
            <RangeValuesContainer >
                {
                    [25, 50, 100, 150].map(v => (
                        <Span key={v} isSame={v === rangeValue} >{v}</Span>
                    ))
                }
            </RangeValuesContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
// background:blue;
// margin:15px;
input {
    height: 3px;
    width: 100%;
    outline: none;
    -webkit-appearance: none;
    
}

input[type='range']::-webkit-slider-thumb {
    width: 18px;
    -webkit-appearance: none;
    height: 18px;
    background:#1AAB2B;
    border-radius: 50%;
  }
`;

const RangeValuesContainer = styled.div`
display:flex;
justify-content:space-between;
color:#C4C4C4;

`;

const Span = styled.span`
// background:red;
font-weight:500;
color:${({ isSame }) => isSame ? '#1AAB2B' : '#C4C4C4'}
`;

export default MovableSlider