//Dashboard table
$(document).ready(function () {
    $('#wrapper').toggleClass("active");
});

$("#menu-toggle").click(function(e) {
    e.preventDefault("active");
    $("#wrapper").toggleClass("active");
});

//registration Page 
$(document).ready(function () {
    $("#matNum").show();
    $("#customRadio").click(function () {
        $("#matNum").hide();
    });
    $("#customRadio2").click(function () {
        $("#matNum").show();
    });
});


