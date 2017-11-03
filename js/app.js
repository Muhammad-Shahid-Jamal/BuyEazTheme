jQuery(document).ready(function($){
    $(".navbar-bars-btn").on("click",function(){
        $(this).toggleClass("change-icon");
        $(".side-pannel-bar").toggleClass("close-side-bar");
    });
});