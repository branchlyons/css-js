function Foo(name, age) {
    this.name = name;
    this.age = age;
    this.class = 'class-1'

}
var f = new Foo('zhangsan', 20)
//var f1=new Foo('lisi',20 )

// var a={}  , var a = new Object()
// var a=[], var a =new Array()
// function Foo(){}, var Foo=new Function()
// instanceof

//----------------------------------------------------
var obj = {}; obj.a = 100;
var arr = []; arr.a = 100;
function fn() { }
fn.a = 100

console.log(obj._proto_);
console.log(arr._proto_);
console.log(fun._proto_);

console.loh(fn.prototype)
console.log(obj._proto_ === Object.prototype)

function Yuu(name, age) {
    this.name = name
}
Yuu.prototype.alertName = function () {
    alert(this.name)

}

var y = new Yuu('haha')

y instanceof Yuu
y instanceof Object

y.printName = function () {
    console.log(this.name)
}

y.printName()
y.alertName()
y.toSting()// y._proto_._proto_

var item
for (item in y) {
    if (f.hasOwnproperty(item)) {
        console.log(item)
    }
}


var arr = []
arr instanceof Array // ture

//原型链继承例子



function Animal() {
    this.eat = function () {
        console.log('animal eat')
    }
}

function Dog() {
    this.bark = function () {
        console.log('dog bark')
    }
}
Dog.prototype = new Animal()
var hashiqi = new Dog()

//zepto 源码使用原型链

function Elem(id) {

    this.elem = document.getElementById(id)

}
Elem.prototype.html = function (val) {
    var elem = this.elem
    if (val) {
        elem.innerHTML = val
        return this//链式操作

    } else {
        return elem.innerHTML
    }

}
Elem.prototype.on = function (type, fn) {
    var elem = this.elem
    elem.addEventListener(type, fn)
    return this

}
var div1 = new Elem('wrap fn-clear')
// console.log(div1.html())
div1.html('<p>hello im demo</p>').on('click', function () {
    alert('clicked')
}).html('<p>javascrip</p>')





