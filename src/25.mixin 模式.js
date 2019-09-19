// 我们可以用 minxin 来代替传统的继承方法，他接受任意数量的 mixin 对象作为参数
// 例如：
// let SerializableMixin = {
//     serialize () {
//         return JSON.stringify(this)
//     }
// }
//
// let AreaMixin = {
//     getArea () {
//         return this.length * this.width
//     }
// }
//
// class Square extends mixin(AreaMixin, SerializableMixin) {
//     constructor (length) {
//         super()
//         this.length = length
//         this.width = length
// }
// }
//
// let x = new Square(3)
// console.log(x.getArea()) // 9
// x.serialize() // {"length": 3, "width": 3}

function mixin(...mixins) {
    let base = function () {}
    Object.assign(base.prototype, ...mixins)
    return base
}
