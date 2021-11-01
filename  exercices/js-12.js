function exchange(debt, arr_NumOfBills, arr_PriceOfCurrency) {


    // x = shows Derham
    // y = shows Euro
    // z = shows Dollar
    // a = shows currency of Derham bill
    // b = shows currency of Euro bill
    // c = shows currency of Dollar bill
    let count = 0;
    let x = arr_NumOfBills[0]
    let y = arr_NumOfBills[1]
    let z = arr_NumOfBills[2]
    let a = arr_PriceOfCurrency[0]
    let b = arr_PriceOfCurrency[1]
    let c = arr_PriceOfCurrency[2]


    if (debt < 1 || debt > 100000 || typeof (debt) !== "number")
        return console.log(" Ye addad sahhie beyn 1 va 100000 vard kon")
    if (0 > x > 5000 || 0 > y > 5000 || 0 > z > 5000 || typeof (x) !== "number" || typeof (y) !== "number" || typeof (z) !== "number")
        return console.log(" tedad bakhsh ha dorost vared nashode")
    if (toString.call(arr_NumOfBills) !== "[object Array]")
        return console.log(" tedad bakhsh haro dar array vard kon")
    if (1 > a || a > 100000 || 1 > b || b > 100000 || 1 > c || c > 100000 || typeof (a) !== "number" || typeof (b) !== "number" || typeof (c) !== "number")
        return console.log(" currencies dorost vared nashode")
    if (toString.call(arr_NumOfBills) !== "[object Array]")
        return console.log(" currencies haro dar array vard kon")
    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            for (let k = 0; k <= z; k++) {
                if (
                    (i * a) + (j * b) + (k * c) === debt
                ) {
                    count += 1
                    console.log(`Derham: ${i} , Euro: ${j} , Dollar: ${k}`)
                }
            }
        }
    }
    console.log(`Ali has ${count} way to pay his debt
*****************************`
    )
}

exchange(100000, [2, 1, 1], [50000, 70000, 30000])
exchange(60000, [3, 3, 3], [30000, 20000, 30000])
exchange(43000, [2, 1, 1], [4200, 7500, 3600])