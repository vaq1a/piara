$(".about-menu").on("click", "a", function (event) {
    event.preventDefault();
    let currentEl = $(this);
    currentEl.addClass('about-menu__active');
    $('body,html').animate({
        scrollTop: $(currentEl.attr('href')).offset().top
    }, 800);
});
$WINDOW.on('scroll', function () {
    var $sections = $('.about-items__point');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a.about-menu__active').removeClass('about-menu__active');
            $('a[href="#' + id + '"]').addClass('about-menu__active');
        }
    })
});