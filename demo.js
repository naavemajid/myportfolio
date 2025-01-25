const recommendationMessage = document.getElementById('message');
const submitMessage = document.getElementById('submit')
const getParentTag = document.getElementById('recommended');
const successMessage = document.getElementById('successMessage');
const okButton = document.getElementById('okButton')

submitMessage.addEventListener('click', (e)=>{
e.preventDefault();

let div = document.createElement('div')
let textNode = document.createTextNode(`" ${recommendationMessage.value}  "`)
div.appendChild(textNode);
getParentTag.appendChild(div)
recommendationMessage.value = ''
successMessage.style.display = 'block'

okButton.addEventListener('click', ()=>{
    successMessage.style.display = 'none'
})
})

