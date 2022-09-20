$("#lightSlider").lightSlider({
    rtl:true,
    item: 4,
    slideMargin: 10,
    loop: true,
    pager: false,
    auto: true,
    pause: 3000,
    enableTouch: false,
    enableDrag: false,
    responsive: [

        {
            breakpoint: 1200,
            settings: {
                item: 3,
                slideMargin: 7,

            }
        },
        {
            breakpoint: 768,
            settings: {
                item: 2,
                slideMargin: 7,

            }
        }
        , {
            breakpoint: 576,
            settings: {
                item: 1,

            }
        }
    ]

});