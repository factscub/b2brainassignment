import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'
import { AccountsBox, CompanyBox, DummyAccountsInfoBox, IntelCard } from '../../Components';
import { ModalContext } from '../../ContextApi/ModalSelectContext/ModalSelectContext';
import MovablesliderContext from '../../ContextApi/MovablesliderContext/MovablesliderContext';
import SelectedPlanContext from '../../ContextApi/SelectedPlanContext/SelectedPlanContext';
import { useSelectedAccount } from '../../hooks';
import data from '../../RawData/Sample Intels Data.json'

const IntelDashBoard = () => {
    const { accounts } = data;
    const { selectedAccName, accountsData, selectedAccountHandler } = useSelectedAccount(accounts);
    const { Modal, modalDispatcher } = useContext(ModalContext)

    return (
        <MovablesliderContext>
            <SelectedPlanContext>
                <Wrapper>
                    <AccountsBox selectedAccName={selectedAccName} callback={selectedAccountHandler} accounts={accounts} />
                    <IntelsContainer>
                        {

                            accountsData.map(({ name, logo, website, intels }) => (<Fragment key={website}>
                                <CompanyBox {...{ name, logo, website }} border={'#C4C4C4'} />
                                {
                                    intels.map((intel, i) => <IntelCard key={i} data={intel} />)
                                }
                            </Fragment>
                            ))
                        }
                        <DummyAccountsInfoBox callback={() => {
                            modalDispatcher({ type: 'PLAN_MODAL' })
                        }} />
                    </IntelsContainer>
                    {Modal.modal}
                </Wrapper>
            </SelectedPlanContext>
        </MovablesliderContext>
    )
}

const IntelsContainer = styled.div`
margin:0 10px ;
flex:2;
`;

const Wrapper = styled.div`
display:flex;
position: relative;
top: 10px;
left: 0;

`;

export default IntelDashBoard