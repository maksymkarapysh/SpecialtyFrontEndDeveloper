function setArray(len) {
  var arr = [];
  for (var i = 0, l = len; i < l; i++) {
    var item = Math.floor(Math.random() * l);
    arr.push(item);
  }
  return arr;
}

function sortArray(arr) {
  var arrSorted = arr.sort( function(a, b) {
    return a - b;
  })
  return arrSorted;
}


addEventListener("message", function (e) {
  var unSort = setArray(e.data),
      sort = sortArray(unSort);
      postMessage(sort);
      // for (var i = 0, len = sort.length; i < len; i++) {
      //   postMessage(sort[i]);
      // };

}, false);
