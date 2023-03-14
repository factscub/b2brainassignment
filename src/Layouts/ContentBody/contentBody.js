import React, { useContext } from 'react'
import '../../Assets/Styles/Main/ContentBody/contentBody.css'
import AccountsBody from '../AccountsBody/accountsBody'
import UserContext from '../../ContextApi/contextApi'
import { IntelDashBoard } from '..'
export default function ContentBody() {

  const { enteredSearch } = useContext(UserContext)

  return (
    <div className='contentBody'>

      {/* only show homepage if the input field is not focused
      i.e, if the user clicks the cross symbol in the search bar.
      */}
      {
        !enteredSearch ? <IntelDashBoard /> : <AccountsBody />
      }
    </div>
  )
}
