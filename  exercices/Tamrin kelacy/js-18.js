function nearestVowelLetter(n) {
    let str = ['a','e','i','o','u'];
    let dist = [];
    for (let i = 0; i < str.length; i++){
        dist.push(Math.abs(n.charCodeAt(0)-str[i].charCodeAt(0)));
    }
    let minVal = Math.min(...dist);
    let index = dist.indexOf(minVal);
    return str[index]
}

console.log(nearestVowelLetter('m'))