$(document).ready(function(){

  var content = "My New Awesome Content";

  $(".panel-button").on("click",function(){
    var panelId = $(this).attr("data-panelid");
    $("#"+panelId).toggle();
    $("#"+panelId+" .card-body").html(content);
  });
});

/*
$(document).ready(function(){
  $(".list").on("click",function(){

    //below functions are used when li selector is used
    //$(this).next().hide();
    //$(this).next().remove();
    //$(this).siblings().remove();
    ///$(this).removeClass("special");
    //$(this).siblings().addClass("special");

    //below functions are used when .list selector is used
    //$(this).parent().addClass("special");
    //$(this).find("li").filter(":first").addClass("special");
    //$(this).find("li").filter(".special").remove();
    $(this).find(".special").remove();
  });
});*/


$(function(){
  $("li").on("click",function(){
    $(this).hide();
    if($(this).is(".special")){
      alert("Special");
    }
  });
});

/*
$(document).ready(function(){
  $(".sublist li").on("click",function(){
    if($(this).parent().is(".sublist")){
      $(this).hide();
    }
  });
});*/
