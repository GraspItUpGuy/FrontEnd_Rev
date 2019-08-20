// alert("connected");
// var  str = "changed by script.js" 
// document.getElementById("test").innerHTML = str;

// var newList  = document.createElement("li");
// newList.innerHTML = "added via script";

// document.getElementById("change").appendChild(newList);

// var newText = document.createElement("p");
// newText.innerHTML = "Message using js";

// document.getElementById("change").appendChild(newText);

var btn = document.getElementById("btn");
btn.onclick = ()=>{
var x  = document.forms["myForm"];
var text = "";
var i;
for(i =0; i<x.length;i++){
    text += x.elements[i].value + " ";
}
document.getElementById("getValue").innerHTML = text;
}


var click =  document.getElementById("click");
click.onmouseover = ()=>{
    document.getElementById("changeColour").style.color = "red";
}


var divHoax = document.getElementById("divHoax");
divHoax.onmousedown = ()=>{
divHoax.style.backgroundColor = "yellow";
divHoax.innerHTML ="you clicked ModaFukka !!!"
}
divHoax.onmouseup =()=>{
    divHoax.style.backgroundColor = "blue";
    divHoax.innerHTML ="GO Away ModaFukka !!! !!!"
}


divHoax.onmouseover =()=>{
    divHoax.style.backgroundColor = "red";
    divHoax.innerHTML ="hover ModaFukka !!! !!!"
}
divHoax.onmouseleave =()=>{
    divHoax.style.backgroundColor = "pink";
    divHoax.innerHTML ="GO Away ModaFukka !!! !!!"
}
divHoax.onmousemove =()=>{
    divHoax.style.backgroundColor = "green";
    divHoax.innerHTML ="move ModaFukka !!! !!!"
}