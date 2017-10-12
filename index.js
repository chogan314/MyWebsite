$(document).ready(function() {
    $('#index li>ul').parent().find(".index-entry").click(function() {
        if ($(this).parent().hasClass("show-children")) {
            $(this).parent().removeClass("show-children");
            $(this).parent().find("li").removeClass("show-children");
        } else {
            $(this).parent().addClass("show-children");
        }
    });
});