_papersheet= $(".papersheet");
_trigger= $(".papersheet__trigger");


_trigger.click(function(){

  if (_papersheet.hasClass("opened")) {
    //$(this).removeClass("opened");
    $("body").stop().removeClass("opened");
    $(this).parent(".papersheet").stop().removeClass("opened");
    
  } else {
    //$(this).addClass("opened");
    $("body").stop().addClass("opened");
    $(this).parent(".papersheet").stop().addClass("opened");
    
  }

});