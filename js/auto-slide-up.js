function findClosestAndRemoveOffSet(){
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

//添加offset类
let specialtags = document.querySelectorAll('[data-x]')
for(let i=0;i<specialtags.length; i++){
    specialtags[i].classList.add('offset')
}

findClosestAndRemoveOffSet()

window.addEventListener('scroll',function (x) {
    findClosestAndRemoveOffSet()
})
