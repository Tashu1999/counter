const Title = document.querySelector('#title');
const btnIncrement = document.querySelector('#increment');
const btnReset = document.querySelector('#reset');
const btnDecrement = document.querySelector('#decrement');

let integer = 0;
btnIncrement.addEventListener('click',()=>{
   integer ++;
   Title.textContent = integer;
});

btnReset.addEventListener('click',()=>{
    integer = 0;
    Title.textContent = integer;
 });

 btnDecrement.addEventListener('click',()=>{
    integer --;
    Title.textContent = integer;
 });


