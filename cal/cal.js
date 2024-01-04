
 var blue = document.getElementById('cal');
 var info = document.getElementById('info');

function changeCalb(){
    blue.style.backgroundColor='blue';
    
}
function changeCalr(){
    blue.style.backgroundColor='red';
    
}
function changeCalg(){
    blue.style.backgroundColor='green';
    
}
function changeInfo(){
    info.style.visibility = 'visible';
    blue.style.visibility = 'hidden';
}

function norm(){
     info.style.visibility = ' hidden';
    blue.style.visibility = 'visible';

}