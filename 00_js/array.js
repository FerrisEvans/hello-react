const arr1 = [1, 2, 3, 4, 5]
/*
map 可以根据原有数组返回一个新数组 需要一个回调函数作为参数，回调函数的返回值会成为新数组中的元素
- 参数
    第一个参数：当前元素
    第二个参数：当前元素的索引
    第三个参数：当前数组，一般不用
*/
let result1 = arr1.map((item, index, array) => {
    return item + 2
})
const arr2 = ['孙悟空', '猪八戒', '沙和尚']
let result2 = arr2.map(item => `<li>${item}</li>`)

/*
filter 可以从一个数组中获得符合条件的元素 会根据回调函数的结果决定是否保留元素。
- true 保留 false 不保留
 */
// 返回偶数
let result3 = arr1.filter(item => item % 2 === 0)

/*
find 可以从一个数组中获得符合条件的第一个元素
 */
let result4 = arr1.find(item => item % 2 === 0)

/*
reduce 可以用来合并数组中的元素
- 需要两个参数
    回调函数：指定运算规则
        prev：上一次运算结果
        cur：当前值
        index：当前索引
        arr：当前数组
    初始值：用来指定第一个运算时的prev。如果不指定则直接从第二个元素开始计算
 */
let result5 = arr1.reduce((previousValue, currentValue) => previousValue + currentValue)