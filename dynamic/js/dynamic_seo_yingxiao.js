/**
 * Created by Administrator on 2017/11/24.
 */
$(function () {
    $('.place-sum p').click(function () {
        $('.place').toggle();
    });
    $('.place .item a').click(function () {
        $('.place').toggle();
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        $('.weizhi').text($(this).text());
    });

    $('.comment-left').click(function () {
        $('.comment-chunk').toggle(500);
        if($(this).find('img').prop("className")=='arr-down'){
            $(this).find('img').removeClass('arr-down').addClass('arr-up').end().find('a').text('收起评论');
        }else{
            $(this).find('img').removeClass('arr-up').addClass('arr-down').end().find('a').text('展开评论')
        }
    });
});