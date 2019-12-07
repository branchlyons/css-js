var div1 = document.getElementById('div')//元素
var divList = document.getElementsByTagName('div')//集合
console.log(divList.length)
console.log(divList[0])
var containerList = document.getElementsByClassName('.container')//集合
var plist = document.querySelectorAll('p')//集合

//property
var plist = document.querySelectorAll('p')//集合
var p = plist[0]
console.log(p.style.width)
p.style.width = '100px'
console.log(p.className)
p.className = 'p1'
console.log(p.nodeName)
console.log(p.nodeType)


//attribute
var plist = document.querySelectorAll('p')//集合
var p = plist[0]
p.getAttribute('date-name')
p.setAttribute('data-name', 'imooc')
p.getAttribute('style')
p.setAttribute('style', 'sont-size:30px;')


//新增节点
var div1 = document.getElementById('div1')
var p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
div1.appendChild(p1)
var p2 = document.getElementById('p2')
div1.appendChild('p2')

//获取父或子元素
var div1 = document.getElementById('div1')
var parent = div1.parentElement
var child = div.childNodes
div1.removeChild(child[0])//移除节点

//navigator
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chorme')
console.log(isChrome)

//screen
console.log(screen.width)
console.log(screen.height)

//location
console.log(location.herf)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.search)
console.log(location.hash)


//history
history.back()
history.forward()

