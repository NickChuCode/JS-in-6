// 完成 is 函数，它接受两个参数，你返回 true 和 false 来表示这两个参数是否有 相同的值。例如：
//
// is('foo', 'foo');     // true
// is(window, window);   // true
//
// is('foo', 'bar');     // false
// is([], []);           // false
//
// var test = { a: 1 };
// is(test, test);       // true
//
// is(null, null);       // true
//
// is(0, -0);            // false
// is(-0, -0);           // true
// is(NaN, 0/0);         // true

const is = (x, y) => {
    if (x === y) {
        // 当一个为0，一个为-0的时候，可以用1 / x === 1 / y判断出它们两个不相等
        // 因为一个是Infinity，一个是-Infinity
        return x !== 0 || y !== 0 || 1 / x === 1 / y
    } else {
        // 一个公式判断了所有 x !== y的情况，包括两个NaN比较
        return x !== x && y !== y
    }
}