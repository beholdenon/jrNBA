


$(document).foundation();
imageMapResize();

$(function() {
	$(".city-photo-hover").css({ "opacity": 1, "display": "block", "visibility": "visible"}).fadeOut(0);
	
	var startZ = 900;
	var fadeSpeed = 300;
	if(!!('ontouchstart' in window)){
	}
	else{
		$('.hp-city-grid .columns').hover(
			function () {
				$(this).find(".city-photo").addClass('animate');
			},
			function () {
				$(this).find(".city-photo").removeClass('animate');
			}
		)
		$('.league-city-grid .columns').hover(
			function () {
				$(this).find(".city-photo").addClass('animate');
			},
			function () {
				$(this).find(".city-photo").removeClass('animate');
			}
		)
	}

	var htmlForButtons = '<div class="side-menu-bottom-buttons"><ul><li><a href="http://jrnba.com"><img src="http://www.jrnba3v3.com/wp-content/themes/batterydigital/images/jrnba_logo_left_nav.jpg"></a></li></ul><div class="left-nav-links"><a href="http://www.nba.com/news/termsofuse/">Terms & Conditions</a> &nbsp;&nbsp;&nbsp;<a href="http://www.nba.com/news/privacy_policy.html">Privacy Policy</a><span class="copyright">©2017 Jr NBA. All rights reserved</span></div></div>';
	$("#responsive-menu-pro-container").append(htmlForButtons);
	
	$("#brandon-bio a").on("click", function() {
		$("#brandon-bio").html("Brandon Armstrong (also known as BDotADot5) is an athlete, actor, comedian and social media star. He isx best known for creating parodies of popular basketball players and professional athletes on his YouTube (with over 110+ million views), Instagram, and Facebook accounts. Brandon's most popular account is undoubtedly his Instagram, which has over 1.3+ million followers. Brandon has played basketball in the NBA D-League as well as overseas in Spain and Australia.  He recently participated in the 2017 NBA All-Star Celebrity Game, where he was awarded MVP of the game. Brandon has acted and appeared on such shows like Upproxx's HANGTIME, Verizon go90's THE RUNNER & DUNK LEAGUE and Fullscreen's PARTY IN THE BACK. He's garnered great respect from Hollywood stars like Kevin Hart, and in summer 2016 Jimmy Kimmel invited Brandon as his guest on JIMMY KIMMEL LIVE!. Brandon recently won the MVP in the 2017 NBA Celebrity All-Star Game. Brandon will soon co-star with former NBA All-Star Baron Davis in an Untitled Scripted Comedy for Fullscreen.");
	});
	$("#d-stroy-bio a").on("click", function() {
		$("#d-stroy-bio").html("D-Stroy is a multi-talented host, writer, comedian and all-around entertaining emcee, bringing crowds to their feet in-arenas and on-screen throughout the US.<br><br> He can be found hosting at the biggest moments in sports, from events across NBA All-Star and Super Bowl, to hosting duties at legendary Yankee Stadium.  He is also entering his 3rd year as a sketch writer for SNL alumni, Amy Poehler.<br><br>As the voice of Dew NBA 3X in 2016, D-Stroy is back for year 2 to bring the energy to every stop.");
	});
	/*
	$("#newsletter-btn").on("click", function() {
  	$("html").removeClass("responsive-menu-pro-open");
  	$("responsive-menu-pro-button").removeClass("is-active");
	});
	*/


	function scrollToElement(el) {
  	$('html, body').animate({
        scrollTop: $(el).offset().top
    }, 500);
	}
	if($(".events-city-header").length) {
  	scrollToElement(".events-city-header");
  }
  $(".hp-events-header .register-now").on("click", function(e) {
	  e.preventDefault();
	  scrollToElement($(".hp-city-grid"));
  })
  var currentAgeBracket = 0;
  $(".age-bracket-grid .columns").on("click", function(){
    setAgeBracket($(this).index());
  });
  function setAgeBracket(id) {
    $(".age-bracket-grid .columns.active").removeClass("active");
    $(".age-bracket-grid .columns").eq(id).addClass("active");
    currentAgeBracket = id;
  }
  
	function checkHeader() {
  	var w = $(window).width();
  	var cw = 1500;
  	var hw = $("#responsive-menu-pro-button").width();
  	if(w < (cw + (hw * 2))) {
    	if(hw < 1500){
      	$(".jrnba-logo").css("left", hw + 10);
    	}
    	else {
      	$(".jrnba-logo").css("left", hw - ((w - 1500)/2) );
      	
    	}
  	}
  	else {
    	$(".jrnba-logo").css("left", 0);
  	}
	}
	$( window ).resize(checkHeader);
	checkHeader();
	
  
  essapi_8 = jQuery("#esg-grid-8-1").tpessential({
        gridID:8,
        layout:"cobbles",
        forceFullWidth:"off",
        lazyLoad:"on",
        lazyLoadColor:"#FFFFFF",
        gridID:"8",
        loadMoreType:"button",
        loadMoreAmount:6,
        loadMoreTxt:"Load More",
        loadMoreNr:"off",
        loadMoreEndTxt:"No More Items for the Selected Filter",
        loadMoreItems:[],
        row:9999,
        loadMoreAjaxToken:"171d162a7b",
        loadMoreAjaxUrl:"http://jrnba3v3.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
        ajaxContentTarget:"ess-grid-ajax-container-",
        ajaxScrollToOffset:"0",
        ajaxCloseButton:"off",
        ajaxContentSliding:"on",
        ajaxScrollToOnLoad:"on",
        ajaxNavButton:"off",
        ajaxCloseType:"type1",
        ajaxCloseInner:"false",
        ajaxCloseStyle:"light",
        ajaxClosePosition:"tr",
        space:0,
        pageAnimation:"fade",
        paginationScrollToTop:"off",
        spinner:"spinner0",
        lightBoxMode:"all",
        cobblesPattern:"2x2,1x1,1x1,2x2,1x1,1x1",
        animSpeed:1000,
        delayBasic:1,
        mainhoverdelay:1,
        filterType:"multi",
        filterLogic:"and",
        showDropFilter:"hover",
        filterGroupClass:"esg-fgc-8",
        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
        aspectratio:"4:3",
        responsiveEntries: [
						{ width:1400,amount:4,mmheight:0},
						{ width:1170,amount:4,mmheight:0},
						{ width:1024,amount:4,mmheight:0},
						{ width:960,amount:4,mmheight:0},
						{ width:778,amount:4,mmheight:0},
						{ width:640,amount:2,mmheight:0},
						{ width:480,amount:2,mmheight:0}
						]
	
});




	try{
	jQuery("#esg-grid-8-1 .esgbox").esgbox({
		padding : [0,0,0,0],
 		width:800,
 		height:600,
 		minWidth:100,
 		minHeight:100,
 		maxWidth:9999,
 		maxHeight:9999,
 		autoPlay:false,
 		playSpeed:3000,
 		preload:3,
      beforeLoad:function() { 
		 },
      afterLoad:function() { 
 		if (this.element.hasClass("esgboxhtml5")) {
			this.type ="html5";
		   var mp = this.element.data("mp4"),
		      ogv = this.element.data("ogv"),
		      webm = this.element.data("webm");
		      ratio = this.element.data("ratio");
		      ratio = ratio==="16:9" ? "56.25%" : "75%"
         this.content ='<div class="esg-lb-video-wrapper" style="width:100%"><video autoplay="true" loop=""  poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';
		   };
		 },
		beforeShow : function () { 
			this.title = jQuery(this.element).attr('lgtitle');
			if (this.title) {
				this.title="";
   		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
			}
		},
		afterShow : function() {
		},
		openEffect : 'fade',
		closeEffect : 'fade',
		nextEffect : 'fade',
		prevEffect : 'fade',
		openSpeed : 'normal',
		closeSpeed : 'normal',
		nextSpeed : 'normal',
		prevSpeed : 'normal',
		helpers:{overlay:{locked:false}},
		helpers : {
			media : {},
			overlay: {
				locked: false
			},
		    title : {
				type:""
			}
		}
});

 } catch (e) {}

jQuery( function($){ 

$(document).on('click', '.btn-blank-window', function(e){ e.stopPropagation(); } );

} );});



function eggbfc(winw,resultoption) {
	var lasttop = winw,
	lastbottom = 0,
	smallest =9999,
	largest = 0,
	samount = 0,
	lamoung = 0,
	lastamount = 0,
	resultid = 0,
	resultidb = 0,
	responsiveEntries = [
						{ width:1400,amount:4,mmheight:0},
						{ width:1170,amount:4,mmheight:0},
						{ width:1024,amount:4,mmheight:0},
						{ width:960,amount:3,mmheight:0},
						{ width:778,amount:3,mmheight:0},
						{ width:640,amount:3,mmheight:0},
						{ width:480,amount:1,mmheight:0}
						];
	if (responsiveEntries!=undefined && responsiveEntries.length>0)
		jQuery.each(responsiveEntries, function(index,obj) {
			var curw = obj.width != undefined ? obj.width : 0,
				cura = obj.amount != undefined ? obj.amount : 0;
			if (smallest>curw) {
				smallest = curw;
				samount = cura;
				resultidb = index;
			}
			if (largest<curw) {
				largest = curw;
				lamount = cura;
			}
			if (curw>lastbottom && curw<=lasttop) {
				lastbottom = curw;
				lastamount = cura;
				resultid = index;
			}
		});
		if (smallest>winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption=="id")
			return obj;
		else
			return lastamount;
	}
if ("cobbles"=="even") {
	var coh=0,
		container = jQuery("#esg-grid-9-1");
	var	cwidth = container.width(),
		ar = "4:3",
		gbfc = eggbfc(jQuery(window).width(),"id"),
	row = 2;
ar = ar.split(":");
aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
coh = cwidth / aratio;
coh = coh/gbfc.column*row;
	var ul = container.find("ul").first();
	ul.css({display:"block",height:coh+"px"});
}
var essapi_9;
jQuery(document).ready(function() {
	essapi_9 = jQuery("#esg-grid-9-1").tpessential({
        gridID:9,
        layout:"cobbles",
        forceFullWidth:"off",
        lazyLoad:"on",
        lazyLoadColor:"#FFFFFF",
        gridID:"9",
        loadMoreType:"button",
        loadMoreAmount:6,
        loadMoreTxt:"Load More",
        loadMoreNr:"on",
        loadMoreEndTxt:"No More Items for the Selected Filter",
        loadMoreItems:[],
        row:9999,
        loadMoreAjaxToken:"171d162a7b",
        loadMoreAjaxUrl:"http://jrnba3v3.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
        ajaxContentTarget:"ess-grid-ajax-container-",
        ajaxScrollToOffset:"0",
        ajaxCloseButton:"off",
        ajaxContentSliding:"on",
        ajaxScrollToOnLoad:"on",
        ajaxNavButton:"off",
        ajaxCloseType:"type1",
        ajaxCloseInner:"false",
        ajaxCloseStyle:"light",
        ajaxClosePosition:"tr",
        space:0,
        pageAnimation:"fade",
        paginationScrollToTop:"off",
        spinner:"spinner0",
        lightBoxMode:"all",
        cobblesPattern:"2x2,1x1,1x1,2x2,1x1,1x1",
        animSpeed:1000,
        delayBasic:1,
        mainhoverdelay:1,
        filterType:"single",
        showDropFilter:"hover",
        filterGroupClass:"esg-fgc-9",
        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
        aspectratio:"4:3",
        responsiveEntries: [
						{ width:1400,amount:4,mmheight:0},
						{ width:1170,amount:4,mmheight:0},
						{ width:1024,amount:4,mmheight:0},
						{ width:960,amount:3,mmheight:0},
						{ width:778,amount:3,mmheight:0},
						{ width:640,amount:3,mmheight:0},
						{ width:480,amount:1,mmheight:0}
						]
	});

	try{
	jQuery("#esg-grid-9-1 .esgbox").esgbox({
		padding : [0,0,0,0],
 		width:800,
 		height:600,
 		minWidth:100,
 		minHeight:100,
 		maxWidth:1200,
 		maxHeight:9999,
 		autoPlay:false,
 		playSpeed:3000,
 		preload:3,
      beforeLoad:function() { 
		 },
      afterLoad:function() { 
 		if (this.element.hasClass("esgboxhtml5")) {
			this.type ="html5";
		   var mp = this.element.data("mp4"),
		      ogv = this.element.data("ogv"),
		      webm = this.element.data("webm");
		      ratio = this.element.data("ratio");
		      ratio = ratio==="16:9" ? "56.25%" : "75%"
         this.content ='<div class="esg-lb-video-wrapper" style="width:100%"><video autoplay="true" loop=""  poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';
		   };
		 },
		beforeShow : function () { 
			this.title = jQuery(this.element).attr('lgtitle');
			if (this.title) {
				this.title="";
   		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
			}
		},
		afterShow : function() {
		},
		openEffect : 'fade',
		closeEffect : 'fade',
		nextEffect : 'fade',
		prevEffect : 'fade',
		openSpeed : 'normal',
		closeSpeed : 'normal',
		nextSpeed : 'normal',
		prevSpeed : 'normal',
		helpers:{overlay:{locked:false}},
		helpers : {
			media : {},
			overlay: {
				locked: false
			},
		    title : {
				type:""
			}
		}
});

 } catch (e) {}

jQuery( function($){ 

$(document).on('click', '.btn-blank-window', function(e){ e.stopPropagation(); } );

} );});








function eggbfc(winw,resultoption) {
	var lasttop = winw,
	lastbottom = 0,
	smallest =9999,
	largest = 0,
	samount = 0,
	lamoung = 0,
	lastamount = 0,
	resultid = 0,
	resultidb = 0,
	responsiveEntries = [
						{ width:1400,amount:4,mmheight:0},
						{ width:1170,amount:4,mmheight:0},
						{ width:1024,amount:4,mmheight:0},
						{ width:960,amount:3,mmheight:0},
						{ width:778,amount:3,mmheight:0},
						{ width:640,amount:3,mmheight:0},
						{ width:480,amount:1,mmheight:0}
						];
	if (responsiveEntries!=undefined && responsiveEntries.length>0)
		jQuery.each(responsiveEntries, function(index,obj) {
			var curw = obj.width != undefined ? obj.width : 0,
				cura = obj.amount != undefined ? obj.amount : 0;
			if (smallest>curw) {
				smallest = curw;
				samount = cura;
				resultidb = index;
			}
			if (largest<curw) {
				largest = curw;
				lamount = cura;
			}
			if (curw>lastbottom && curw<=lasttop) {
				lastbottom = curw;
				lastamount = cura;
				resultid = index;
			}
		});
		if (smallest>winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption=="id")
			return obj;
		else
			return lastamount;
	}
if ("cobbles"=="even") {
	var coh=0,
		container = jQuery("#esg-grid-2-1");
	var	cwidth = container.width(),
		ar = "4:3",
		gbfc = eggbfc(jQuery(window).width(),"id"),
	row = 2;
ar = ar.split(":");
aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
coh = cwidth / aratio;
coh = coh/gbfc.column*row;
	var ul = container.find("ul").first();
	ul.css({display:"block",height:coh+"px"});
}
var essapi_2;
jQuery(document).ready(function() {
	essapi_2 = jQuery("#esg-grid-2-1").tpessential({
        gridID:2,
        layout:"cobbles",
        forceFullWidth:"off",
        lazyLoad:"on",
        lazyLoadColor:"#FFFFFF",
        gridID:"2",
        loadMoreType:"button",
        loadMoreAmount:6,
        loadMoreTxt:"Load More",
        loadMoreNr:"on",
        loadMoreEndTxt:"No More Items for the Selected Filter",
        loadMoreItems:[],
        row:9999,
        loadMoreAjaxToken:"171d162a7b",
        loadMoreAjaxUrl:"http://jrnba3v3.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
        ajaxContentTarget:"ess-grid-ajax-container-",
        ajaxScrollToOffset:"0",
        ajaxCloseButton:"off",
        ajaxContentSliding:"on",
        ajaxScrollToOnLoad:"on",
        ajaxNavButton:"off",
        ajaxCloseType:"type1",
        ajaxCloseInner:"false",
        ajaxCloseStyle:"light",
        ajaxClosePosition:"tr",
        space:0,
        pageAnimation:"fade",
        paginationScrollToTop:"off",
        spinner:"spinner0",
        lightBoxMode:"all",
        cobblesPattern:"2x2,1x1,1x1,2x2,1x1,1x1",
        animSpeed:1000,
        delayBasic:1,
        mainhoverdelay:1,
        filterType:"single",
        showDropFilter:"hover",
        filterGroupClass:"esg-fgc-2",
        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
        aspectratio:"4:3",
        responsiveEntries: [
						{ width:1400,amount:4,mmheight:0},
						{ width:1170,amount:4,mmheight:0},
						{ width:1024,amount:4,mmheight:0},
						{ width:960,amount:3,mmheight:0},
						{ width:778,amount:3,mmheight:0},
						{ width:640,amount:3,mmheight:0},
						{ width:480,amount:1,mmheight:0}
						]
	});

	try{
	jQuery("#esg-grid-2-1 .esgbox").esgbox({
		padding : [0,0,0,0],
 		width:800,
 		height:600,
 		minWidth:100,
 		minHeight:100,
 		maxWidth:1200,
 		maxHeight:9999,
 		autoPlay:false,
 		playSpeed:3000,
 		preload:3,
      beforeLoad:function() { 
		 },
      afterLoad:function() { 
 		if (this.element.hasClass("esgboxhtml5")) {
			this.type ="html5";
		   var mp = this.element.data("mp4"),
		      ogv = this.element.data("ogv"),
		      webm = this.element.data("webm");
		      ratio = this.element.data("ratio");
		      ratio = ratio==="16:9" ? "56.25%" : "75%"
         this.content ='<div class="esg-lb-video-wrapper" style="width:100%"><video autoplay="true" loop=""  poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';
		   };
		 },
		beforeShow : function () { 
			this.title = jQuery(this.element).attr('lgtitle');
			if (this.title) {
				this.title="";
   		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
			}
		},
		afterShow : function() {
		},
		openEffect : 'fade',
		closeEffect : 'fade',
		nextEffect : 'fade',
		prevEffect : 'fade',
		openSpeed : 'normal',
		closeSpeed : 'normal',
		nextSpeed : 'normal',
		prevSpeed : 'normal',
		helpers:{overlay:{locked:false}},
		helpers : {
			media : {},
			overlay: {
				locked: false
			},
		    title : {
				type:""
			}
		}
});

 } catch (e) {}

jQuery( function($){ 

$(document).on('click', '.btn-blank-window', function(e){ e.stopPropagation(); } );

} );});


