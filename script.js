$(document).ready(function(){
    $("a").hover(function(){
        $(this).css("color", "grey");
      },
    function(){
        $(this).css("color", "white");
      });
  });

$(document).ready(function(){
    $(".logo").click(function(){
      window.location = "Home.html";
    });
});

var stopper = true;
$(document).ready(function(){
    $("#map").hover(function(){
      if (stopper == true){
      alert("click image to navegate to google maps!")
      stopper = false;
    }
    });
});

$(document).ready(function(){
    $("#map").click(function(){
      window.location = "https://www.google.com/maps/place/204+Brower+Ln,+Hillsborough+Township,+NJ+08844/@40.4996035,-74.6335991,640m/data=!3m2!1e3!4b1!4m5!3m4!1s0x89c3ea31b5ca8dd3:0x6f0fcb4f6e642342!8m2!3d40.4996035!4d-74.6314104";
    });
});
