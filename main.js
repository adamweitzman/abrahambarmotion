$('.tlv').hover(function(){
    $('.eventImg').addClass('openImg');
    $('.tlvTitle').addClass('smallCity');
    $('.lineTlv').addClass('verLineShort');
}, function (){
    $('.eventImg').removeClass('openImg');
    $('.tlvTitle').removeClass('smallCity');
    $('.lineTlv').removeClass('verLineShort');
    }
)

$('.jlm').hover(function(){
        $('.eventImgJlm').addClass('openImg');
        $('.jlmTitle').addClass('smallCity');
        $('.lineJlm').addClass('verLineShort');
    }, function (){
        $('.eventImgJlm').removeClass('openImg');
        $('.jlmTitle').removeClass('smallCity');
        $('.lineJlm').removeClass('verLineShort');
    }
)