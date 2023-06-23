// [3] Javascript Demo
let code = document.getElementsByTagName('code');

let button = document.createElement("button")
button.innerHTML = "change contents"

code.item(0).parentNode.insertBefore(button, null)

button.addEventListener('click', function(e){
  e.preventDefault()
  code.item(0).innerHTML = "changed"
})