function stackableWidgets(parent, fields) {
	var $ = jQuery;
	
	$(parent).css({
		position: "relative", 
		display: "inline-block"
	});

	var stackTextareas = function() {
		if($(parent).data("spanner-lock") == true) 
			return;
		var position = $(parent).find(fields).first().position();
		$(parent).data("spanner-first-position", position);
		
		// TODO: make opacity/zindex start from default too.
		var top = position.top, left = position.left, opacity=1, zind = 10;
		
			
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

	var destackTextareas = function() {
		var that = $(this)
		var pos = $(parent).data("spanner-first-position", position);
		var top = pos.top; 
		$(this).find(fields).stop().each(function() {
			$(this).animate({
				top: top, 
				left: pos.left,
				opacity:1
			},200);
			top += parseInt($(this).css("height"))+10;
		})
	}
	stackTextareas();


	$(parent).hover(destackTextareas, stackTextareas)
	
	$(parent).find(fields).find(":input").addBack(":input").focus(function() {
		$(parent).data("spanner-lock", true);
	});

	$(parent).find(fields).find(":input").addBack(":input").blur(function() {
		$(parent).data("spanner-lock", false);
		setTimeout(function() {
			// check in a short period if we refocused another tool, otherwise collapse
			stackTextareas();
		}, 50)
	});
}
