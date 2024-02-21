// 스크롤 시 header이벤트
function headerScroll(){
    $(window).on('scroll', function(){
        let scrT = $(window).scrollTop();

        if(scrT > 0) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }
    })
}

// gnb 클릭시 active
function gnbActive(){
    $('.gnb-list li').on('click', function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        } else {
            $('.gnb-list li').removeClass('active');
            $(this).addClass('active');
        }
    })
}
// 모바일 메뉴 버튼
function moBtnToggle() {
    $(window).on('resize', function(){
        if (window.innerWidth <= 1023 || $('.btn-mo-menu').hasClass('close')) {
            $('.gnb').hide();
            $('.btn-mo-menu').removeClass('close');
        } else {
            $('.gnb').show();
            $('.btn-mo-menu').removeClass('close');
        }
    })
    $('.btn-mo-menu').on('click', function(){
        if($(this).hasClass('close')){
            $(this).siblings('.gnb').hide();
            $(this).removeClass('close');
        } else {
            $(this).siblings('.gnb').show();
            $(this).addClass('close');
        }
    })
}
// 탭
function tab() {
    $(".tab-content").eq(0).show(0);
    
    $(".tab-list li").on('click', function(e){
        e.preventDefault();

        let idx = $(this).index();
        $(".tab-content").hide();
        $(".tab-content").eq(idx).show();
        $(".tab-list li").removeClass("active");
        $(this).addClass("active");
    });
}

// 아코디언
function accodian() {
    $('.accodian-list li').off().on('click', function(e){
        e.preventDefault();

        if($(this).hasClass('active')){
            $(this).removeClass('active').find('.accodian-cont').slideUp();
        } else {
            $('.accodian-list li').removeClass('active').find('.accodian-cont').slideUp(300);
            $(this).addClass('active').find('.accodian-cont').slideDown(300);
        }
    })
}

$(document).ready(function() {
    headerScroll();
    tab();
    moBtnToggle();
    gnbActive();
    accodian();
})