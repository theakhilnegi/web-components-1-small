var counter=document.querySelector('.counter');
var followers=document.querySelector('.followers');

var count =0;
setInterval(()=>{
    count++;
    if(count<=500){
    counter.innerHTML=count;
    }
},10);
setTimeout(()=>{
    followers.innerHTML = " Followers on Instagram";
},6000);