// 编写一个 JavaScript generator 函数，接受一个仅包含数字的 多维数组 ，返回一个迭代器，可以遍历得到它拍平以后的结果。例如：
//
// const numbers = flatten2([1, [[2], 3, 4], 5])
// numbers.next().value // => 1
// numbers.next().value // => 2
// numbers.next().value // => 3
// numbers.next().value // => 4
// numbers.next().value // => 5
function *flatten2 (arr) {
    /* TODO */
    // 不能用forEach去迭代，因为yield无法击穿函数，即使是生成器内部的函数（深入理解ES6：P153）
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            yield arr[i]
        } else {
            // 注意generator的函数的递归的调用方式
            yield *flatten2(arr[i])
        }
    }
}