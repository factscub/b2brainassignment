import React from 'react'
import styled from 'styled-components'
import { Button, Lead } from '..'
import redShare from '../../Assets/Images/redShare.svg'

const IntelCard = ({ data }) => {
    const { intel_type, title, snippet, publisher, published_date, talking_points, leads } = data || {}

    return (
        <Wrapper>
            <IntelType>
                <span>{intel_type}</span>
                <Button border={'#C4C4C4'} image={redShare} btnText={'share'} width={82} height={32} />
            </IntelType>

            <IntelText>
                <p>{title}</p>
                <span>{snippet}</span>
                <PublisherContainer>{publisher + '(' + published_date + ')'}</PublisherContainer>
            </IntelText>

            <TalkingPointsContainer>
                <p>Talking Points</p>
                <span>{talking_points}</span>
            </TalkingPointsContainer>

            <RelaventLeadsContainer>
                <p>{'Relavant Leads (' + leads?.length + ')'}</p>
                <Leads>
                    {
                        leads && leads.map((lead, i) => (<Lead key={i} data={lead} />))
                    }
                </Leads>
            </RelaventLeadsContainer>
            <HelpfulContainer>
                <span>Was this intel helpful?</span>
                <YesNoBox>
                    <span>Yes</span>
                    <span>No</span>
                </YesNoBox>
            </HelpfulContainer>
        </Wrapper>
    )
}

const HelpfulContainer = styled.div`
margin:10px 30px;
 span{
    font-weight: 500;
font-size: 14px;
line-height: 18px;
}
`;

const YesNoBox = styled.div`
border: 1px solid #C4C4C4;
border-radius: 3px;
display:inline-flex;
margin-left:12px;
span{
    padding:7px 15px;

}
span:nth-child(1){
    border-right: 1px solid #C4C4C4;

}
`

const Leads = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const RelaventLeadsContainer = styled.div`
font-weight: 700;
font-size: 16px;
line-height: 22px;
margin:0 30px;
& > p{
    opacity: 0.3;
}

`;

const TalkingPointsContainer = styled.div`
margin:0 30px 30px 30px;
p{
font-weight: 700;
line-height: 22px;
color: rgba(58, 58, 58, 0.4);
}
span{
font-weight: 500;
line-height: 24px;
}

`;

const PublisherContainer = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #F44336;
padding:15px 0;
`;

const IntelText = styled.div`
padding:25px 30px;


p{
    font-weight: 700;
    line-height: 22px;
}
span{
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
}
`;

const Wrapper = styled.div`
margin:10px 0;
border: 1px solid #C4C4C4;
box-shadow: inset 0px -50px 0px #F7F7F7;
border-radius: 0px 0px 5px 5px;

`;

const IntelType = styled.div`
padding:25px 30px;
display:flex;
align-items:center;
justify-content:space-between;
border-bottom: 1px solid rgba(196, 196, 196, 0.7);
& > span{
    
    background: rgba(196, 196, 196, 0.4);
    border-radius: 5px;
    padding: 6px 10px;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
}
`

export default IntelCard