jQuery(function($) {
$(document).ready(function() {
	
	       $(".works-nadbc").click(function(){
		   $("body").addClass("modal-on-nadbc");
		   $(".work-nadbc-overlay").show();
	    });

	    $(".go-back").click(function(){
		   $("body").removeClass("modal-on-nadbc");
		   $(".work-nadbc-overlay").hide();
	    });


	       $(".works-asbmt").click(function(){
		   $("body").addClass("modal-on-asbmt");
		   $(".work-asbmt-overlay").show();
	    });

	    $(".go-back").click(function(){
		   $("body").removeClass("modal-on-asbmt");
		   $(".work-asbmt-overlay").hide();
	    });


	       $(".works-ros").click(function(){
		   $("body").addClass("modal-on-ros");
		   $(".work-ros-overlay").show();
	    });

	    $(".go-back").click(function(){
		   $("body").removeClass("modal-on-ros");
		   $(".work-ros-overlay").hide();
	    });


	       $(".works-vit").click(function(){
		   $("body").addClass("modal-on-vit");
		   $(".work-vit-overlay").show();
	    });

	    $(".go-back").click(function(){
		   $("body").removeClass("modal-on-vit");
		   $(".work-vit-overlay").hide();
	    });


	       $(".works-pulse").click(function(){
		   $("body").addClass("modal-on-pulse");
		   $(".work-pulse-overlay").show();
	    });

	    $(".go-back").click(function(){
		   $("body").removeClass("modal-on-pulse");
		   $(".work-pulse-overlay").hide();
	    });

	    console.log("working?")












	});
});