function Counter(myArr) {
    let result = {}
    for (let item of myArr) {
        if (result[item]) {

            result[item]++
        }
        else {
            result[item] = 1
        }
    }
    return result
}

console.log(Counter([1, 0, 1, 2, 1, 0, 2, 1, 2, 2, 1, 0 , 5 , 2 , 10 , 12 , 13 , 1, 8 , 19, 14]))
// تابعی بنویسید که یک آرایه را از ورودی بگیرد و در یک آبجکت تعداد المان های آن را به صورت جداگانه مشخص کند