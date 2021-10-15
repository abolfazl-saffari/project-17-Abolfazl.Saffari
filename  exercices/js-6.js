function sqrPrint(n) {
    if (n > 10) {
        return "input number must be less than 10"
    }
    let result = ''
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) result = " *   ".repeat(n)
        else result = " *   " + "     ".repeat(n - 2) + " *"
        console.log(result)
    }
}

sqrPrint(1)
/*تمرین سوم و از سایت quera.com*/