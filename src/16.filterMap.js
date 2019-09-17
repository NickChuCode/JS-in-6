// 请你给原生的 Map 添加方法 filterKeys 和 filterValues，可以类似于于数组方法的 filter。
// 它们分别可以对 Map 的键和值进行筛选，它们会返回一个新的 Map， 是对原有的 Map 的筛选结果，例如：
//
// const m = new Map([['Jerry', 12], ['Jimmy', 13], ['Tomy', 14]])
//
// m.filterKeys((key) => key.startsWith('J')) // => Map { Jerry => 12, Jimmy => 13 }
// m.filterValues((val) => val >= 13) // => Map { Jimmy => 13, Tomy => 14  }
//
// // 原有的 map 保持不变
// console.log(m) // => Map { Jerry => 12 , Jimmy => 13, Tomy => 14 }
// TODO: 修改内置的 Map
Map.prototype.filterKeys = function(cb) {
    var res = new Map()
    for (var [key, value] of this){
        if (cb(key)) {
            res.set(key, value)
        }
    }
    return res
}

Map.prototype.filterValues = function(cb) {
    var res = new Map()
    for (var [key, value] of this){
        if (cb(value)) {
            res.set(key, value)
        }
    }
    return res
}