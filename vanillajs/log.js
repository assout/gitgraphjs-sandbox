#!bin/node

var count = 0;

var timer = setInterval(function(){
  //do something
  console.log("do something");
  if(count >= 9){
    clearInterval(timer);
  }
  count++;
},1000);
