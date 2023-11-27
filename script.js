function openCar(evt, carName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(carName).style.display = "block";
    evt.currentTarget.className += " active";
}
var heading = document.querySelector("h1")

setTimeout(function(){
    heading.style.color = "crimson"
}, 1000)
setTimeout(function(){
    heading.style.color = "black"
}, 2000)
setTimeout(function(){
    heading.style.color = "crimson"
}, 3000)
setTimeout(function(){
    heading.style.color = "black"
}, 4000)
setTimeout(function(){
    heading.style.color = "crimson"
}, 5000)
setTimeout(function(){
    heading.style.color = "black"
}, 6000)
setTimeout(function(){
    heading.style.color = "crimson"
}, 7000)
setTimeout(function(){
    heading.style.color = "black"
}, 8000)