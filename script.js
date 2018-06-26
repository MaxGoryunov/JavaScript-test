/*var rating = document.querySelector(".rating"),
    ratingItem = document.querySelectorAll(".rating-item");

rating.onclick = function(e) {
    var target = e.target;
    if (target.classList.contains("rating-item")) {
        target.classList.add("active", "current-active");
    }
}*/
setTimeout (function(){
    alert("Здравствуйте! Хорошего вам дня!");
}, 5000);




var rating = document.querySelector(".rating"),
ratingItem = document.querySelectorAll(".rating-item");

rating.onclick = function(e){
var target = e.target;
if(target.classList.contains("rating-item")){
    target.classList.add("active", "current-active");
}
}

rating.onmouseover = function(e) {
var target = e.target;
if(target.classList.contains("rating-item")){
    removeClass(ratingItem, "active", "current-active")
    target.classList.add("active", "current-active");
    mouseOverActiveClass(ratingItem)
}
}

function removeClass(arr) {
for(var i =0, iLen = arr.length; i <iLen; i++) {
    for (var j = 1; j < arguments.length; j++) {
        ratingItem[i].classList.remove(arguments[j]);
    }
}
}
function mouseOverActiveClass(arr){
for(var i = 0, iLen = arr.length; i < iLen; i++){
    if(arr[i].classList.contains("active")){
        break;
    } else {
        arr[i].classList.add("active");
    }
}
}


