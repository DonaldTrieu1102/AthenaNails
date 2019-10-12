$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 900
    });
    $(".owl-prev").html('<i class="fa fa-chevron-circle-left fa-2x"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-circle-right fa-2x"></i>');
});

