var slideIndex = 0;

$(function carousel() {
    var i;
    var x = $(".slide");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";

    if (slideIndex === 3 && $(document).scrollTop() < 450){
        $("ul").css("background-color", "#C0C0C0");
        $("ul").css("opacity", "0.6");

    } else if ($(document).scrollTop() < 450){
        $("ul").css("background-color", "transparent");
        $("ul").css("opacity", "1.0");
    }

    setTimeout(carousel, 4000); // Change image every 2 seconds
});
