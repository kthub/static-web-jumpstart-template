
var copy = function(target) {
    var textArea = document.createElement('textarea')
    textArea.setAttribute('style','width:1px;border:0;opacity:0;')
    document.body.appendChild(textArea)
    textArea.value = target.innerHTML
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
}

var code = document.getElementsByTagName('code');
//alert(code.item(0));

var button = document.createElement("button")
button.className = "btn btn-sm"
button.innerHTML = "copy"
code.item(0).parentNode.insertBefore(button, null)
button.addEventListener('click', function(e){
  e.preventDefault()
  copy(code.item(0))
})

