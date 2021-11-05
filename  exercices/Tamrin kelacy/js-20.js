function arraySort(myArr,n) {
    for (let i = 0; i < myArr.length; i++) {
        let index = myArr.indexOf(n);
        myArr.splice(index, 1);
        myArr.push(n);
    }
    return myArr;
}

console.log(arraySort([1, 2, 3, 0, 0, 4, 4, 8, 0, 9, 0, 4, 10, 12],0))