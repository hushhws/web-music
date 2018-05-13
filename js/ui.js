// 轮播图组件
$(document).ready(function () {
    var mySwiper1 = new Swiper ('#swiper1', {
        loop : true,//开启循环
        pagination : '.swiper-pagination', //分页器
        paginationClickable :true, //点击分页按钮切换swiper
        preventClicks : false,//默认true，防止触摸时触发链接跳转
        autoplay: 2000,//可选选项，自动滑动
        autoplayDisableOnInteraction : false,//触摸后继续autoplay
        //initialSlide :1,//设置初始页面
        direction : 'horizontal',//滑行方向 （vertical）
        speed: 1000,
        grabCursor : true,//鼠标切换成手形态
        nextButton: '.swiper-button-next',     //前进后退按钮
        prevButton: '.swiper-button-prev',
    })

    var mySwiper2 = new Swiper ('#swiper2', {
        preventClicks : false,//默认true，防止触摸时触发链接跳转
        //effect : 'coverflow', //3d翻转
        slidesPerView : 3,
        spaceBetween: 100,
        slidesPerGroup: 3,
        centeredSlides : false,
        nextButton: '.swiper-button-next',     //前进后退按钮
        prevButton: '.swiper-button-prev',
    })

    $('body').UiBackTop();

});


//返回顶部组件
$.fn.UiBackTop=function () {
    var ui= $(this),
        topBtn=$('<a class="ui-top" href="#7"></a>'),
        winHeight=$(window).height();
    ui.append(topBtn);
    $(window).scroll(function () {
        var scrollHeight=$(window).scrollTop();
        if(scrollHeight>450){
            topBtn.show();
        }else {
            topBtn.hide();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            'scrollTop':0
        },300)
    })
}


