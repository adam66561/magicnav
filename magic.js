var togglebutton = document.querySelector('.toggle');

var magicmenu = document.querySelector('.menu');

togglebutton.onclick = function magicnav(){
    togglebutton.classList.toggle('active');
    magicmenu.classList.toggle('active');
}

var list = document.querySelectorAll('li');
function activegreen(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => {
item.addEventListener('click',activegreen)});

