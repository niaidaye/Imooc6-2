// 封装一个getElementById()方法
function byId(id) {
    return typeof (id) === "string" ? document.getElementById(id) : id;
}
// 全局变量
const pics = byId("banner").getElementsByTagName("div"),
    // 图片长度
    len = pics.length,
    // 标题
    menu = byId("menu").getElementsByTagName("li");


var timer = null,
    index = 0;
// console.log(pics);
// 设置及时器
function slideImg() {
    let header = byId("header");
    // console.log(header);
    // 鼠标滑过，清除定时器，离开继续
    header.onmouseover = function () {
        if (timer) {
            clearInterval(timer);
        }
    }
    // 鼠标，放上，开始计时
    header.onmouseout = function () {
        timer = setInterval(function () {
            index++;
            if (index >= len) {
                index = 0;
            };
            // 切换图片
            changImg();
            // console.log(index);
        }, 1000);
    }
    // 自动在header上触发鼠标离开的事件
    header.onmouseout();
    // 便利所有原点，绑定点击事件，点击圆点切换图片
    for (let i = 0; i < len; i++) {
        // 给所有span添加一个id的属性值。值为当前span的索引
        menu[i].id = i;
        menu[i].onclick = function () {
            // 改变index为当前span的索引
            index = this.id;
            // 调用changImg()函数
            changImg();
        }
    }

}
// 计时器
slideImg();
// 切换图片
function changImg() {
    // 遍历banner下的div，将其隐藏
    for (let i = 0; i < len; i++) {
        // 遍历banner下的div，将其隐藏
        pics[i].style.display = "none";
        // 遍历dots下的所有span，将span清除类
        menu[i].className = "";
    }
    // 更具index索引找到当前的div，将其显示
    pics[index].style.display = "block";
    // 更具index索引找到当前的span，将其显示
    menu[index].className = "active"
}