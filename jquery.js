/*
$(document).ready(function(){
	$("p").hide();
})

$(document).ready(function(){
	$(".slogan").hide();
})

$(document).ready(function(){
	$("#slogan").hide();
})

*/

//Click to Hide

$(document).ready(function(){
	$(".boom").click(function(){
		$(this).hide();
	});
});


//Click to Hide & Show

$(document).ready(function(){
	$("#hide").click(function(){
		$(".demo").hide();
	});
	$("#show").click(function(){
		$(".demo").show();
	});
});


//Last Child

$(document).ready(function(){
	$("button").click(function(){
		$("ul li:last").hide();
	});
});

//Double Click 

$(document).ready(function(){
	$("#cool").dblclick(function(){
		$(this).hide();
	});
});

//Mouse Enter

$(document).ready(function(){
	$(".fit").mouseenter(function(){
		alert("You Enterd Freedom IT Institution");
		//$(this).hide();
	});
});

//Mouse Leave

$(document).ready(function(){
	$(".fiti").mouseleave(function(){
		alert("Bye!You are now leave Freedom IT Institution");
	});
});


//Mouse Hide

$(document).ready(function(){
	$(".fit_hide").mouseenter(function(){
		$(this).hide();
	});
});





