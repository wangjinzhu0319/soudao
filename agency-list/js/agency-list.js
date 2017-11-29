/**
 * Created by Administrator on 2017/11/27.
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

    $('.case-mashow').hover(function(){
        $(this).parent().next().toggle()
    },function(){
        $(this).parent().next().toggle()
    });

    $('.apply-classify ul li a,.tradeList ul li a,.hotLabel ul li a,.searchBox .mainBoxList>div a').click(function () {
        $(this).parent().addClass('checked').siblings().removeClass('checked');
    });
    $('.navBtn').click(function () {
        if($(this).html()=='更多<i class="fa fa-caret-down"></i>'){
            $(this).html('关闭<i class="fa fa-caret-up"></i>');
            $(this).prev().height('auto');
        }else{
            $(this).html('更多<i class="fa fa-caret-down"></i>');
            if($(window).width()<768){
                $(this).prev().height('40');
            }else{
                $(this).prev().height('50');
            }

        }

    });

    $('.bottomBtn a').click(function () {
        if($(this).find('span').html()=="更多选择"){
            $(this).find('span').html("隐藏更多");
            $(this).find('i').attr('class','fa fa-angle-double-up')
        }else{
            $(this).find('span').html("更多选择");
            $(this).find('i').attr('class','fa fa-angle-double-down')
        }
        $('.tradeList,.colorList,.hotLabel').toggle();
    })
});