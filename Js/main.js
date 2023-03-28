let tab;
let text;
let work;
let tabs= document.getElementById('tabs');
let index =1;
window.onload = function(){
    tab =document.querySelectorAll('.tab')
    text= document.querySelectorAll('.weWorkingText')
    work=document.querySelector('#weWorkingTabs')
    hidden();
    text[0].classList.add('show')
    tab[0].classList.add('active')
    
}
function hidden(){
    for(let i =0; i<text.length; i++){
        text[i].classList.add('hidden')
        tab[i].classList.remove('active')
        text[i].classList.remove('show')
    }
}
tabs.onclick = function (e){
    let target = e.target;
    hidden()
    console.log(target)
    for(let i=0 ; i<tab.length; i++ ){
        if(tab[i]==target){
            text[i].classList.add('show');
            text[i].classList.remove('hidden')
            tab[i].classList.add('active');
        }
    }
}

// CArusel
slider(index)
function slider(n){
    let slider = document.getElementsByClassName('carusel_slider');
    let circle = document.getElementsByClassName('circle');
    if(n>slider.length){
        index = 1;
    }
    if(n<1){
        index= slider.length
    }
    for( let i =0; i<slider.length;i++){
        slider[i].style.display = 'none'
    }
    for( let i=0; i<circle.length;i++){
        circle[i].className = circle[i].className.replace('active','')
    }
    slider[index-1].style.display='block'
    circle[index-1].className+=' active'
}
function circle(n){slider(index= n)}

// Accardion















// Buttons color
function main(){
    document.getElementsByClassName("main")[0].style.backgroundColor='#E1670E';
}
function first(){
    document.getElementsByClassName('btnFirst')[0].style.backgroundColor='#E1670E';
    document.getElementsByClassName('btnFirst')[0].style.border="1px solid #E1670E";
}
function second(){
    document.getElementsByClassName('btnSecondary')[0].style.backgroundColor='#000000';
    document.getElementsByClassName('btnSecondary')[0].style.border="2px solid #000000";
    document.getElementsByClassName('btnSecondary')[0].style.color="#ffffff";
}
function btn(){
    document.getElementsByClassName('btn')[0].style.backgroundColor='#E1670E';
    document.getElementsByClassName('btn')[0].style.border="3px solid #E1670E";
    
}
function search(){
    document.getElementsByClassName('headerSearch')[0].style.display='flex'
}
function closeSearch(){
    document.getElementsByClassName('headerSearch')[0].style.display='none'
}
function menu(){
    document.getElementsByClassName('hiddenMenu')[0].classList.toggle('show')
}
document.getElementsByClassName("menu")[0].addEventListener('click', menu )
document.getElementsByClassName("main")[0].addEventListener('click', main);
document.getElementsByClassName('btn')[0].addEventListener('click', btn );
document.getElementsByClassName('btnFirst')[0].addEventListener('mouseup',  first);
document.getElementsByClassName('btnSecondary')[0].addEventListener('click', second);
document.getElementsByClassName("search")[0].addEventListener('click',search )
document.getElementsByClassName('headerClose')[0].addEventListener('click', closeSearch)