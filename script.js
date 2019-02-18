var x1,x2,x3,x
var y1,y2,y3,y
var z1,z2,z3,z
var d1,d2,d3,d
var X,Y,Z,i,max=8;
window.onload=(function()
{
	var show;
	var boxes=document.getElementsByClassName("defaultTextBox");
	for (var i = boxes.length - 1; i >= 0; i--) {
		boxes[i].style.width=window.innerWidth/10+"px";
	}
}
);
function setv()
{
  max=prompt("Enter number of iterations:");
}

function getvalue()


{
var x1=document.querySelector("#x1").value;
var y1=document.querySelector("#y1").value;
var z1=document.querySelector("#z1").value;
var d1=document.querySelector("#d1").value;
var x2=document.querySelector("#x2").value;
var y2=document.querySelector("#y2").value;
var z2=document.querySelector("#z2").value;
var d2=document.querySelector("#d2").value;
var x3=document.querySelector("#x3").value;
var y3=document.querySelector("#y3").value;
var z3=document.querySelector("#z3").value;
var d3=document.querySelector("#d3").value;
var x_p=0;var y_p=0;var z_p=0;i=0;

var div=document.getElementById("display")
div.innerHTML="";
x=0;y=0;z=0;


while(i<max)
{
i++;
X=(d1-(y1*y)-(z1*z))/x1;
Y=(d2-(x2*x)-(z2*z))/y2;
Z=(d3-(y3*y)-(x3*x))/z3;
div.innerHTML+="     X"+i+"= "+X+"     Y"+i+"= "+Y+"     Z"+i+"= "+Z+"<br><hr>";
x=X;y=Y;z=Z;

}
}