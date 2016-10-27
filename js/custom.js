

/*EXPAND MENU INIT*/
$(document).ready(function() {

    var navItemL = $(".navItem").length;

    var expandW = 38;
    TweenMax.set($(".navItem"), {
        width: 100 / navItemL + '%'
    });
    $(".navItem").hover(over, out);

    function over() {
        TweenMax.to($(this), 0.8, {
            width: expandW + '%'
        });
        TweenMax.to($(this).siblings(), 0.8, {
            width: (100 - expandW) / (navItemL - 1) + '%'
        })
    }

    function out() {
        TweenMax.to($(".navItem"), 0.8, {
            width: 100 / navItemL + '%',
            ease: Back.easeOut
        })
    }

});