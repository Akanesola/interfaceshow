$(document).ready(function() {

/*------手机打开页面后收起地址栏------*/
addEventListener("load",function() { setTimeout(hideURLbar, 0); }, false);
function hideURLbar(){ window.scrollTo(0,1); };

/*------弹出窗口背景变暗------*/
$('#yesNextBtn').click(function(){
               //消除radio按钮上的checked
       $('#btnGroups').find('input[type=radio]').each(function(){
          $(this).removeProp("checked").checkboxradio("refresh");
       })
      document.getElementById("bg").style.display ="block";
      document.getElementById("show").style.display ="block";
      $('html,body').animate({scrollTop: '0px'}, 100);//因为页面很长，有纵向滚动条，先让页面滚动到最顶端，然后禁止滑动事件，这样可以使遮罩层锁住整个屏幕
      $('#bg').bind("touchmove",function(e){
              e.preventDefault();
      });
  });

/*------右下角回到顶端功能------*/
$("#back-to-top").hide();  //首先将#back-to-top隐藏
$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 160) {
      $("#back-to-top").fadeIn(1500);
    } else {
      $("#back-to-top").fadeOut(1500);
    }
  });   //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
  $("#back-to-top").click(function() {
    $('body,html').animate({
      scrollTop: 0
    },
     800);
    return false;
  });   //当点击跳转链接后，回到页面顶部位置
});

$(".backup").hover(function(){
$(this).css("background-position","0 -41px");
},function(){
$(this).css("background-position","0 0");
});

$(".jq_btn").hover(function(){
$(this).find("div").stop().fadeIn();
  },function(){
$(this).find("div").stop().fadeOut();
});

/*------手机端菜单滑动------*/

$("span.menu").click(function(){
  if(!$(".top-nav-in ul").is(":animated")) {
    $(".top-nav-in ul").slideToggle(1500);
  }
});

/*------Portpolio-----*/

$('#scrollup').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, 3200);
  return false;
});

$(".scroll").click(function(event){
  event.preventDefault();
  $('html,body').animate({
      scrollTop:$($.attr(this, 'href')).offset().top
    },3200);
});

$('.showprocess').click(function() {
  $('.toggle').slideToggle("slow");
});

$('.toggle-close').click(function() {
  $('.toggle').slideToggle("slow");
});

$('.toggle-close').hover(function(){
  $(this).css("opacity","1");
    },
  function(){
  $(this).css("opacity","0.6");
});

$('.backhome').hover(function(){
  $(this).css("opacity","1");
    },
  function(){
  $(this).css("opacity","0.6");
});


});



/*------Interface Full-----*/

//去除图片宽高属性
function removeImageSize(risObj,fun) {
    $(risObj).each(function() {
        if ($(this).data('original') || $(this).data('lazy')) {
            var risTobj=$(this),
                risT=setInterval(function() {
                    if (risTobj.data('original') == risTobj.attr('src') || risTobj.data('lazy') == risTobj.attr('src')) {
                        risTobj.height('').removeAttr('width').removeAttr('height');
                        if (typeof fun === "function") fun();
                        clearInterval(risT);
                    }
                }, 10);
        } else {
            var img = new Image();
            img.src = $(this).attr('src')?$(this).attr('src'):$(this).attr('srcset');
            if (img.complete) {
                $(this).height('').removeAttr('width').removeAttr('height');
                if (typeof fun === "function") fun();
                return;
            }
            img.onload = function() {
                $(this).height('').removeAttr('width').removeAttr('height');
                if (typeof fun === "function") fun();
            };
        }
    });
};

//图片hover上下滚动
function autoScro(ascObj,sonObj) {
  $(ascObj).find(sonObj).each(function() {
    var this_obj=$(this).parents('span');
    removeImageSize(this,function(){
      var this_obj_p=this_obj.parents(ascObj),
        sonObjY = this_obj.height() - this_obj_p.height();
      if (sonObjY > 0) {
        this_obj_p.hover(function() {
          var sn = (parseInt(this_obj.css('top')) + sonObjY) / 150 * 1000;
          this_obj.stop().animate({top: -sonObjY},sn);
        },function() {
          var po = -parseInt(this_obj.css('top')) / 150 * 1000;
          this_obj.stop().animate({top: 0},po);
        });
      }
    });
  });
}


//resume谷歌地图位置动画
var direction='up';
(function(){
    var css={
        'top':'106px'
    };
    if(direction==='up'){
        direction='down';
        css.top='80px';
    }else{
        direction='up';
    }
    $('.position-icon').animate(css,arguments.callee);
})();



