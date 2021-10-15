const arr = [-3, 0, 6, 25, -15, 2, 5]

function max(prevVal, currentVal) {
    if (prevVal > currentVal) {
        return prevVal
    }
    return currentVal
}

function min(prevVal, currentVal) {
    if (prevVal > currentVal) {
        return currentVal
    }
    return prevVal
}

const maximum = arr.reduce(max)
const minimum = arr.reduce(min)

const arr1 = [minimum, maximum]

console.log(arr1)
//  ماکزیمم و مینیمم بگیره و بریزه داخل یه آرایه دیگه