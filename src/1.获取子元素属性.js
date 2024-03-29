// 完成 getChildAttributes 函数，它接受一个 DOM 元素作为参数和一个属性名作为参数，
// 你需要返回这个 DOM 的 直接 子元素的特定属性列表。例如：
//
// <ul id='list'>
//   <li data-name="Jerry" class="item"><span>1</span></li>
//   <li data-name="Lucy" class="item"><span>2</span></li>
//   <li data-name="Tomy"><span>3</span></li>
// </ul>
// getChildAttributes(el, 'data-name') // => ['Jerry', 'Lucy', 'Tomy']
// getChildAttributes(el, 'class') // => ['item', 'item', null]
// 只需要完成 getChildAttributes 的编写。

const getChildAttributes = (el, attr) => {
    // 将array like的object转换为array有两种方法，
    // 一种是Array.prototype.slice.call(el.children)
    // 一种是[...el.children]
    let children = [...el.children]
    // Node.childNodes 和 ParentNode.children 的区别：
    // childNodes includes all child nodes, including non-element nodes like text and comment nodes.
    // To get a collection of only elements, use ParentNode.children instead.
    return children.map((item) => {
        return item.getAttribute(attr)
    })
}