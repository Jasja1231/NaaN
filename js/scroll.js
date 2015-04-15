$(document).ready(function() {
    $('.resume').on('click', function(event) {
        event.preventDefault();
        var $anchor = $('#resume');
        $('html, body').animate({
            scrollTop: $($anchor).offset().top
        }, 2000);
    });
});

$(document).ready(function() {
    $('.projects').on('click', function(event) {
        event.preventDefault();
        var $anchor = $('#projects');
        $('html, body').animate({
            scrollTop: $($anchor).offset().top
        }, 2000);
    });
});

$(document).ready(function() {
    $('.scills').on('click', function(event) {
        event.preventDefault();
        var $anchor = $('#scills');
        $('html, body').animate({
            scrollTop: $($anchor).offset().top
        }, 2000);
    });
});
