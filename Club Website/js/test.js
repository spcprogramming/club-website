function toggleMe(a){
    var e=document.getElementById(a);
    var i = document.getElementById(a + '_image');
    if(!e)return true;
    if(e.style.display=="none"){
        e.style.display="block"
        i.src = '';
    }
    else {
        e.style.display="none"
        i.src = '';
    }
    return false;
}