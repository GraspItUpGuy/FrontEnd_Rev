// alert("connected");

var keyList = "qwertyuiopasdfghjklzxcvbnm1029384756!@#$%ˆ&><?/[]{}˜`*";
var temp = "";

var GenBtn = document.getElementById("GenBtn");

var genPassword = function(passLength){
    for(let i =0; i< passLength; i++){
        temp += keyList.charAt(Math.floor(Math.random() * keyList.length));
    }
    return temp ;

}

var length = document.getElementById("length").value;
console.log(length)


GenBtn.onclick = ()=>{
   temp = "";
    var output =  document.getElementById("output") ;
    
    console.log("btn pressed");
    var pass = genPassword(length);
    console.log(pass);
   
    output.value = pass;
   
}
