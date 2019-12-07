console.log(100)
setTimeout(function () {
    console.log(200)
}, 1000)
console.log(300)

console.log(100)
setTimeout(console.log(200), 1000)
console.log(300)

console.log(100)
alert(200)
console.log(300)

//定时任务
setTimeout, setInterval

//网络请求
//ajax请求， 动态《img》加载
console.log('start')
$.get('./data1.json', function (data1) {
    console.log(data1)
})
console.log('end')

console.log('start')
var img = document.createElement('img')
img.onload = function () {
    console.log('loaded')
}
img.src = '/xxx.png'
console.log('end')

//事件绑定
console.log('start')
document.getElementById('btn1').addEventListener('click', function () {
    alert('clicked')
})
console.log('end')


console.log(100)
setTimeout(function () {
    console.log(200)
})
console.log(300)


Date.now()
var dt = new Date()
dt.getTime()
dt.getFullYear()
dt.getMonth()
dt.getDate()
dt.getHours()
dt.getMinutes()
dt.getSeconds()


Math.random()

//forEach 遍历所有元素
var arr = [1, 2, 3]
arr.forEach(function (item, index) {
    console.log(index, item)
})


//every 判断所有元素符合条件
var arr = [1, 2, 3]
var result = arr.every(function (item, index) {
    if (item < 4) {
        return true
    }
})
console.log(result)


//some 判断是否至少有一个元素符合
var arr = [1, 2, 3]
var result = arr.some(function (item, index) {
    if (item < 2) {
        return true
    }
})
console.log(result)


//sort 排序
var arr = [1, 4, 2, 3, 5]
var arr2 = arr.sort(function (a, b) {
    //小到大
    return a - b

    // 大到小
    // return b-a
})
console.log(arr2)


//map 对元素重新组装，生成新数组
var arr = [1, 2, 3, 4,]
var arr2 = arr.map(function (item, index) {
    return '<b>' + item + '</b>'
})
console.log(arr2)


//filter 过滤符合条件的元素
var arr = [1, 2, 3, 4,]
var arr2 = arr.filter(function (item, index) {
    if (item > 2) {
        return true
    }
})
console.log(arr2)


//对象API
var obj = { x: 100, y: 200, z: 300 }
var key
for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key, obj[key])
    }
}

