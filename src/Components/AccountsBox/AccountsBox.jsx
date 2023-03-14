import React from 'react'
import styled from 'styled-components'
import { CompanyBox } from '..'
import b2b from '../../Assets/Images/b2b.svg'
import dot from '../../Assets/Images/dot.svg'
import { getIntelsLen, getLeadsLen } from '../../utils'

const AccountsBox = ({ accounts, callback, selectedAccName }) => {

    return (
        <Wrapper>
            <Title>All activity from your accounts ({accounts.length})</Title>

            <CompanyBox showCursor bgColor={!!!selectedAccName && ' #EFF3F9'} callback={() => callback()} name={'Your intel feed'} logo={b2b}>
                <Span>{accounts.length} Accounts <img src={dot} alt='dot' /> {getIntelsLen(accounts)} Intel(s) <img src={dot} alt='dot' /> {getLeadsLen(accounts)} Lead(s)</Span>
            </CompanyBox>

            {
                accounts.map(account => {
                    const { website, intels, name ,logo} = account;
                    return (
                        <CompanyBox showCursor bgColor={selectedAccName === name && ' #EFF3F9'} callback={() => callback(name)} key={website} name={name} logo={logo}>
                            <Span>{intels.length} Intel(s) <img src={dot} alt='dot' /> {getLeadsLen([account])} Lead(s)</Span>
                        </CompanyBox>
                    )
                })
            }
        </Wrapper>
    )
}


const Span = styled.span`
font-weight: 600;
font-size: 12px;
line-height: 14px;
color: #808080;
`;

const Wrapper = styled.div`
// width:50%;
// background:red;
display:inline-block;
flex:1;

`;

const Title = styled.p`
padding:15px 30px;
background: #F7F7F7;

`
export default AccountsBox