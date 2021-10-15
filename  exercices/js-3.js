let Arr = [1, 2, 3, 4, 4, 3, 2, 1, 1, 3, 4, 5, 2, 5, 3, 2, 1, 4, 2, 1, 1]
let map = Arr.reduce(function (previous, current) {
    previous[current] = (previous[current] || 0) + 1;
    return previous;
}, {});

console.log(map);

/*این فاینکشن با reduce نوشته شده و تعداد هر المان را مشخص میکند*/