var counter =0;
$(window).scroll(function(){
  var p = $(this).scrollTop();
   if(p > counter){
      $(".m").addClass("sticky");
   }
   else{
      $(".m").removeClass("sticky");
   }
   counter = p;
});