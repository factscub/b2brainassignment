import { useState } from "react";

export default function useSelectedAccount(accounts) {

    const [selectedAccName, setSelctedAccName] = useState();
    const [accountsData, setAccountsData] = useState(() => accounts, [])


    function selectedAccountHandler(accName) {
        setSelctedAccName(accName);

        if (!accName) {
            setAccountsData(accounts)
        }
        else {
            const filtered = accounts.filter(account => accName === account.name);
            setAccountsData(filtered);
        }

    }

    return { selectedAccName, accountsData, selectedAccountHandler }

}