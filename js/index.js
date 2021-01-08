const Mode = document.querySelector('#mode');

Mode.addEventListener('click', (e) => 
{
    e.preventDefault();
    document.body.classList.toggle('dark');
    document.querySelector('nav').classList.toggle('dark');
})

