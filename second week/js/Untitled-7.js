//git 命令
//git add.
//git checkout xxx
//git commit -m "xxx"
//git push origin master
//git pull origin master
//git pull origin master

//git branch 分支
//git checkout -b xxx/git checkout xxx
//git merge xxx



//Util.js
export {
    getFormatDate: function(date, type) {
        //type===1 返回2017-56-85
        //type===2 返回20125--659-454
    }
}

//a-util.js
var getFormatDate = require('util,js')
export {
    agetFormatDate: function(date) {
        return getFormatDate(date, 2)
    }
}
//a.js
var agetFormatDate = require("a-util.js")
var dt = new Date()
console.log(agetFormatDate(dt))

// <script src = "util.js"> </script>
// <script src = "a-util.js"></script>
// <script src = "a.js"></script>

//直接<script src = "a.js"></script>


//util.js
define(function () {
    return {
        getFormatDate: function (date, type) {
            if (type === 1) {
                return '123456'
            }
            if (type === 2) {
                return '456789'
            }
        }
    }
})



//a-util.js
define(['./util.js'], function (util) {
    return {
        agetFormatDate: function (date) {
            return util.getFormatDate(date, 2)
        }
    }
})





//a.js
define(['./a-utile.js'], function (autil) {
    return {
        printDate: function (date) {
            console.log(autil.agetFormatDate(date))
        }
    }
})



//main.js
require(['./ a.js'], function (a) {
    var date = new Date()
    a.printDate(date)
})


//linux基本命令
//ssh name@server
//mkdir a创建a文件夹
//ls看都有啥名字
//ll 列表
// cd a
//pwd当前目录
//cd..
//rm -rf a 删除a
//vi a.js
//cp a.js a1.js拷贝文件
//mkdir src
//mv a1.js src/a1.js  移动a1.js到src文件夹
//cd src
//cd ..
//rm a.js
//vim a.js (i)   esc  : w  enter
//:q
//vim a.js (i)   esc :wq
//cat a.js
//head a.js
//tail a.js
//head -n 1 a.js 看第一行
//tail -n 2 a.js 看后两行
//grep '2’ a.js 搜索带2的



