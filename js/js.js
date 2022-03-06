document.onreadystatechange = function(){
    // sticky navbar
document.onscroll = function(){
    if(window.pageYOffset>180){
        document.getElementsByClassName('nav-sticky')[0].style.display = 'flex';
    }else{
        document.getElementsByClassName('nav-sticky')[0].style.display = 'none';
    }
}

//nav btn controls
document.getElementById('navout').addEventListener('click', function(){
    document.getElementById('menubar').style.display = 'flex';
    document.getElementById('navout').style.display = 'none';
    document.getElementById('navin').style.display = 'flex';
    });
    document.getElementById('navin').addEventListener('click', function(){
    document.getElementById('menubar').style.display = 'none';
    document.getElementById('navout').style.display = 'flex';
    document.getElementById('navin').style.display = 'none';
    })

}

