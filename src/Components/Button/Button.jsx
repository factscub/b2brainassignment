import React from 'react'
import styled from 'styled-components'

const Button = ({ callback, fontWeight, hoverBorder, border, height, width, color, btnText, image, bgColor, fontSize, hoverBgColor } = {}) => {
    const props = { fontWeight, hoverBorder, border, height, width, color, btnText, bgColor, fontSize, hoverBgColor };
    return (
        <Wrapper {...props} onClick={callback}>
            {image && <img src={image} alt='pic' />}
            <span>{btnText}</span>
        </Wrapper>
    )
}

const Wrapper = styled.button`
cursor:pointer;
outline:none;
border:none;
border-radius: 3px;
display:flex;
align-items:center;
justify-content:center;
border:${({ border }) => `1px solid ${border}`};
color:${({ color }) => color ? color : '#808080'};
width:${({ width }) => width}px;
height:${({ height }) => height}px;
font-size:${({ fontSize }) => fontSize}px;
background:${({ bgColor }) => bgColor ? bgColor : 'white'};
transition:all 0.2s ease;
span:first-letter{
    text-transform:uppercase;    
}
span{
    font-weight:${({ fontWeight }) => fontWeight ? fontWeight : 500};

}
&:hover{
    border:${({ hoverBorder }) => `1px solid ${hoverBorder}`};
    background:${({ hoverBgColor }) => hoverBgColor};
}

img{
    margin-right: 5px;
}
`;
export default Button;