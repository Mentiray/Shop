// JavaScript Document
$(document).ready(function(){
//轮播图
		var numImg = $('.img_ul li').length;	
    	var page = 0;
		var timer = null;
		var hoverTime = 0;		
		
		$(".banner").mousemove(function(){    
			clearInterval(timer);	          
		});
		
		$(".banner").mouseout(function(){
			timer = setInterval(moveimg,3000);
		});
		
		
		$(".ico_box li").mouseover(function(){
			
			var index = $(".ico_box li").index(this);		
			page = index;
			changeImg();
		});
		
		
		timer = setInterval(moveimg,3000);
		
		function moveimg(){
			page++;
			changeImg();
			
		}
		
		function changeImg(){
			if(page < 0){
				page = numImg - 1;	
			}
			else if(page == numImg){
				page = 0;	
			}
			$(".ico_box li").eq(page).addClass('active').siblings().removeClass('active');
			$(".img_ul li").eq(page).show(1000).siblings().hide(1000);
		}
//导航栏
	var winHeight = $(window).height();
  
	var chenHeight = 570;
	$('.navfree li').click(function(){
		var index = $(this).index();
		var chenTop = $('.top1').eq(index).offset().top;
		$('.navfree li').eq(index).addClass('active').siblings().removeClass();
		$('body,html').animate({'scrollTop':chenTop+'px'},100);			
	});
	
	

})