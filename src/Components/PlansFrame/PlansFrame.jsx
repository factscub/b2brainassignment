import React, { useContext } from 'react'
import styled from 'styled-components'
import { PlanFeatures, PlanDetails } from '..'
import { SliderContext } from '../../ContextApi/MovablesliderContext/MovablesliderContext'
import features from '../../RawData/planFeatures.json'
import data from '../../RawData/Sample Subscription Plans data.json'

const PlansFrame = () => {
    const { rangeValue } = useContext(SliderContext)
    const { subscription_plans } = data;
    const filteredPlans = subscription_plans.filter(plan => {
        return plan.account_quantity === rangeValue
    }).sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))

    return (
        <Wrapper>
            <p>Robert, check out these plans for you</p>
            <InfoBox>

                {
                    filteredPlans.map(plan => (<PlanDetails plan={plan} plans={filteredPlans} key={plan.name} />))
                }

            </InfoBox>
            <PlanFeatures data={features} >
                <span>What all do these plans include?</span>
            </PlanFeatures>
        </Wrapper>
    )
}



const Wrapper = styled.div`
max-width:588px;

margin:auto;
& > p{
    font-weight: 800;
    font-size: 25px;
    line-height: 36px;    
    text-align: center;
}

`;

const InfoBox = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
margin-bottom:25px;
`;
export default PlansFrame