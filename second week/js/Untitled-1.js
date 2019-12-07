var a = 100
var b = a
a = 200
console.log(b)

typeof undefined //undefined
typeof 'a' //string
typeof 123 // number
typeof true //boolean
typeof [q]// object
typeof console.log //function

var a = 100 + 10 //110
var b = 100 + '10'//10010

100 == '100' //ture
0 == ''//ture
null == undefined //ture

var a = true
if (a) {
    //
}

var b = 100
if (b) {
    //
}

var c = ''
if (c) {
    //
}

console.log(10 && 0)
console.log('' || 'abc')
console.log(!window.abc)


0,NAN, '', null, undefined,false

var a = 100
Comment.log(!!a)

Object
Array
Boolean
Number
String
Function
Date
RegExp
Error

JSON.stringify({ a: 10, b: 20 })
JSON.parse('{"a":10,"b":20}')