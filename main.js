const sub = document.getElementById('sub');
const con = document.getElementById('container');
const card = document.getElementById('card-sub');

sub.addEventListener('click', handleClick)

function handleClick(e){
    e.preventDefault(); 
    con.classList.add('card-sub');
    card.style.display = 'block';
    
    console.log(sub);
}