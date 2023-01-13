    const click = document.querySelector(".fa-bars");
    const cls = document.querySelector('.fa-window-close');
    let handle = false;
		click.addEventListener('click',function(){
      document.getElementById('menu').style.width = '240px';
		});
    cls.addEventListener('click', function(){
        document.getElementById('menu').style.width = '0px';
    });

    const search = document.querySelector(".fa-search");

    const form = document.querySelector("form");

    search.addEventListener('click', function(){
        form.classList.toggle('myform');
    });

fetch('http://localhost/wordpress/wp-json/wp/v2/posts')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
