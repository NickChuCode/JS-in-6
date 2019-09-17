// 完成函数 centerPad 可以让一个字符串居中包裹在指定的可重复填充的字符串中间，例如：
//
// centerPad('Hello', 13, 'abc') // => 'abcaHelloabca'
// centerPad('Gook Luck!', 30, '*~') // => '*~*~*~*~*~Gook Luck!*~*~*~*~*~'
// 第一个参数为被包裹字符串，第二个参数为最终的字符串长度，第三个参数为用来填充的字符。
//
// 如果字符串无法完全居中，那么让字符串偏左，例如：
//
// centerPad('Hello', 10, 'abc') // => 'abHelloabc'
// 如果第二个参数传入的字符串长度比原来长度要短，直接返回原有字符串即可，例如：
//
// centerPad('Hello', 1, 'abc') // => 'Hello'
// 请你完成 centerPad 函数。
//
// （提示：可以充分利用 ES6 新增的扩展方法）

// 用到ES6的PadStart和PadEnd方法
// 这两个方法返回一个经过处理的字符串，并不改变原来的字符串
const centerPad = (str, len, pad) => {
    var front = Math.floor((len - str.length) / 2)
    return str.padStart(front + str.length, pad).padEnd(len, pad)
}