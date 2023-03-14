import React from 'react'
import styled from 'styled-components'

const CompanyBox = ({ showCursor, border, logo, name, website, children, bgColor, callback }) => {
    return (
        <Wrapper {...{ showCursor, border, bgColor }} onClick={callback ? callback : null} >
            <ImgContainer logo={logo} >
                {logo && <img src={logo} alt='pic' />}
            </ImgContainer>
            <TextContainer>
                <p>{name}</p>
                {
                    !children && <>
                        <span>{website}</span></>
                }
                {children}
            </TextContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
padding:25px 30px;
display:flex;
border: 1px solid ${({ border }) => border ? border : 'white'};
border-radius: 5px 5px 0px 0px;
background:${({ bgColor }) => bgColor ? bgColor : 'white'};
cursor:${({ showCursor }) => showCursor ? 'pointer' : null}

`;

const ImgContainer = styled.div`
width:38px;
height:38px;
margin-right:10px;
border-radius: 3px;
border:1px solid ${({ logo }) => logo ? 'white' : 'black'};
img{
    width:inherit;
    height:inherit;
}

`;

const TextContainer = styled.div`

p{
    font-weight: 700;
    line-height: 22px;   
}
span{
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: rgba(58, 58, 58, 0.5);
}
`;

export default CompanyBox