import $ from 'jquery';

var sres = {
    desktopLg:         1680,
    desktopSm:         1280,
    desktopMin:        1024,
    preDesktopMin:     980,
    ipadMin:           736,
    middleDevice:      526,
    iphoneMin:         320,
}

$(function(){
    //Sidebar toggle
    $('#hideSidebarBtn').on('click', function () {
        $('aside').toggleClass('hidden');
    });

    //Independent scroll main column
    if ( $(window).width() > sres.desktopSm )
    {
        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) >= parseInt($('#asideInner').outerHeight()))
                $('#asideInner').not('.fixed').addClass("fixed");
            else
                $('#asideInner.fixed').removeClass("fixed");
        }
    }

    //Main menu sumenu expand
    $('.menu-item.sub').on('click', function () {
        $('.menu-item.sub.expand').not(this).removeClass('expand');
        $(this).toggleClass('expand');
        return false;
    });
});