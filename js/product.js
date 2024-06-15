var p1 = document.getElementById("product1")
var p2 = document.getElementById("product2")
var p3 = document.getElementById("product3")


p1.addEventListener('mouseover',function(){
    document.getElementById("des1").style.top = 300 + "px";
})
p1.addEventListener('mouseleave',function(){
    document.getElementById("des1").style.top = 600 + "px";
})

p2.addEventListener('mouseover',function(){
    document.getElementById("des2").style.top = 300 + "px";
})
p2.addEventListener('mouseleave',function(){
    document.getElementById("des2").style.top = 600 + "px";
})
p3.addEventListener('mouseover',function(){
    document.getElementById("des3").style.top = 300 + "px";
})
p3.addEventListener('mouseleave',function(){
    document.getElementById("des3").style.top = 600 + "px";
})
