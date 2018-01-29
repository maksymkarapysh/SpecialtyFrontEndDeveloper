var goodsItem = document.getElementsByClassName("goods__item"),
      dropContainer = document.getElementsByClassName("bucket__container")[0],
      dragItems = document.getElementsByClassName("goods__list")[0],
      elementDrag;

window.addEventListener("load", function() {
    
  setDraggableAttr(goodsItem);
  
  addDnDHandlers(dragItems, dropContainer);
  
})

function setDraggableAttr(item) {
  for (var i = 0, len = item.length; i < len; i++) {
    item[i].setAttribute('id', "item" + i);
    item[i].setAttribute('draggable', true);
  }
}

function handleDragStart(e) {
  var item = e.target;
  item.style.border = "3px dotted #000"; 
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text", item.id);
  //console.dir(e);
}

function handleDragEnd(e) {
  var item = e.target;
  item.style.border = "";
};
function handleDragEnter(e) {
  var item = e.target;
  item.style.border = "3px solid red";
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

function handleDragLeave(e) {
  var item = e.target;
  item.style.border = "";
}

function handleDrop(e) {
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();
  var item = e.target;
  item.style.border = "";
  var id = e.dataTransfer.getData("text"); // получаем информации которая передавалась через операцию drag & drop 
    
  var elem = document.getElementById(id);
  elem.style.border = "";
  console.dir(id);
  // добавляем элемент в целевой элемент. Так как в DOM не может быть два идентичных элемента - элемент удаляется со своей старой позиции.
  elem.setAttribute('draggable', false);
  this.appendChild(elem);
  
  return false; 
}


function addDnDHandlers(elem, drop) {
    elem.addEventListener('dragstart', handleDragStart, false);
    drop.addEventListener('dragenter', handleDragEnter, false)
    drop.addEventListener('dragover', handleDragOver, false);
    drop.addEventListener('dragleave', handleDragLeave, false);
    drop.addEventListener('drop', handleDrop, false);
    elem.addEventListener('dragend', handleDragEnd, false);
  }