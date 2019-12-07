//通用事件绑定
var btn = document.getElementById('btn1')
btn.addEventListener('click', function (event) {
    console.log('clicked')

})

function bindevent(elem, type, fn) {
    elem.addEventListener(type, fn)

}
var a = document.getElementById('link1')
bindevent(a, 'click', function (e) {
    e.preventDefault()
    alert('clicked')
})


//事件冒泡
var p1 = document.getElementById('p')
var body = document.body
bindevent(p1, 'click', function (e) {
    e.stopPropagation()
    alert('jihuo')
})
bindevent(body, 'click', function (e) {
    alert('quxiao')
})

//代理
var div1 = document.getElementById('div1')
div1.addEventListener('click', function (e) {
    var target = e.target
    if (target.nodename === 'A') {
        alert(target.innerHtml)
    }
})


//完善通用绑定事件的函数
function bindEvent(elem, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener('type', function (e) {
        var target
        if (selector) {
            target = e.target
            if (target.matches(selector)) {
                fn.call(target, e)
            }
        } else {
            fn(e)
        }
    })
}

var div1 = document.getElementById('div1')
bindEvent(div1, 'click', 'a', function (e) {
    console.log(this.innerHtml)
})


//Ajax
var xhr = new XMLHttpRequest()
xhr.open("get", "/api", false)
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            alert(xhr.responseText)
        }
    }
}
xhr.send(null)

var xhr=new XMLHttpRequest
xhr.open("get","/api",false)
xhr.onreadystatechange == function () {
    if(xhr.readyState==4){
        if (xhr.status==200) {
            alert(xhr.responseText)
        }
    }
    
}
xhr.send(null)

//readystate==0  还未发送，未调用send（）
//----------==1  已经调用send（），正在发送请求（载入）
//----------==2  send（）方法执行完成，已经接受全部相应内容（载入完成）
//----------==3   正在解析相应内容（交互）
//----------==4  解析完成，可以调用（完成）

//status==2xx  成功处理请求
//------==3xx  需要重定向
//------==4xx  客户端请求错误 404
//------==5xx  服务端错误

 
//跨域   不允许Ajax访问其他端口
//http://www.youtube.com/aaa/111
//http://asda.wewae.com]
//http://www.youname.com:8080/page1
//协议          域名      端口 

//允许跨域三标签
//<img src=xxx>  打点统计
//<link href=xxx>  <link><script>可以使用CDN，CDN使其他域
//<script src=xxx>  <script>可以使用JSONP



//<script>
// window.callback=function (data) {
//     console.log(data)
// }
//<script>
//  <script src="http://coding.m.imooc.com/api.js"></script>



//cookie
//客户端与服务端通信
//docunment.cookie=获取和修改
//4kb
//会携带到Ajax
//api难


// locationStorage和sessionStorage
//5M maximum
//api 简单
//localStorage.setItem(key,value);localStorage.getItem(key)