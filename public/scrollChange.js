$(function () {
    $(document).scroll(function () {
        var $nav = $("ul");
  
        if ($(this).scrollTop() > 450){
            $("ul").css("background-color", "#27476E");
            $("ul").css("opacity", "0.9");
    
        } else {
            if (slideIndex === 3){
                $("ul").css("background-color", "#C0C0C0");
                $("ul").css("opacity", "0.7");
    
            } else {
                $("ul").css("background-color", "transparent");
                $("ul").css("opacity", "1.0");
            }
        }
    });
});