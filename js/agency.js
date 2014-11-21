
// Page scrolling feature - requires jQuery Easing plugin
// Little rubbery effect when scrolling to anchors
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Highlight the individual top menus(teal) scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Hamburger menu toggle to view/unview
// Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//     $('.navbar-toggle:visible').click();
// });