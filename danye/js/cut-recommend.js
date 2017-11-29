/**
 * Created by Administrator on 2017/11/28.
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
})