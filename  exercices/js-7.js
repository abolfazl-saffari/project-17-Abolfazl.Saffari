function move(arr, x, l) {
    if (x + l < 0 || x + l >= arr.length || x < 0)
        return false

    let a = arr.splice(x, 1)[0];
    arr.splice(x + l, 0, a)
    console.log(arr)
}

move([1, 2, 3, 4, 5, 6, 7], 2, -2)
/* تمرین چهارم * یک المان از یک ارایه به اندازه دالخواه جا به جا کند*/