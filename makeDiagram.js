// get the canvas element in html file 
let canvas=document.querySelector("canvas");
// get the div element with the class "container"
let container=document.querySelector(".container");
// get the div element with the class "holder"
let holder =document.querySelector(".holders");
// get the context of the canvas element to work with the graphic part of it.without this variable,you wont be able to work with canvas 
let c =canvas.getContext("2d");
// create a const to hold and set the color of the strokSyle method
const radarStrok="gray";
// set the with of the canvas tag depend on the div with the "container" class 
canvas.width=container.offsetWidth;
canvas.height=container.offsetHeight;
// set a background to the canvas element
canvas.style.background="white";
c.strokeStyle=radarStrok;
c.fillStyle=radarStrok;
// making the diagram with coonetcting a few lines 
c.beginPath();
c.moveTo(canvas.width/2,(canvas.height/2)-20);
c.lineTo((canvas.width/2)+20,(canvas.height/2)-5);
c.lineTo((canvas.width/2)+14,(canvas.height/2)+20);
c.lineTo((canvas.width/2)-14,(canvas.height/2)+20);
c.lineTo((canvas.width/2)-20,(canvas.height/2)-5);
c.lineTo(canvas.width/2,(canvas.height/2)-20);
c.stroke();
c.font = "10px Arial";
c.fillText("4",(canvas.width/2)+2,(canvas.height/2)-9);
c.closePath();
c.beginPath();
c.moveTo(canvas.width/2,(canvas.height/2)-40);
c.lineTo((canvas.width/2)+40,(canvas.height/2)-8);
c.lineTo((canvas.width/2)+24,(canvas.height/2)+40);
c.lineTo((canvas.width/2)-24,(canvas.height/2)+40);
c.lineTo((canvas.width/2)-40,(canvas.height/2)-8);
c.lineTo(canvas.width/2,(canvas.height/2)-40);
c.stroke();
c.font = "10px Arial";
c.fillText("8",(canvas.width/2)+2,(canvas.height/2)-30);
c.closePath();
c.beginPath();
c.moveTo(canvas.width/2,(canvas.height/2)-60);
c.lineTo((canvas.width/2)+60,(canvas.height/2)-11);
c.lineTo((canvas.width/2)+34,(canvas.height/2)+60);
c.lineTo((canvas.width/2)-34,(canvas.height/2)+60);
c.lineTo((canvas.width/2)-60,(canvas.height/2)-11);
c.lineTo(canvas.width/2,(canvas.height/2)-60);
c.stroke();
c.font = "10px Arial";
c.fillText("12",(canvas.width/2)+4,(canvas.height/2)-48);
c.closePath();
c.moveTo(canvas.width/2,(canvas.height/2)-80);
c.lineTo((canvas.width/2)+80,(canvas.height/2)-14);
c.lineTo((canvas.width/2)+44,(canvas.height/2)+80);
c.lineTo((canvas.width/2)-44,(canvas.height/2)+80);
c.lineTo((canvas.width/2)-80,(canvas.height/2)-14);
c.lineTo(canvas.width/2,(canvas.height/2)-80);
c.stroke();
c.font = "10px Arial";
c.fillText("16",(canvas.width/2)+4,(canvas.height/2)-70);
c.closePath();
c.moveTo(canvas.width/2,(canvas.height/2)-100);
c.lineTo((canvas.width/2)+100,(canvas.height/2)-17);
c.lineTo((canvas.width/2)+54,(canvas.height/2)+100);
c.lineTo((canvas.width/2)-54,(canvas.height/2)+100);
c.lineTo((canvas.width/2)-100,(canvas.height/2)-17);
c.lineTo(canvas.width/2,(canvas.height/2)-100);
c.stroke();
c.font = `10px Arial`;
c.fillText("20",(canvas.width/2)+4,(canvas.height/2)-89);
c.closePath();
c.beginPath();
// here you can set the scaling tags 
c.beginPath();
c.fillStyle="black"

c.font="15px Franklin Gothic Medium";
c.fillText("نمرات کلاسی دانش آموز",(canvas.width/2)+50,(canvas.height/2)-110);

c.font="15px Franklin Gothic Medium";
c.fillText("نمرات امتحانات",(canvas.width/2)+183,(canvas.height/2)-12);

c.font="15px Franklin Gothic Medium";
c.fillText("میزان حضور،غیبت و تاخیر",(canvas.width/2) +140  ,(canvas.height/2)+120);

c.font="15px Franklin Gothic Medium";
c.fillText("میزان فعالیت و تکالیف",(canvas.width/2)-10,(canvas.height/2)+120);

c.font="15px Franklin Gothic Medium";
c.fillText("میزان مشارکت",(canvas.width/2)-110,(canvas.height/2)-12);