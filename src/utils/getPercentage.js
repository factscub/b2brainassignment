export default function getPercentage(smallNum, bigNum) {
    const diff = Math.abs(smallNum - bigNum)
    return Math.ceil((diff / bigNum) * 100)
}