$(document).ready(function(){


     $(".container").on("click",'a',function(e){
       var tab = $(this).attr('href')
       $(".content").removeClass("active")
       $(tab).addClass("active")
     })
    })