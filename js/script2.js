$(function(){
	// 圖片張數 
	var count = $("#slide li").length;
	
	// 目前顯示的圖片（初始為第1張圖）
	var current = 1;
	
	// 下一張要顯示的圖片
	var next = 2;
	
	// 淡入／淡出效果的時間間隔（每隔幾秒更換圖片。設定為3000毫秒）
	var interval = 3000;
	
	// 淡入／淡出的速度（設定為500毫秒）
	var duration = 500;
	
	// 用於計時器的變數
	var timer;

	// 隱藏第1張以外的圖片
	$("#slide li:not(:first-child)").hide();

	// 每隔3000毫秒（變數interval的值）執行slideTimer函式
	timer = setInterval(slideTimer, interval);
	
	// slideTimer函式
	function slideTimer(){
		// 將目前顯示的圖片淡出
		$("#slide li:nth-child(+" + current + ")").fadeOut(duration);
		//將下一張要顯示的圖片淡入
		$("#slide li:nth-child(+" + next + ")").fadeIn(duration);

		// 變數current的新值：變數next原本的值
		current = next;
		// 變數next的新值：變數current的新值+1 
		next = ++next;

		// 當變數next值超過圖片數量時，將值改回1
		if(next > count){
			next = 1;
		}
		// 刪除target類別
		$("#button li a").removeClass("target");
		
		// 在對應目前圖片的按鈕加上target類別
		$("#button li:nth-child("+ current +") a").addClass("target");
	}

	// 按下按鈕時
	$("#button li a").click(function(){
		// 將取得的內容代入變數next
		next = $(this).html();

		// 將計時器停止後重新啟動
		clearInterval(timer);
		timer = setInterval(slideTimer, interval);
		
		// 計時開始時顯示的圖片
		slideTimer();
		
		return false;
	});
});
