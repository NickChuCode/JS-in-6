// 每天都是快乐的一天，比如看到一个帖子 说了这么一个故事：
//
// 面试一个5年的前端，却连原型链也搞不清楚，满口都是Vue，React之类的实现，这样的人该用吗？
//
// 最后还是拒绝。还有其他的原因。一个问题，输入m.n参数，获取一个m长度的都是n的数组，不能用循环，他不会写。
// 问他他们公司项目的webpack配置entry有几个，他一会说1个，一会说很多个，不知道他到底懂不懂。
//
// 那么，为证明你的实力，请写出一个函数 initArray ，接受两个参数 m 和 n，返回一个数组，它的长度是 m，每个值都是 n。
const initArray = (m, n) => {
    /* TODO */
    var res = new Array(m) // 这样new出来的对象，因为没有显式初始化值，所以map等迭代器是不起作用的，所以不用。
    // map calls a provided callback function once for each element in an array,
    // in order, and constructs a new array from the results.
    // callback is invoked only for indexes of the array which
    // have assigned values, including undefined. （这里虽然包括undefined，但必须是显式的赋值undefined，而不是new Array）
    // It is not called for missing elements of the array
    // (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).
    res.fill(n)
    return res
}