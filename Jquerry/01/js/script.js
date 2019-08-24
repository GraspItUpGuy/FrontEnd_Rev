
$(document).ready(()=>{
    
  $("#btn").click(()=>{
      console.log("hide button clicked")
      //$("p#my").hide();
      //$("p:first").hide();
      
     // $("#h1").css("color", "white");
      //$("#h1").hide();
  });

  $("#btn2").click(()=>{
    console.log("Un-hide button clicked")
    $("p").show();
    $("#h1").show();
  })
});