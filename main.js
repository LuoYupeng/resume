// setTimeout(function(){
//   siteWelcome.classList.remove('active')
// },500)

//添加offset类
let specialtags = document.querySelectorAll('[data-x]')
for(let i=0;i<specialtags.length; i++){
    specialtags[i].classList.add('offset')
}

findClosest()
window.onscroll = function(x){
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
    findClosest()
}
//寻找元素与窗口顶部最近的距离
function findClosest(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i =0;i< specialTags.length; i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i
        }
    }
    //minIndex 是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+ id +'"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for(let i =0;i< brothersAndMe.length;i++){
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}

let liTags = document.querySelectorAll('nav.menu > ul >li')
for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function(x){
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
        x.currentTarget.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('nav.menu > ul > li >a')
function animate(time){
    requestAnimationFrame(animate)
    TWEEN.update(time)
}
requestAnimationFrame(animate)
for(let i=0; i<aTags.length; i++){
    aTags[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href') //'#siteAbout'
        let element = document.querySelector(href)
        let top = element.offsetTop
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop //路程
        let coords = {y: currentTop}   //起始位置
        var t = Math.abs((s/100)*200)  //时间
        var tween = new TWEEN.Tween(coords) //起始位置
            .to({ y: targetTop},t)            //结束位置 和 时间
            .easing(TWEEN.Easing.Cubic.InOut) //缓动类型
            .onUpdate(function(){
                // coords.y已经改变
                window.scrollTo(0,coords.y)  //更新界面
            })
            .start() //开始缓动
        console.log(1)
    }
}