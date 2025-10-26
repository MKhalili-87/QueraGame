var modal=document.getElementById("mymodal");
var btn=document.getElementById("modal-test");
var modalContentExit=document.getElementById("modal-content-exit")
var modalContentReplay=document.getElementById("modal-content-replay")
var modalContentNext=document.getElementById("modal-content-next")

btn.onclick = function(){
    modal.style.display="block";
    modalContentExit.style.display="block";
    modalContentNext.style.display="none";
    modalContentReplay.style.display="none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const interval=setInterval(()=>{
  const objects=document.querySelectorAll(".app-object img");
  let heart=document.getElementById("lives").innerText;
  objects.forEach((object)=>{
    const top=object.getBoundingClientRect().top;
    if(top>=window.innerHeight-1){
        +heart--;
        document.getElementById("lives").innerText=Math.max(0,heart);
        object.style.display='none'
        if(heart<1){
            modal.style.display="block";
            modalContentReplay.style.display="block";
            modalContentExit.style.display="none";
            modalContentNext.style.display="none";
            clearInterval(interval);
        }
    }
    
  })
},100)
