
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




    $(".card").on('mouseenter', function(){
        $(this).toggleClass("is-expandend");
        // $("body").toggleClass("is-expandend");
    })

    $(".card").on('mouseleave', function(){
        $(this).toggleClass("is-expandend");
        // $("body").toggleClass("is-expandend");
    })











    var tl1;
    var tl2;
    var ctl;
    var bgzoom;


    var clickGrid ;

    var gridItem = $( ".gridItem" );

    gridItem.click(function(event) {

        event.preventDefault();

        var currentPX = $(this).position().left;

        var wcX = window.innerWidth/2;
        var wcY = window.innerHeight/2;


        var pcX = $(this).parent().offset().left + $(this).parent().width()/2;
        var pcY = $(this).parent().offset().top + $(this).parent().height()/2;

        var ccX = $(this).offset().left + $(this).width()/2;
        var ccY = $(this).offset().top + $(this).height()/2;

        console.log(wcX +","+ wcY);
        console.log(pcX +","+ pcY);
        console.log(ccX +","+ ccY);












        // TweenMax.to($(this),1, {x:wcX-ccX, y:wcY-ccY,scale:2});


        // url = $(this).css('background-image').replace(/^url\(['"]?/,'').replace(/['"]?\)$/,'');
        // $('.gridItems').css('background-image', 'url(' + url + ')');
        // $('.gridItems').css('background-repeat', 'no-repeat');
        // $('.gridItems').css('background-position', 'center');



        // cache element in variable
        var $img = $('.gridItems');
        bgzoom = new TimelineMax({
          //reversed:true,
          paused:true,
          // repeat:-1,
          // yoyo:true,
        });

        // bgzoom.set($img,{backgroundSize:"0% 0%"}).to($img, 0.8, {backgroundSize: "auto 80%", ease: Power1.ease0ut}).play(); 




        var DW = $( document ).width();

        console.log(DW);

        var count=0;
        var gridPX;


        var gridOBJL = [];
        var gridOBJM = [];
        var gridOBJR = [];



        clickGrid = $(this);

        var otherGridItem = $(this).siblings();
        

        $.each(otherGridItem,function(){
            var gridPX = $(this).position().left;
            // console.log(gridPX);
            // console.log("index");
            count++;


            if (currentPX > gridPX) {

                gridOBJL.push($(this));

            }else {

                gridOBJR.push($(this));
            };


        });

        console.log(gridOBJL.length);



        tl1 = new TimelineMax({
          //reversed:true,
          paused:true,
          // repeat:-1,
          // yoyo:true,
        });

        tl1.staggerTo(gridOBJL, 0.8, {x:-DW, opacity:0 }, 0.02 ).play(); 


        tl2 = new TimelineMax({
          //reversed:true,
          paused:true,
          // repeat:-1,
          // yoyo:true,
        });

        tl2.staggerTo(gridOBJR, 0.8, {x:+DW, opacity:0 }, 0.02 ).play(); 



        ctl = new TimelineMax({paused:true,});
        ctl.to($(this),0.6, {x:wcX-ccX, y:wcY-ccY,scale:2.5,}).play()
        // .to($(this),0.8, {scale:2.5,ease: Elastic.easeOut.config(1, 0.3)}).play();
        $(this).toggleClass( "expandGrid" );

        if ($(this).hasClass( "expandGrid" )) {



        }




    });




    $(".fz").click(function (event) {

        tl1.reverse();
        tl2.reverse();
        ctl.reverse();
    })


    // TweenMax.fromTo([element1, element2], 1, {x:0}, {x:100});


























    // $( ".gridItem" ).each(function(item) {
    //     var px = $("item").position().left;
    //     console.log(px);
    // });









});