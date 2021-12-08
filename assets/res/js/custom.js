$("#menu-escola").click(function(){
    $(".navbar-header").toggleClass("active");
});
 
$(function() {
    $("li").on("click", function(e) {  // See here, i have our selector set to "li", so this jQuery object will grab all li tags on the page
        $(this).toggleClass("active");
    });
})