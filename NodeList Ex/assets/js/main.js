const paragraphs = document.querySelector('.paragraph');
const ps = paragraphs.querySelectorAll('p');


const bodyStyle = getComputedStyle(document.body);
const bodyBgColor = bodyStyle.backgroundColor;

for (let p of ps) {
  console.log(p);
  p.style.backgroundColor = bodyBgColor;
  p.style.color = '#fff';
}
console.log(bodyBgColor);





