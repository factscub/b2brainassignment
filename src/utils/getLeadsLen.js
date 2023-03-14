export default function getLeadsLen(accounts) {
    return accounts.reduce((prev, nxt) => {
        const sum = nxt.intels.reduce((prev, nxt) => {
            return prev + nxt.leads.length;
        }, 0);
        return prev + sum;
    }, 0);
}