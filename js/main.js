/*global $, jquery, alert, console*/
$(document).ready(function () {
    
    'use strict';
    
    
    //FOR NAVBAR RESPONSIVE
    if($(window).width() <= 990 ){
        
    $('.nav .icon-nav, .nav ul li a ').click(function () {
            $('.nav-links').animate({
                "height" : "toggle"
    
            });
        });
    }

    //FOR ANIMATION NAVNAR
    
    $(window).on("scroll",function(){
        if( $(window).scrollTop() == 0  && $(window).width() < 990) {
            
            $('.nav').css({
                "height":"70px",
            })
            $('.nav .nav-links').css({
                "top":"70px",
            })
        }else{
            $('.nav').css({
                "height":"60px",
            });
            $('.nav .nav-links').css({
                "top":"60px",
            })
        }
    });
    $(window).on("scroll",function(){
        if( $(window).scrollTop() == 0  && $(window).width() > 990) {
            $('.nav').css({
                "paddingTop":"26px",
                //"paddingBottom":"250px",
                "background": "transparent" ,
                "height":"70px",
            })
            $('.nav .logo img').css({
                "marginTop":"0",
                "height":"2rem",
            })
        }else{
            $('.nav').css({
                "paddingTop":"10px",
                //"paddingBottom":"0px",
                "background": "#fff" ,
                "height":"60px !important",
            })
            $('.nav .logo img').css({
                "marginTop":"9px",
                "height":"1.5rem",
            })
        }
    });
    
    
});