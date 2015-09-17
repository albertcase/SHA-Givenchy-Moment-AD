/*! main.js */
function pageChange(curpage){
    $(".page").hide();
    $("#"+curpage).css("display","inline-block");
}


document.addEventListener('touchmove' , function (ev){
  ev.preventDefault();
  return false;
} , false)


function _loading(){
			
	var loader = new WxMoment.Loader();

	    //添加一个资源
	    loader.addImage('../imgs/bg-1.jpg');
	    loader.addImage('../imgs/bg-2.png');
	    loader.addImage('../imgs/bg-3.png');
	    loader.addImage('../imgs/bg2.jpg');
	    loader.addImage('../imgs/click_btn.png');
	    loader.addImage('../imgs/lipstick_box.png');
	    loader.addImage('../imgs/lipstick-1.png');
	    loader.addImage('../imgs/lipstick-2.png');
	    loader.addImage('../imgs/lipstick-3.png');
	    loader.addImage('../imgs/lipstick-4.png');
	    loader.addImage('../imgs/lipstick-5.png');
	    loader.addImage('../imgs/logo.png');
	    loader.addImage('../imgs/open_btn.png');
	    loader.addImage('../imgs/p1.jpg');
	    loader.addImage('../imgs/p2.jpg');
	    loader.addImage('../imgs/p3.jpg');
	    loader.addImage('../imgs/p4.jpg');
	    loader.addImage('../imgs/p5.jpg');
	    loader.addImage('../imgs/poster.jpg');
	    loader.addImage('../imgs/holder.jpg');
	    loader.addImage('../imgs/qrcode.png');
	    loader.addImage('../imgs/share.jpg');
	    loader.addImage('../imgs/slogan.png');
	    loader.addImage('../imgs/slogan2.png');
	    loader.addImage('../imgs/wifitips.png');
	    loader.addImage('../imgs/handicon.png');
	    loader.addImage('../imgs/handbg.png');
	    



	    //监听资源加载完成事件
	    loader.addCompletionListener(function () {
	    	pageChange("index");
	        console.log('加载完成');
	    });

		loader.addProgressListener(function(e) {
				//var percent = Math.round( e.completedCount / e.totalCount * 100 );
				//$(".loading").css({"width":percent+"%"});
				//$(".process").css({"width": percent+"%"});
		});
		
	    //启动资源加载管理器
	    loader.start();
	}



;(function($){
    $(function(){

        var basePath='http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/';
		var wa = new WxMoment.Analytics({
		    //projectName 请与微信商务团队确认
		    projectName: "20150921Givenchymakeup"
		}); 
		new WxMoment.Share({
		    //分享到朋友圈
		    'moment': {
		        'title': "想要玩转潮妆，轻松驾驭魅眼朱唇？快来揭秘吧！"
		    },
		    //分享给好友
		    'friend': {
		        'title': "想要玩转潮妆，轻松驾驭魅眼朱唇？快来揭秘吧！",
		        'desc': "魅夜眸色，香榭朱唇，全新潮妆大片，尽在纪梵希高级定制！"
		    },
		    'global': {
		        'img_url': basePath + "/imgs/share.jpg",
		        'link': window.location.href.split("?")[0].replace(/([&|\?]{1})ticket=[\w\-]+(&?)/, '$1').replace(/\?$/, '')
		    }
		});


		


        var vidArr = ["y0017r6gqnw"];
        var vPic = ["imgs/poster.jpg"]

		var player;
		var videoWidth = document.body.clientWidth*0.9;
		var videoHeight = videoWidth * (1080 / 1920);

		$(".video").css({"height":videoHeight});

		var videoFun = function(n){
			var video = new tvp.VideoInfo(); 
			video.setVid(vidArr[n]);
			player = new tvp.Player(); 
			player.create({
				width: videoWidth + 'px',
				height: videoHeight + 'px',
				video: video,
				pic: vPic[n],
				modId:"mod_player", //mod_player是刚刚在页面添加的div容器 autoplay:true
				onallended: function () {
		            //播放器播放完毕时
		            $(".holder").fadeIn();
		            videoFun("0");
		        },
		        onpause: function () {
		            //播放器触发暂停时，目前只针对HTML5播放器有效
		            $(".holder").fadeIn();
		            videoFun("0");
		        },

			});

			$(".holder").click(function(){
				$(".holder").hide();
				player.enterFullScreen();
				player.play();
			})

			// $(".logo").click(function(){
	  //       	 player.enterFullScreen();
	  //       	 player.play();
	  //       })
		}



 	})

})(jQuery)





function bgAnimate(animateFun){
	TweenMax.fromTo(document.querySelector('.ani-1'), 0.6, {
	    x:-320,
	    y:-320,
	    scale:1.6,
	    blurFilter:{blurX:50, blurY:10},
	    opacity:0
	}, {
		x:0,
		y:0,
		scale:1,
		opacity:1,
	    ease: Elastic.easeOut,
	    easeParams: [0.6, 0.9],
	    force3D: false,
	    onComplete:function(){
	   		if(animateFun){
	    		animateFun();
	    	}	
	    }
	});	

	TweenMax.fromTo(document.querySelector('.ani-2'), 2, {
	    x:160,
	    y:-120,
	    scale:0.6,
	    blurFilter:{blurX:50, blurY:10},
	    opacity:0
	}, {
		x:0,
		y:0,
		scale:1,
		opacity:1,
	    ease: Elastic.easeOut,
	    easeParams: [0.6, 0.9],
	    force3D: false,
	    onComplete:function(){
	   		
	    }
	});	

	TweenMax.fromTo(document.querySelector('.ani-3'), 3, {
	    x:-120,
	    y:200,
	    scale:0.6,
	    blurFilter:{blurX:50, blurY:10},
	    opacity:0
	}, {
		x:0,
		y:0,
		scale:1,
		opacity:1,
	    ease: Elastic.easeOut,
	    easeParams: [0.6, 0.9],
	    force3D: false,
	    onComplete:function(){
	    	
	    }
	});	
}











