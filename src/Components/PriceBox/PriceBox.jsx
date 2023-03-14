import React from 'react'
import styled from 'styled-components'
import { getPercentage } from '../../utils';

const PriceBox = ({ plan, plans }) => {
  const { name, bill_interval, /* bill_interval_verbose, */ bill_period, price } = plan || {};
  const per_month = (price / bill_period)
  const isPro = name?.toLowerCase() === 'pro';
  const otherPlanPrice = plans?.find(p => p.name?.toLowerCase() !== 'pro').price;
  const perc = getPercentage(per_month, otherPlanPrice)

  return (
    <Wrapper>
      <Recommended isPro={isPro}>
        {
          isPro && <>Recommended - Save {perc}%</>
        }
      </Recommended>
      <Info>
        <p>{name}</p>
        <PriceDetails>
          <p>${Math.ceil(price)}</p>
          {
            isPro ?
              <span>/quarter (${Math.ceil(per_month)}/{bill_interval})</span>
              : <span>/{bill_interval}</span>

          }
        </PriceDetails>
      </Info>
    </Wrapper>
  )
}

const PriceDetails = styled.div`
display:flex;
align-items:center;
p{
    font-size: 26px;
}
span{
// text-align:center;
display:inline-block;
font-weight: 500;
line-height: 24px;
color: #808080;
}
`;

const Info = styled.div`
p{
font-weight: 800;
font-size: 20px;
line-height: 30px;
}
`;

const Recommended = styled.span`
min-height:20px;
background:${({ isPro }) => isPro && '#0A6EDF'};
border-radius: 15px;
padding:4px 12px;
color:white;
font-weight: 600;
font-size: 8px;
line-height: 11px;

`;

const Wrapper = styled.div`
margin:10px 0;
// flex:1;
`;

export default PriceBox