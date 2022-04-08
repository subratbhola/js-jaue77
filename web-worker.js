var i = 0;

function returnValue() {
  postMessage(i++);
  setTimeout("returnValue()",500);
}

returnValue();

// setInterval(function () {
//  returnValue()
// },1000)