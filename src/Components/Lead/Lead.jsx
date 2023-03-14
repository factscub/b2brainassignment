import React from 'react'
import styled from 'styled-components';

const Lead = ({ data }) => {
    const { designation, first_name, last_name, pic } = data || {};
    return (
        <Wrapper>
            <ImageContainer>
                <img src={pic} alt='pic' />
            </ImageContainer>

            <TextContainer>
                <p>{first_name + ' ' + last_name}</p>
                <span>{designation}</span>
            </TextContainer>

        </Wrapper>
    )
}

const TextContainer = styled.div`
display:block;

p{
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    }
    
    span{
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: rgba(58, 58, 58, 0.7);  
    }
    
`

const ImageContainer = styled.div`
width:40px;
height:40px;
margin-right:10px;

img{
    width:inherit;
    height:inherit;
}
`;

const Wrapper = styled.div`
display:flex;
align-items:center;
// width:250px;
margin:15px 0 ;

`;

export default Lead