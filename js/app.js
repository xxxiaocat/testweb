
$(document).ready(function(){   


    //春节倒计时
    var starttime = new Date("2020/3/21 18:24");
    setInterval(function () {
        var nowtime = new Date();
        var time = nowtime - starttime;
        var day = parseInt(time / 1000 / 60 / 60 / 24);
        var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var minute = parseInt(time / 1000 / 60 % 60);
        var seconds = parseInt(time / 1000 % 60);
        
        var syday =  hour  + "小时" +  minute +  "分钟"  + seconds +  "秒";
        $('.days').html( day +"<b> &nbsp&nbsp </b>" );
        $(".hours").html(syday);
        
    }, 1000);
    
});


