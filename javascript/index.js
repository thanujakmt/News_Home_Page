
document.getElementById('menu_list').style.display = 'none';
document.querySelector('.close').style.display = 'none';

var menu_btn = document.querySelector('.menu');

menu_btn.addEventListener('click', ()=>{
    document.getElementById('menu_list').style.display = 'block';
    document.querySelector('.close').style.display = 'block';

});

var close_btn = document.getElementById('close');

close_btn.addEventListener('click', ()=> {
    document.getElementById('menu_list').style.display = 'none';
    document.querySelector('.close').style.display = 'none';
})