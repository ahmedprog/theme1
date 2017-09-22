$(document).ready(function(){
    
  $("#loading").fadeOut(2000,function(){
      $("body").css("overflow","auto");
      $(this).remove();
  });
    
    
$("#coder li a").click(function(){
    $("#coder li ,#coder li a").removeClass();
    $(this).addClass('active');
    $(this).parent().addClass('current');
});
    
    
  var scrollbutton = $("#scrol-top");
  $(window).scroll(function(){
      if($(this).scrollTop() >= 1000)
      {
        scrollbutton.show();
      }else {
        scrollbutton.hide(700);
      }
    });
    //click on button to scroll top
    scrollbutton.click(function(){
      $("body").animate({scrollTop:0},800);
    });

    $("#navbar a").click(function(){
      $('body').animate({
        scrollTop:$($.attr(this , 'href')).offset().top},2000);
        return false;
      });
  });
