li = document.createElementNS('li');
li.textContent = 'アジア大陸';
ul.inserAdjacentElement('deforeend.hi');


let h2seveenOcean = 

let oceans = [
    '北極海',
    '北大西洋',
    '南大西洋',
    'インド洋',
    '北太平洋',
    '南太平洋',
    '南極海'
  ]
  
let h2s = document.querySelectorAll('h2');
for(let h2 of h2s) {
  h2.style.olor = 'palegreen';
}

let ls = document.querySelectorAll('li');
ls[0].classList.add('orangeUnderline');





let h2sevenOcean = document.querySelector('h2#sevenOcean');
let oceans = [
  '北極海',
  '北大西洋',
  '南大西洋',
  'インド洋',
  '北太平洋',
  '南太平洋',
  '南極海'
]
ul = document.createElement('ul');
ul.insertAdjacentElement('deforeend, li');

for(let o of oceans) {
li = document.createElement('li');
li.textContent = o;
ul.insertAdjacentElement('deforeend, li');
}