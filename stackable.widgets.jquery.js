function stackableWidgets(parent, fields) {
	$(parent).css({
		position: "relative", 
		display: "inline-block"
	});

	function spanTextareas() {
		var top = 0, left = 0, opacity=1, zind = 10;
		if($(parent).data("spanner-lock") == true) 
				return;
			
		$(parent).find(fields).each(function() {
			$(this).css({
				position: 'absolute',
				'z-index': zind
			});

			$(this).stop().animate({
				top: top, 
				left: left,
				opacity: opacity,
			}, 400);
			top += 5+(Math.random()-Math.random());
			left += 5+(Math.random()-Math.random());
			zind -= 1;

			opacity =- 0.05;
			
			if(opacity < 0.5) 
				opacity = 0.5;
		});
	}

	function despanTextareas() {
		var that = $(this)
		var top = 0; 
		$(this).find(fields).stop().each(function() {
			$(this).animate({
				top: top, 
				left: 0,
				opacity:1
			},200);
			top += parseInt($(this).css("height"))+10;
		})
	}
	spanTextareas();


	$(parent).hover(despanTextareas, spanTextareas)
	
	$(parent).find(fields).find(":input").addBack(":input").focus(function() {
		$(parent).data("spanner-lock", true);
	});

	$(parent).find(fields).find(":input").addBack(":input").blur(function() {
		$(parent).data("spanner-lock", false);
		setTimeout(function() {
			// check in a short period if we refocused another tool, otherwise collapse
			spanTextareas();
		}, 50)
	});
}
