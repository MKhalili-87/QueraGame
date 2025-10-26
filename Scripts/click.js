var modal=document.getElementById("mymodal");
const objectclicker= document.querySelectorAll("app-object img");
const audio=document.querySelector("audio");
const yes=document.getElementById("yes");
const no=document.getElementById("no");
const next=document.getElementById("next");
const dismiss=document.getElementById("dismiss");
const replay=document.getElementById("replay");
const exit=document.getElementById("exit");
const volume=document.getElementById("volume-up");
const muteVolume=document.getElementById("volume-off");
const container=document.getElementById("image-container");
const images=[
    "/assets/images/Diamond turquoise.svg",
    "/assets/images/Gemstone lime.svg",
    "/assets/images/Gemstone orange.svg",
    "/assets/images/Gemstone pirple.svg",
    "/assets/images/Gemstone red.svg",
    "/assets/images/Portal blue.svg",
    "/assets/images/Stone gold.svg"
];

const width = window.innerWidth;
const height = window.innerHeight;

audio.muted=false;

volume.onclick= function(){
    volume.style.display="none";
    muteVolume.style.display="block";
    audio.muted=true;
}

muteVolume.onclick= function(){
    volume.style.display="block";
    muteVolume.style.display="none";
    audio.muted=false;
}

yes.onclick = function(){
    window.location.replace("index.html")
}

no.onclick = function(){
    modal.style.display = "none";
}

replay.onclick = function(){
    window.location.replace("counter.html")
}

dismiss.onclick = function(){
    window.location.replace("index.html")
}

let index=0;
let point=document.getElementById("point").innerText;
const objectInterval=setInterval(()=>{

    images.forEach(src=>{
        const img=document.createElement("img");
        img.src=src;
        const x=Math.floor(Math.random()*(1500-500));
        const y=Math.floor(Math.random()*100);
        img.style.left=`${x}px`;
        img.style.top=`${y}px`;
                

        img.addEventListener("click",()=>{
            img.remove();
            +point++;
            document.getElementById("point").innerText=point;
            document.getElementById("result-point").innerText=point;
            if(point>103){
                modal.style.display="block";
                modalContentNext.style.display="block";
                modalContentExit.style.display="none";
                modalContentReplay.style.display="none";
            }
                    

        })
        container.appendChild(img);
    })
    index=index+7;

    if(index>100){
        index=0;
        clearInterval(objectInterval);
            
    }
        
},3000);





