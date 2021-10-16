// eslint-disable-next-line import/prefer-default-export
export const gcd = (firstNum, secondNum) => {
    let result = 0;
    const minNum = (firstNum < secondNum ? firstNum : secondNum);
    for (let i = minNum; i > 0; i -= 1) {
        if ((firstNum % i === 0) && (secondNum % i === 0)) {
            result = i;
            break;
        }
    }
    return result;
};
