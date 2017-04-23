function firstTask() {
  console.log('First task done!');
}

function secondTask() {
  console.log('Second task done!');
}

// setTimeout(firstTask, 2000);
// setTimeout(secondTask, 4000);

setTimeout(function() {
  console.log('First task done!'); 
  
  setTimeout(function () {

  }, 2000)

}, 2000);



