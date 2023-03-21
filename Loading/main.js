var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
box1.style.visibility = "visible";

var change = (boxNo, time) => (setInterval(() => {
    if (window.getComputedStyle(boxNo).visibility === "visible") {
        boxNo.style.visibility = "hidden";
    }
    else {
        boxNo.style.visibility = "visible";
    }
}, time))

change(box1, 300);
change(box2, 400);
change(box3, 500);