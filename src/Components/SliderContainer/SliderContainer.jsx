import React from 'react'
import styled from 'styled-components';
import { MovableSlider } from '..'

const SliderContainer = () => {
    return (
        <Wrapper>
            <span>Number of accounts you work on every month</span>
            <MovableSlider />
        </Wrapper>
    )
}

const Wrapper = styled.div`
text-align:center;
display:block;
font-weight: 500;
line-height: 24px;
color: #808080;
margin-bottom:10px;
`;

export default SliderContainer