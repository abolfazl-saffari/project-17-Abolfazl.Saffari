function getNum(num) {
    let arr1 = num.toString().split('');

    for (let i = 0; i < arr1.length; i++) {
        console.log(" %s :", arr1[i], copuNumber(arr1[i]))
    }
}

function copuNumber(number) {
    let result = 0;
    for (let i = 0; i < number; i++)
        result += ((10 ** i) * number)
    return result
}

getNum(14539)
/*این اولین تمرین است. quera.ir*/