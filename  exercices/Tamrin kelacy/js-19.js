function groupBy(myArr, str) {
    let values = [];
    let result = [];
    for (let i = 0; i < myArr.length; i++) {
        let val = myArr[i][str];
        let index = values.indexOf(val);
        if (index > -1)
            result[index].push(myArr[i]);
        else {
            values.push(val);
            result.push([myArr[i]]);
        }
    }
    return result;
}

let str = [
    {age:20, name:'pooria'},
    {age:21, name:'mohamad'},
    {age:21, name:'amir'},
]

console.log(groupBy(str, 'age'));