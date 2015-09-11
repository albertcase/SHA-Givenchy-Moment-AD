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
		    projectName: "20150527PIAGET"
		}); 
		new WxMoment.Share({
		    //分享到朋友圈
		    'moment': {
		        'title': "女人，要有转动世界的姿态"
		    },
		    //分享给好友
		    'friend': {
		        'title': "女人，要有转动世界的姿态",
		        'desc': "姚晨：给你一次旋转，一次探寻内心的旅程，和我一起转动世界。"
		    },
		    'global': {
		        'img_url': basePath + "/imgs/share.jpg",
		        'link': window.location.href.split("?")[0].replace(/([&|\?]{1})ticket=[\w\-]+(&?)/, '$1').replace(/\?$/, '')
		    }
		});


		


        var vidArr = ["n01549ttjri"];
        var vPic = ["http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster1.jpg"]

		var player;
		var videoWidth = document.body.clientWidth;
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













