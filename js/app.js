    const click = document.querySelector(".fa-bars");
    const cls = document.querySelector('.fa-window-close');
    let handle = false;
		click.addEventListener('click',function(){
      document.getElementById('menu').style.width = '240px';
		});
    cls.addEventListener('click', function(){
        document.getElementById('menu').style.width = '0px';
    })