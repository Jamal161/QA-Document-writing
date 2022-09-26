jQuery(document).ready(function(){
	
	
	jQuery('#mmenu').mmenu({
		extensions	: [ 'theme-dark' ],
		setSelected	: true,
		counters	: false,
		searchfield : {
			placeholder		: 'Search menu items'
		},
		
		sidebar		: {
			collapsed		: {
				use 			: '(min-width: 320px)',
				size			: 35,
				hideNavbar		: false
			},
			expanded		: {
				use 			: '(min-width: 992px)',
				size			: 35
			}
		},
		navbars		: [
			{
				content		: [ 'searchfield' ]
			}
		],
			"searchfield": {
			  "panel": true,
              "showTextItems": true
           }
	}
	, {
           "searchfield": {
              "clear": true
           }
        });
	
	
	
	jQuery("#urna-load").fadeOut();
	
	if(window.location.href.indexOf("#") > -1) {
		var linkcuren 		= window.location.href;
		var numbercuren 	= linkcuren.search("#");
		var divcuren 		= window.location.href.slice(numbercuren);
		
		jQuery(".vg-content").css('display','none');
		jQuery(divcuren).css('display','block');
		jQuery(divcuren).parent().parent( '.vg-content').css('display','block');
		jQuery(divcuren).parent().parent().parent( '.vg-content').css('display','block');
		
		jQuery(".bs-sidebar1 > ul > li").removeClass("active");
		jQuery(".bs-sidebar1>ul>li>a[href$='" + divcuren + "']").parent().addClass("active");
		jQuery(".bs-sidebar1>ul>li >.mm-panel >ul>li>a[href$='" + divcuren + "']").parent().parent().parent().parent().addClass("active");
		
	}
	
	jQuery(".bs-sidebar1 > ul > li > a.scrollto").click(function(event) {
		jQuery(".vg-content").css('display','none');
		jQuery(jQuery(this).attr('href')).css('display','block');
		jQuery(".bs-sidebar1 > ul > li").removeClass("active");
		jQuery(this).parent().addClass("active");
		
		
	});
	
	jQuery(".bs-sidebar1 > ul > li > a.mm-btn").click(function(event) {
		jQuery(".vg-content").css('display','none');
		jQuery(jQuery(this).parent().children(".scrollto").attr('href')).css('display','block');
		jQuery(".bs-sidebar1 > ul > li").removeClass("active");
		jQuery(this).parent().addClass("active");
		
		
	});	
	
	jQuery(".bs-sidebar1  ul ul > li > a").click(function(event) {
		jQuery(".vg-content").css('display','none');
		jQuery(jQuery(this).parent().parent().parent().parent().children(".pa").attr('href')).css('display','block');
		jQuery(".bs-sidebar1 > ul > li").removeClass("active");
		jQuery(this).parent().parent().parent().parent().addClass("active");
	});
	
	jQuery(".mm-listitem_vertical>.mm-panel>ul>li>a").click(function(event) {
		jQuery(".mm-listitem_vertical>.mm-panel>ul>li").removeClass("active");
		jQuery(this).parent().addClass("active");
	});
	
	
	jQuery('.bs-sidebar1 ul > li > a').onePageNav({
		currentClass: 'active1',
		changeHash: false,
		scrollSpeed: 800
	});
	
	// Scrolling
	jQuery('a.scrollto').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery("[name='" + this.hash.slice(1) +"']");
			if (target.length) {
				jQuery('#wrapper').removeClass('behind');
				jQuery('.mobile-nav').removeClass('active1');
				jQuery('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});	

});



