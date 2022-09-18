

function linkOver(el){
    el.style.backgroundColor = "#f5f2f5";
    
}

function linkOut(el){
    el.style.backgroundColor = "white";
}

function activate(sectionName){
    const listActive = document.getElementsByClassName('active');
    listActive[0].style.display = 'none';
    listActive[0].classList.remove('active');
    var divID = document.getElementById(sectionName);
    divID.classList.add('active');
    divID.style.display = 'block';
}

$('.nav-link').click(function(){
  $('.navbar-toggler').click();
});
