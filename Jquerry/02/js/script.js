// alert("connected");
// $("h1").click(()=>{
//         //$("#img").toggle(1000);
//        // $("#img").fadeOut(1000);
//         // $("#img").fadeToggle(1000);
//         //$("#img").slideUp(1000);
//         //$("#img").slideToggle(1000);
//         $("#img").animate({
//           height : '+=100px',
//           width : "+=30px"
//         },100, ()=>{
//           alert("animation complete")
//         });
        

//     });
    
$(()=>{
  $('h1').click(()=>{
    $("img").css('background-color', 'purple')
    .fadeOut(1000);
  })
})