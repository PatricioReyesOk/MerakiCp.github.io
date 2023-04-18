var header = document.getElementById('header')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backdropFilter = 'blur(15px)'
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
 
    }else{
        header.style.backgroundColor = 'transparent'
        
    }

})