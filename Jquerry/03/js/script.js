// alert("connected");



// $(()=>{
//  $(".btn1").click(()=>{
//      alert("HTML is: " + $("h1").text());
//      $("h1").text("Changed by Jquerry");

//  })
// });

$(()=>{
    $(".btn1").click(()=>{
       // alert("HTML is: " + $("h1").text());
        $("h1").text((i,originalText)=>{
            return originalText + "via LCO"
        });
   
    })
   });

$(()=>{
    $(".btn2").click(()=>{
        alert("HTML is: " + $("h1").html());
        $("h1").html ("<h1>Done by Jquerry<h1>");
    })
   });

   $(()=>{
    $(".btn3").click(()=>{
        // alert("Value is: " + $("input").val());
        $("input").val("Kannedda");
    })
   });

   
   (()=>{ $(".btn4").click(()=>{
        // alert("Attribute is: " + $("a").attr("href",()=>{
        //     $(".btn4").slideUp(10000);
        // }));
        $("a").attr("href","https://yahoo.com");
        
    });
})
 
