let mySwiper = new Swiper('.model_list', {
    autoplay: {
        delay: 2000,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        600: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        }
    }
});

$('.ham').click(function(e){
    e.preventDefault();
    $(this).toggleClass('close');
})

$(function(){
    $(".ham").on('click',function(event){
        event.preventDefault();

        $(this).toggleClass('active');
        $('.side').toggleClass('visible');
    })
})