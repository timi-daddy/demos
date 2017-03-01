var tab = document.querySelector('.tab')
var content = document.querySelector('.content')

tab.addEventListener('click', function(event) {
  var clickNode = event.target
  function clearActiveItems(node) {
    [].forEach.call(node.children, function(element) {
      element.classList.remove('active')
    })
    // for (var i = 0; i < node.children.length; i++) {
    //   node.children[i].classList.remove('active')
    // }
  }
  if (clickNode.tagName.toLowerCase() === 'li') {
    clearActiveItems(tab)
    clickNode.classList.add('active')
    var index = [].indexOf.call(tab.children, clickNode)
    clearActiveItems(content)
    content.children[index].classList.add('active')
  }
})