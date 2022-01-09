let head = document.querySelector('header');

console.log(head);

window.onscroll = function (){
    if (window.scrollY >= 300) {
        head.style.position = "fixed";
        head.style.backgroundColor = 'rgba(0,0,0,0.5)'
    }else{
        head.style.backgroundColor = "transparent";
    }
}
////////////////

let dis = document.getElementById('dis');

if (dis.innerHTML.length >= 30) {
    for (let i = 0; i < dis.length; i++) {
        dis.style.display = 'none';
    }
}