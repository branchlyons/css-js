fn()
function fn() {
    //声明
}
fn1()
var fn1 = function () {
    //表达式
}


//全局  
console.log(a)
var a = 100

fn('zhangsan')
function fn(name) {
    console.log(this)
    console.log(arguments)

    age = 20
    console.log(name, age)
    var age

    bar(100)

    function bar(num) {

        console.log(num)
    }
}

var a = {
    name='A',
    fn: function () {
        console.log(this.name)
    }
}
a.fn() //this===a
a.fn.call({ name: 'B' })//this==={name:'B}
var fn1 = a.fn
fn1() //this===window

function Foo(name) {
    this.name = name
}
var f = new Foo('zjhangsa')
var obj = {
    name="A",
    printName: function () {
        console.log(this.name)
    }
}
obj.printName()
function fn() {
    console.log(this)//this==window 
}
fn()

function fn1(name) {
    alert(name)
    console.log(this)
}
fn1.call({ x: 100 }, 'zhangsan')


var fn2 = function (name, age) {
    alert(name)
    console.log(this)
}.bind({ y: 200 })
// fn2('zhangsan', 20)
var fn3 = fn2
fn3('haha', 90)

if (true) {
    var name = 'zhangsan'
}
console.log(name)



var a = 100
function fn() {
    var a = 200
    console.log('fn', a)
}
console.log('global', a)
fn()

var a = 100
function fn() {
    var b = 200
    console.log(a)
    console.log(b)
}
fn()

var a = 100
function f1() {
    var b = 200
    function F2() {
        var c = 300
        console.log(a)
        console.log(b)
        console.log(c)
    }
    F2()
}
f1()


function F1() {
    var a = 100
    return function () {
        console.log(a)
    }
}
var f1 = F1()
var a = 200
f1() //100
//---------------------
var b = 9000
function F1() {
    var a = 100
    return function () {
        console.log(a)
        console.log(b)
    }
}
var f1 = F1()
function F2(fn) {
    var a = 200
    var b = 900
    fn()
}
F2(f1)//100 9000

// var a, i = 0
// function F1() {

//     var a, i = 0
//     while (i < 10) {

//         a = document.createElement('a')
//         a.addEventListener('click', function (e) {
//             e.preventDefaly()
//             alert(i)
//             i++

//         })
//     }
// }
// var f1=F1()
// f1()
// document.body.appendChild(a)

var i
for (i = 0; i < 10; i++) {
    (function (i) {
        var a = document.createElement('a')
        a.innerHTML = i + '<br>'
        a.addEventListener('click', function (e) {
            e.preventDefault()
            alert(i)

        })
        document.body.appendChild(a)
    })(i)
}

var i = 0
while (i < 10) {
    (function (i) {
        var a = document.createElement('a')
        a.innerHTML = i + '<br>'
        a.addEventListener('click', function (e) {
            e.preventDefault()
            alert(i)

        })
        document.body.appendChild(a)
    })(i)
    i++
}

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    (function (i) {
        setTimeout(function () {
            console.log('Index: ' + i + ', element: ' + arr[i]);

        }, 3000)

    }) (i)
}



function isFirstload() {
    var _list = []
    return function (id) {
        if (_list.indexOf(id) >= 0) {
            return false
        } else {
            _list.push(id)
            return true
        }
    }
}

var firstload = isFirstload()
firstload(10) //t
firstload(20) //t
firstload(10) //f
firstload(20) //f



var list = [1, 2, 3, 6, 5, 4, 7, 8]
console.log(list.indexOf(3))