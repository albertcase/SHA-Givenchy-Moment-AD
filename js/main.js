/*! main.js */

document.addEventListener('touchmove' , function (ev){
  ev.preventDefault();
  return false;
} , false)



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
        var vPic = ["http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster1.jpg"]

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
				modId:"mod_player" //mod_player是刚刚在页面添加的div容器 autoplay:true
			});
		}


		videoFun("0");





		function _loading(){
			var loader = new WxMoment.Loader();
			
			    //添加一个资源
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/active_trace.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/bg.jpg');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/hand.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/handTips.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/holder_bg.jpg');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/join_btn.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster1.jpg');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster2.jpg');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster3.jpg');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/logo.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/pro.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/pro-home.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/slogan_cn.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/slogan_en.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/share.jpg');

			    //监听资源加载完成事件
			    loader.addCompletionListener(function () {

			        console.log('加载完成');
			    });

				loader.addProgressListener(function(e) {
						var percent = Math.round( e.completedCount / e.totalCount * 100 );
						//$(".loading").css({"width":percent+"%"});
						$(".process").css({"width": percent+"%"});
				});
				
			    //启动资源加载管理器
			    loader.start();
		}

		_loading();

 	})

})(jQuery)





TweenMax.fromTo(document.querySelector('.ani-1'), 1.7, {
    x:-120,
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

TweenMax.fromTo(document.querySelector('.ani-2'), 1.9, {
    x:120,
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

TweenMax.fromTo(document.querySelector('.ani-3'), 2, {
    x:-120,
    y:120,
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







