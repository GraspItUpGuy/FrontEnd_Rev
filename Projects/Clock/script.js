// alert("connected");



var date, hours, minutes, seconds, clock ,colour;

function clockyFun(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();




if(hours <=9){
    hours = '0' + hours ;
}
if(minutes <=9){
    minutes = '0' + minutes;
}
if(seconds <=9){
    seconds = '0' + seconds;
}

clock = hours + ":" + minutes + ":" + seconds;
console.log(clock);
clr = "#" + hours + minutes + seconds;

document.getElementById("clock").innerHTML = clock;
document.body.style.backgroundColor = clr;

setTimeout(clockyFun, 1000);
}

clockyFun();









