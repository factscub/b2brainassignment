import React, { useContext } from 'react'
import styled from 'styled-components';
import { Button, PriceBox } from '..'
import { ModalContext } from '../../ContextApi/ModalSelectContext/ModalSelectContext';
import { PlanContext } from '../../ContextApi/SelectedPlanContext/SelectedPlanContext';

const PlanDetails = ({ plan, plans }) => {
    const { modalDispatcher } = useContext(ModalContext)
    const { planDetailsDispatcher } = useContext(PlanContext)

    function subscriptionHandler() {
        console.log('subscribed successfully.')
        console.log('type: ', plan.name)
        console.log('price: $', plan.price , plan.bill_period === 3 ? '/quarter' : '/month')
        console.log('number of accounts: ', plan.account_quantity)
    }
    return (
        <div>
            <PriceBox {...{ plan, plans }} />
            <ButtonContainer>
                <Button fontSize={14}
                    callback={subscriptionHandler}
                    btnText={'subscribe'}
                    bgColor={'#1AAB2B'}
                    color={'#fff'}
                    width={185}
                    height={48}
                    hoverBgColor={'#178824'}
                />
                <Button
                    callback={() => {
                        modalDispatcher({ type: 'SHARE_MODAL' })
                        planDetailsDispatcher({ type: 'PLAN_DETAILS', value: { plan, plans } })

                    }}
                    btnText={'Share with colleague'}
                    border={'#808080'}
                    width={185}
                    height={48}
                />
            </ButtonContainer>
        </div>
    )
}

const ButtonContainer = styled.div`
display:flex;
gap:10px;
flex-direction:column;
`;
export default PlanDetails