var red=document.querySelector(".red");
var cyan=document.querySelector(".cyan");
var violet=document.querySelector(".violet");
var orange=document.querySelector(".orange");
var pink=document.querySelector(".pink");
var center=document.querySelector(".center");

var getColor = (sel)=>{
    return window.getComputedStyle(sel).backgroundColor;
};

var colorCenter = (colorGiven)=>(
    colorGiven.addEventListener('mouseenter',()=>{
        return center.style.background=getColor(colorGiven);
    })
);

colorCenter(red);
colorCenter(cyan);
colorCenter(violet);
colorCenter(orange);
colorCenter(pink);