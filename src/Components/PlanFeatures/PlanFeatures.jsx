import React from 'react'
import styled from 'styled-components'
import tick from '../../Assets/Images/tickcircle.svg'

const PlanFeatures = ({ children, data, numberOfAcc }) => {
    return (
        <Wrapper>
            {children}
            <Features>
                {
                    numberOfAcc && <Feature>
                        <img src={tick} alt='tick' />
                        <span>
                            Track upto <Highlight> {numberOfAcc} accounts</Highlight>
                        </span>
                    </Feature>
                }
                {
                    data.map(feature => (
                        <Feature key={feature}>
                            <img src={tick} alt='tick' />
                            <span>{feature}</span>
                        </Feature>

                    ))
                }
            </Features>
        </Wrapper>
    )
}

const Highlight = styled.p`
display:inline-flex;
color:#1AAB2B;
// background:red;
font-weight:600;
`;

const Feature = styled.div`
// width:50%;
min-width:210px;
padding:5px 5px 5px 0;
img{
    margin-right:8px;
}
`;

const Features = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const Wrapper = styled.div`
flex:1;
padding:15px;
background: #F7F7F7;
border-radius: 3px;
span{
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #808080;
}
`;

export default PlanFeatures