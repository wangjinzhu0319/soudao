/**
 * Created by Administrator on 2017/11/22.
 */
$(function(){
    $('.place-sum p').click(function () {
        $('.place').toggle();
    });
    $('.place .item a').click(function () {
        $('.place').toggle();
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        $('.weizhi').text($(this).text());
    });
    $('.case-mashow').hover(function(){
        $(this).parent().next().toggle()
    },function(){
        $(this).parent().next().toggle()
    });
    $('.dynamic-list-tab li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index=$(this).index();
        $('.dynamic-list-content .con').eq(index).show().siblings('.con').hide()
    });

});











