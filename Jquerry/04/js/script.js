//  alert("connected");

$(()=>{
    $(".btn1").click(()=>{
        $("div").addClass("new");
    });
})
$(()=>{
    $(".btn2").click(()=>{
        $("div").toggleClass("new");
    })
})


