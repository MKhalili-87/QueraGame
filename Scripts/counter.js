 let counter=3;

setInterval(() => {
 if(counter>1){
    counter --;
    document.getElementById("sec-number").innerHTML = counter;
 } else{
    window.location.replace("game.html");
 }
 
},1000);
