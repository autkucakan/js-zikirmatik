let count = 0;
const increase = document.getElementById('incBtn');
const decrease = document.getElementById('decBtn');
const reset = document.getElementById('resetBtn');
const number = document.getElementById('numberLabel');

increase.onclick = function(){
  count++;
  number.textContent = count;
  if (count == 7) {
    number.textContent = 'SELINIM';
  }
}

decrease.onclick = function(){
  count--;
  number.textContent = count;
  if (count == 7) {
    number.textContent = 'SELINIM';
  }
}

reset.onclick = function(){
  count = 0;
  number.textContent = count;
}

