function cut(arr1, arr2) {
    if (toString.call(arr1) !== "[object Array]" || toString.call(arr2) !== "[object Array]")
        return (console.log('pls inpt two arr'))
    arr2.map(item => {
        if (arr1.includes(item))
            arr1.splice(arr1.indexOf(item), 1)
    })
    console.log(arr1)
}

cut([1, 2, 3, 4, 5, 6, 'a','b'], {a: "a", b: 1})