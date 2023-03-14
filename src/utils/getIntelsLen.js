export default function getIntelsLen(accounts) {
    return accounts.reduce((prev, nxt) => prev + nxt.intels.length, 0);
}