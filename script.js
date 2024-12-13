var toggle = document.querySelector('.menu') 
var navbar = document.querySelector('.navbar-list') 

toggle.onclick=function(){
    navbar.classList.toggle('active')
    navbar.classList.toggle('width')

}