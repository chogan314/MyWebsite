$(document).ready(function() {
    $('#index li>ul').parent().click(function() {
        if ($(this).hasClass("show-children")) {
            $(this).removeClass("show-children");
        } else {
            $(this).addClass("show-children");
        }
    });
});