/*
number 任意数字
string 任意字符串
boolean true或false
any 任意类型
unknown 类型安全的any
void 没有值或undefined
never 不能是任何值
object 对象
array 数组
tuple 元组
enum 枚举
 */
let c: unknown
c = 'hello'

let d: string
// unknown 类型转成 string 直接写会报错 （any不会）
// d = c
if (typeof c === 'string') d = c
// 类型断言 两种写法
d = c as string
d = <string>c

function add(a: number, b:number): number {
    return a + b
}

let a: object
a = {}
a = function () {}

// {}用来指定对象中可以包含哪些属性
let b: {name: string}
// 以下会报错
// b = {}
// b = {name: '', age: 18}
b = {name: '123'}
// 对象中只要求有name属性
let h: {name: string, age?: number}
let i: {name: string, [propName: string]: any}

let j: (a: number, b: number) => number
j = function (n1, n2): number {
    return n1 + n2
}

let k: string[]
k = ['a', 'b', 'c']
let l: Array<number>
l = [1, 2, 3]

let m: [string, number, boolean]
m = ['hello', 1, true]

let n: {name: string, gender: 0 | 1}
n = {name: '', gender: 1}
enum Gender {
    MALE,
    FEMALE
}
let o: {name: string, gender: Gender}
o = {name: '', gender: Gender.MALE}

let p: string | number
let q: string & number // 无意义
let r: {name: string} & {age: number} // 有意义

type myType = 1 | 2 | 3 | 4 | 5
let s: myType


