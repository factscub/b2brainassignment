import React, { useContext, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import features from '../../RawData/planFeatures.json'
import shareImg from '../../Assets/Images/share.svg'
import tickImg from '../../Assets/Images/tick.svg'
import { InputText, Model, PriceBox, PlanFeatures, Button, ShareOptions } from '..'
import { PlanContext } from '../../ContextApi/SelectedPlanContext/SelectedPlanContext'
import { SliderContext } from '../../ContextApi/MovablesliderContext/MovablesliderContext'
import { ModalContext } from '../../ContextApi/ModalSelectContext/ModalSelectContext'
import { validateEmail } from '../../utils'

const ShareWithColleagueModal = () => {
    const { plan, plans } = useContext(PlanContext)
    const { rangeValue } = useContext(SliderContext)
    const { modalDispatcher } = useContext(ModalContext)


    const [customMessage, setCustomMessage] = useState(null)
    const [email, setEmail] = useState('');
    const [err, setErr] = useState(false);
    const [msgEditable, setMsgEditable] = useState(false)
    const [radioValue, setRadioValue] = useState({ person: '', access: false });
    const [checkBoxChecked, setCheckBoxChecked] = useState(false)
    const allValues = useMemo(() => [radioValue.person, email, !err], [radioValue, email, err])
    const [share, setShare] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    function clicker() {
        const result = validateEmail(email);
        const allValuesFilled = [radioValue.person, email, !result].every(v => !!v)
        setErr(result)

        if (allValuesFilled && !result) {
            setShare(allValuesFilled)
            setIsSubmitted(true)
            console.log('shared successfully.')
            console.log('type: ', plan.name)
            console.log('price: $', plan.price , plan.bill_period === 3 ? '/quarter' : '/month')
            console.log('number of accounts: ', plan.account_quantity)
            // console.log(plan)
            console.log('email: ', email)
            console.log('person: ', radioValue.person)
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = customMessage;
            checkBoxChecked && console.log('customMessage: ', tempDiv.textContent)

        }
    }

    useEffect(() => {
        const allValuesFilled = allValues.every(v => !!v)

        if (allValuesFilled) {
            setShare(allValuesFilled)
        }

    }, [allValues])

    return (
        <Model>
            <Title>Share this plan with a colleague</Title>
            <InfoBox>
                <div>
                    <PriceBox {...{ plan, plans }} />
                    <ChangePlan onClick={() => {
                        modalDispatcher({ type: 'PLAN_MODAL' })
                    }}>
                        Choose  a different plan
                    </ChangePlan>
                </div>
                <PlanFeatures data={features} numberOfAcc={rangeValue} />
            </InfoBox>
            <InputText {...{ email, setEmail, err }} />
            <ShareOptions {...{
                msgEditable,
                setMsgEditable,
                customMessage,
                setCustomMessage,
                radioValue,
                setRadioValue,
                checkBoxChecked,
                setCheckBoxChecked
            }} />
            <Button
                callback={clicker}
                image={
                    (isSubmitted && !err) ? tickImg : shareImg}
                btnText={'share'}
                bgColor={
                    (share && !isSubmitted) || (isSubmitted && err) ? '#F44336' : isSubmitted ? '#1AAB2B' : '#C4C4C4'}
                width={132}
                height={58}
                color={'#fff'}
                hoverBgColor={(share && !isSubmitted) ? '#C12E23' : ''}
            />

        </Model>
    )
}

const ChangePlan = styled.span`
cursor:pointer;
font-weight: 600;
font-size: 12px;
line-height: 14px;
color: #F44336;
`;

const Title = styled.p`
font-weight: 800;
font-size: 32px;
line-height: 36px;
text-align: center;
`;

const InfoBox = styled.div`
margin:10px 0;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
margin-bottom:30px;
padding-bottom:30px;
border-bottom: 1px solid rgba(196, 196, 196, 0.7);

& > div{
    flex:1;
}
`;

export default ShareWithColleagueModal;