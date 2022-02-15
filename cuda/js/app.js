const menu = document.querySelector('.fa-bars');

const menu_list = document.querySelector('.menu');

const cls = document.querySelector('.fa-window-close');

menu.addEventListener('click',function(){
	menu_list.classList.toggle('test');
})

cls.addEventListener('click', function(){
	menu_list.classList.toggle('test');
})