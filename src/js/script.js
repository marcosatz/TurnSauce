$(document).ready(function() {
        $(".btn-menu").click(function() {
                $(this).toggleClass("on");
                $(".menu").fadeToggle();
                $('.btn-menu .two').toggleClass('red');                
        });

        $('.nav-menu a').click(function() {
                $('.nav-menu a').removeClass('active');
                $(this).addClass('active');
        });

        
        $(window).on('resize', function() {
                if ($(this).width() < 768) {
                        $('.menu').hide();
                } else {
                        $('.menu').show();
                }
        });
});