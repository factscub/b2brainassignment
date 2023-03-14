import React from 'react'
import styled from 'styled-components'
import msgImg from '../../Assets/Images/msg.svg'
import { Button } from '..'

const TalkContainer = () => {
    return (
        <Wrapper>
            <p>Looking for team plans?</p>
            <Button
                border={'#808080'}
                image={msgImg}
                width={117}
                height={34}
                fontSize={12}
                fontWeight={600}
                btnText={'talk to sales'} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-top:70px;

p{
    margin-bottom:8px ;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
}
`;

export default TalkContainer