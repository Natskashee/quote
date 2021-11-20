/*const loader = document.querySelector('.container')

window.addEventListener('load' , () => {
       loader.classList.add('loading');
}) 

var slideIndex = 0;

document.getElementsByClassName('container')[0].style.display = "flex";
var i = 0;
function next(id){
    document.getElementsByClassName('container')[i].style.display = "none";
    document.getElementsByClassName('container')[i++].style.display = "flex";
}

function prev(id){
    document.getElementsByClassName('container')[i-1].style.display = "none";
    document.getElementsByClassName('container')[i].style.display = "flex";
}
*/
const btnext = document.getElementsByClassName('next');
document.getElementsByClassName('container')[0].style.display = "flex";

var i = 0;
function next(click){
    document.getElementsByClassName('container')[i].style.display = "none";
    document.getElementsByClassName('container')[i++].style.display = "flex";
} 


function prev(click){
    document.getElementsByClassName('container')[i-1].style.display = "flex";
    document.getElementsByClassName('container')[i].style.display = "none";
}