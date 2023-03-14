import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, MovableSlider } from '..';
import eyes from '../../Assets/Images/eyes.svg'
import { SliderContext } from '../../ContextApi/MovablesliderContext/MovablesliderContext';


const dummyDetails = [{
    number: 3,
    t1: 'Accounts',
    t2: 'tracked'
},
{
    number: 6,
    t1: 'Intels',
    t2: 'received'
},
{
    number: 12,
    t1: 'Leads',
    t2: 'received'
}, {
    number: 2.5,
    t1: 'Hours',
    t2: 'saved'
}];

const DummyAccountsInfoBox = ({callback}) => {
    const { rangeValue } = useContext(SliderContext)

    return (
        <Wrapper>
            <p>Sneak peek into your B2Brain journey so far
                <img src={eyes} alt='eyes' />
            </p>
            <DetailsContainer>
                {
                    dummyDetails.map(({ number, t1, t2 }) => (
                        <Details key={number + t1 + t2}>
                            <span>{number}</span>
                            <div>
                                <p>{t1}</p>
                                <p>{t2}</p>
                            </div>
                        </Details>
                    ))
                }
            </DetailsContainer>
            <p>Let B2Brain take these numbers higher.</p>
            <span>Tell us about the number of accounts you work on every month.</span>
            <br />
            <SliderContainer>
                <MovableSlider />
            </SliderContainer>
            <span>Researching on <i>{rangeValue} accounts</i> every month can be tiring!Want to see a specially-curated plan for you to ease that out?</span>
            <Button callback={callback} width={134} height={48} btnText={'plans for you'} textSize={14} color={'#fff'} bgColor={'#1AAB2B'} hoverBgColor={'#178824'} />
        </Wrapper>
    )
}

const SliderContainer = styled.div`
margin:15px 0;
`;

const Details = styled.div`
display:flex;
margin:15px 0;
span{
    color: #1AAB2B;
    font-weight: 800;
    font-size: 32px;
    line-height: 36px;
}
div{
    margin-left:5px;
    p{
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        color: #808080;
    }
}
`;

const DetailsContainer = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
margin-bottom:40px;
`;

const Wrapper = styled.div`
padding:30px;
box-shadow: 2px 2px 16px rgba(30, 30, 30, 0.1);
border-radius: 5px;
& > p{
font-weight: 700;
font-size: 20px;
line-height: 26px;
display:flex;
img{
    margin-left:5px;
}
}
& > span{
display:inline-block;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #808080;
margin-bottom:10px;

i{
    font-weight:700;
}
}
`;

export default DummyAccountsInfoBox