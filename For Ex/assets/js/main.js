const element = [
  {tag: 'p', text: 'Phrases 1'},
  {tag: 'div', text: 'Phrases 2'},
  {tag: 'footer', text: 'Phrases 3'},	
  {tag: 'section', text: 'Phrases 4'},
]

const container = document.querySelector('.container')

const div = document.createElement('div')

function myScope( ) {
  for ( let i = 0; i < element.length; i++) {
    let {tag, text} = element[i];
    let createTag = document.createElement(tag);
    //createTag.innerText += text;
    let createText = document.createTextNode(text);
    createTag.appendChild(createText);
    div.appendChild(createTag);
  }
  
  container.appendChild(div);
}

myScope( );
