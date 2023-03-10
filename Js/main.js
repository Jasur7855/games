let tab;
let text;
window.onload = function(){
    tab =document.querySelectorAll('.tab')
    text= document.querySelectorAll('.weWorkingText')

    tabhidden();
}
function tabhidden(){
    for(let i =0; i<text.length; i++){
        text[i].classList.add('hidden')
        text[i].classList.remove('show')
        tab[i].classList.remove('active')
    }
}

document.getElementById('weWorkingTabs').onclick = function (e){
    let target = e.target;
    tabhidden()
    // console.log(target)
    for(let i=0 ; i<tab.length; i++ ){
        if(tab [i]==target){
            text[i].classList.add('show');
            text[i].classList.remove('hidden')
            tab[i].classList.remove('active');
        }
    }
}