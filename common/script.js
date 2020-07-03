/// www CR FORUM script 
// all ::WEBSITE:: 2b chnged
// 
///////// ::WEBSITE:: ////////
var postsToHide = []; //// [2,3] or [] of *raw* post_id nums, to display:none-in mainpages 
var forumTerm = "Forums"; /// ie All "Forums" in menu.
var urlWritepost = "https://www.crickety.com/common/a/writepost/";
var htmlWritepost = '<div class="pull-right"><a id="writeapostbutton" onclick="writeapostbutton();return false;" ' + //// id, onclick must same on all
	' style="height:34px;text-transform: uppercase;letter-spacing: 2px;" href="' + urlWritepost + '" target="_top" class="writepost btn btn-primary" role="button"> &nbsp; <img style="filter: invert(1);" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGZQTFRFAAAAra2trq6uBQUFp6entLS0BwcHt7e3r6+vtra2vb29BgYGu7u7xMTExsbGDAwMz8/Pzc3NCgoKzs7OsbGxwsLCCQkJurq6srKysLCwvr6+cnJyDQ0NFBQUioqKvLy8s7Oz////x4rOFwAAACJ0Uk5T////////////////////////////////////////////AA3Qw3EAAAC9SURBVHja1JDZDsIwDASdlhZKue8b9v9/kk1IlFI3Ea9YaqbSjh0rglQZGVlIOhdnCKRXMXeGyKBQ8ufKzyQE21+itjPi0N79hnx83RrLzi/IO3kZEIzPV+QUWgj51uVa+OwHrMkNtBD6F+QTWgj73cgZtFD5+XPyAC1Uvn9PVtBC7fMl+YIWQv+RPPmsKxT+fcdkgwHB72fzFgmBZ0PskBbsnmckBVct8sIEeaGT9wVd/yVk6hcB+RxvAQYAbpZMDO0G2+4AAAAASUVORK5CYII=" height="14" width="14"/> &nbsp;<b>Write a Post</b> &nbsp; </a></div>';
forumId = (typeof forumId === "undefined") ? 1 : forumId;
ThsBlg_dsqs = "crickety";
// 
// 
// ///////// ALL SAME FROM HERE /////////////
// -------------------------------------
// ---- FIRS EXEC ALL ----
// -------------------------------------
// -------------------------------------
// ---- /FIRS EXEC ALL ----
// -------------------------------------
// -------------------------------------
// ---- GLOBAL VARS ----
// -------------------------------------
//////// forum specific disq
///////////////
winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// -------------------------------------
// ---- /GLOBAL VARS ----
// -------------------------------------
// -------------------------------------
// ---- FUNC ----
// -------------------------------------
function writeapostbutton() {
	// forumId = 99;
	var forumTitle, forumDesc;
	try {
		forumTitle = subForum[forumId][0];
		forumDesc = subForum[forumId][1];
	} catch (e) {
		forumTitle = "";
		forumDesc = "";
	}
	localStorage.setItem('writeapostbutton',
		JSON.stringify({
			"forumId": forumId,
			"forumTitle": forumTitle,
			"forumDesc": forumDesc
		}));
	window.location.href = urlWritepost;
	// console.log(JSON.parse(localStorage.getItem("writeapostbutton")));
	return false;
}

function viewport(percentage, property) {
	// v1 - returns viewport % in pixels
	// property='vw','vh', usage: viewport(40, "vh")+'px';
	if (property == "vw") {
		a = Math.round((Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) * percentage / 100);
	}
	if (property == "vh") {
		a = Math.round((Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) * percentage / 100);
	}
	return a;
}

function ldngPrgssBar() {
	///// v1 
	//// req bootstrap
	return '<div id="ldngPrgssBar"><div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> </div> </div> </div>';
}

function detectmob() {
	if (window.innerWidth <= 800) {
		return true;
	} else {
		return false;
	}
}

function detectmob_500() {
	if (window.innerWidth <= 500) {
		return true;
	} else {
		return false;
	}
}
// --- NO GO FOR SCRIPTS ON LOC CONTAINING ---
// usage: if ( OK2Go("asad") ){  }
function OK2Go(what) {
	if (what == "asad") {
		// asad spcfc
	}
	if (arrayItemMatchesString(["blgutpg"], window.location.pathname)) {
		return false;
	}
	return true;
}

function arrayItemMatchesString(arr, stringText) {
	// v1 - arrayItemMatchesString True if in array matches stringText
	if ((new RegExp('\\b' + arr.join('\\b|\\b') + '\\b')).test(stringText)) {
		return true;
	} else {
		return false;
	}
}

function forumMenu() {
	// v2
	if (typeof thsForumRootPath === 'undefined') {
		thsForumRootPath = "/";
	}
	var a = "";
	var current = " ";
	// depending on useAllInOneTopPage, top forum will be forum 0 or forum# 1...
	var topForum = (useAllInOneTopPage == "yes") ? 0 : 1;
	for (var i = topForum; i < subForum.length; i++) {
		if (i == forumId) {
			current = ' class= "active" ';
		} else {
			current = "";
		}
		if (i == 0) {
			a += '<li ' + current + '><a href="' + thsForumRootPath + '">' + subForum[0][0] + '</a></li>';
		} else {
			a += '<li ' + current + '><a href="' + thsForumRootPath + 'f' + i + '_p1.html">' + subForum[i][0] + '</a></li>';
		}
	}
	return '' +
		'<style>#formMenuTab .pntr{display: inline-block; margin-left: 0 0 0 5px;color:black}</style>' +
		'<ul class="nav nav-tabs" id="formMenuTab">' +
		'<li role="presentation"><a href="' + thsForumRootPath + '"> Home <span class="pntr">&gt;</span> </a></li>' +
		'<li role="presentation" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">All ' + forumTerm + '<span class="caret"></span> </a><ul class="dropdown-menu" role="menu">' + a + '</ul></li>' +
		'<li role="presentation"><a href="' + (forumId == 0 ? 'index' : 'f' + forumId + '_p1') + '.html"> <span class="pntr" style="font-weight:bold;margin-left: 5px 0 0;">&gt;</span> ' + subForum[forumId][0] + ' </a></li>' +
		'</ul>';
}

function writeInnerHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = html;
	}
}

function appendHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("beforeend", html);
	}
}

function prependHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("afterbegin", html);
	}
}

function writeInnerHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].innerHTML = html;
	}
}

function prependHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterbegin", html);
	}
}

function prependHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterbegin", html);
	}
}

function appendHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforeend", html);
	}
}

function insertAfterHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("afterend", html);
	}
}

function appendHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforeend", html);
	}
}

function insertBeforeHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterend", html);
	}
}

function insertBeforeHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterend", html);
	}
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

function gCSE(resultsDivId, formDivId, cseId) {
	// v3 -- REQ JQUERY - ASYNC GCSE LOADER IN DIV ID
	// cse layout:full-width, theme:default
	// <div id="formDivId"></div><div id="resultsDivId"></div>
	$.ajax({
		url: '//www.google.com/jsapi',
		dataType: 'script',
		cache: true,
		success: function() {
			google.load('search', '1', {
				"callback": function() {
					var customSearchOptions = {};
					var customSearchControl = new google.search.CustomSearchControl(cseId, customSearchOptions);
					customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
					var options = new google.search.DrawOptions();
					options.setAutoComplete(true);
					options.setSearchFormRoot(formDivId);
					customSearchControl.draw(resultsDivId, options);
				}
			});
			$('html > head').append($('<style> .gsc-branding {display:none}</style>'));
		}
	});
}

function tw_btn() {
	return '';
}

function disqusAsync(disqusId, divId) {
	// REQ JQRY
	// v3
	var ds_loaded = false;
	try {
		var top = $("#" + divId).offset().top;
	} catch (e) {};

	function check() {
		if (!ds_loaded && $(window).scrollTop() + $(window).height() > top) {
			$.ajax({
				type: "GET",
				url: "https://" + disqusId + ".disqus.com/embed.js",
				dataType: "script",
				cache: true
			});
			ds_loaded = true;
		}
	}
	$(window).scroll(check);
	check();
}
// 
// 
function mainpage() {
	// REQ JQ
	// --- BOOTSTRAP DOM+CSS ---
	// arr. subftitle & subfdesc
	if (forumId < 2) { // not on home
		$('.container').prepend(
			'<div>' + forumMenu() + '</div>'
		);
	} else {
		$('.container').prepend(
			'<div class="subnum14" id="subftitle">' +
			'<div>' + forumMenu() + '</div>' +
			'<div class="clearer"></div>' +
			'<div class="subnum14 well" id="subfdesc">' +
			'<h1>' + subForum[forumId][0] + '</h1>' +
			subForum[forumId][1] +
			'</div>' +
			'<div class="clearer"></div>' +
			'</div>' +
			'</div>'
		);
	}
	// rearr. .post1 for BS
	// add BS class to post1
	$(".post1").addClass("row list-group-item");
	// add receivers for elems
	$('.post1').prepend(
		//'<div class="pic col-md-2 col-xs-6"></div>'+ // no gglimg for 
		'<div class="title col-md-4 col-xs-6"></div>' +
		'<div class="user col-md-2 col-xs-6"></div>' +
		'<div class="text col-md-6  row "></div>' +
		'');
	// move elems into receivers
	$('.post1').each(function(index) {
		//$(".postpic",this).prependTo($(".pic",this));
		$("h2", this).prependTo($(".title", this));
		$(".author", this).prependTo($(".user", this)).wrap("<b></b>");
		$(".postcdwrap", this).prependTo($(".text", this));
	});
	// 
	// 
	// rearr. prevlink...
	// mov all a in li then all li into one ul
	$("#prevlink a").wrap("<li></li>");
	$("#prevlink li").wrapAll('<ul class="pagination"></ul>');
	// todo fix Author
	////// HIDE/DISPLAYNONE POSTS (IF ANY)...
	try {
		var a = postsToHide.map(i => '#p_' + i).join(",");
		$(a).css('display', 'none');
	} catch (e) {}
} // MAINPAGE
// 
// 
function itempage() {
	// REQ JQ
	// --- BOOTSTRAP DOM+CSS ---
	// breadcrumbs using js vars in head
	$('h1').prepend(ldngPrgssBar());
	$("h1").before('<div>' + forumMenu() + '</div>');
	// author
	// $(".author i").remove();
	$(".author").replaceWith(function() {
		return $('<div class="well well-sm">Author: <b>' +
			$(this).html() +
			'</b></div>');
	});
	// legacy inline comms in posts
	$(".o_post").addClass("panel panel-default list-group-item row");
	$(".o_post_subj").addClass("panel");
	$(".o_post_auth").addClass("col-md-2 well glyphicon glyphicon-user");
	$(".o_post_text").addClass("col-md-9 col-xs-offset-1");
	$(".container iframe.cr_video").wrap(' <div class="embed-responsive embed-responsive-16by9"/> ');
	$(".container iframe.cr_video").addClass('embed-responsive-item');
	//writeRSS("https://feeds.feedburner.com/",document.getElementById("provdiv_topics_feed"));
	//writeRSS("https://feeds.feedburner.com/",document.getElementById("provdiv_topics_feed2"));
	//writeRSS("https://feeds.feedburner.com/",document.getElementById("provdiv_events_feed"));
} // ITEMPAGE
// 
function userpage() {
	var usrinf = $('[data-usrinf]').attr('data-usrinf').split('|');
	var usrimg = $('[data-usrimg]').attr('data-usrimg');
	var usrinf_from = usrinf[0] ? '<li><b>From</b> ' + usrinf[0] + '</li>' : '';
	var usrinf_occ = usrinf[1] ? '<li><b>Occupation</b> ' + usrinf[1] + '</li>' : '';
	var usrinf_int = usrinf[2] ? '<li><b>Interests</b> ' + usrinf[2] + '</li>' : '';
	var usrinf_soc1 = usrinf[3] ? '<b>More at: </b><li><a target="_blank" rel="nofollow" href="' + usrinf[3] + '">' + usrinf[3] + '</a></li>' : '';
	var usrinf_soc2 = usrinf[4] ? '<li><a target="_blank" rel="nofollow" href="' + usrinf[4] + '">' + usrinf[4] + '</a></li>' : '';
	var usrinf_soc3 = usrinf[5] ? '<li><a target="_blank" rel="nofollow" href="' + usrinf[5] + '">' + usrinf[5] + '</a></li>' : '';
	$('#usrinf').html('<ul>' + usrinf_from + usrinf_occ + usrinf_int + usrinf_soc1 + usrinf_soc2 + usrinf_soc3 + '</ul>');
	// console.log(usrinf);
	// console.log(usrimg);
}
// USERPAGE
// 
// -------------------------------------
// --- EXEC 
// -------------------------------------
// 
// 
// 
// 
// fbad on all mob
// 
if (detectmob()) {}
//////////////
// 
// ---- EXEC:AS ----
// link 8911453841, ad 1388187040
// 
// 
// AS MAINPAGE --------------
if (ThsBlg_pg == "mainpage") {
	// 
	// ----- MAINPAGE DTP+MOB
	// IMPORTANT - ELEMS-4-AS AND POST1 CLASSES
	var a = document.getElementsByClassName('post1');
	for (var i = 0; i < a.length; i++) {
		var post1 = document.getElementsByClassName('post1')[i];
		post1.setAttribute('id', 'postnum' + (i + 1));
		post1.insertAdjacentHTML("afterend",
			'<div class="as_main_bwposts">' +
			'<div class="c_bwposts_' + i + '" id="id_bwposts_' + i + '"></div>' +
			'</div>' +
			'');
	}
}
// 
// /AS MAINPAGE --------------
// 
// AS ITEMPAGE --------------
// 
if (ThsBlg_pg == "itempage" && OK2Go("asad")) {
	// 
	// ----- ITEMPAGE DTP
	// 
	if (!detectmob()) {
		// 
		// itempage dtp ad 1/1
		// insertAfterHTMLByTag('h1', '<div style="float:right;margin:50px 0 0 ' + viewport(5, 'vw') + 'px;width:' + viewport(25, 'vw') + 'px;height:' + viewport(75, 'vh') + 'px;min-height:600px;"><div id="rightbar"></div></div>');
		// console.log('yeah');
	}
	// 
	// ----- /ITEMPAGE DTP
	// 
	// ----- ITEMPAGE MOB
	// 
	if (detectmob()) {
		// 
	}
	// 
	// ----- /ITEMPAGE MOB
	// 
}
//
// ============= JQ =======================
$(document).ready(function() {
	// ---- EXEC:MENUS+FOOTR ----
	writeInnerHTMLByClass("as_all_T0", '' +
		'<div class="clearer"></div>' +
		'<div style="width:90%;margin:0 auto">' +
		'<table style="width:100%"><tr>' +
		'<td>' + htmlWritepost + '</td>  ' +
		'<td style="width:200px">  <div id="twBtn" style="width:100%;height:34px;float:right;"> </div> </td>' +
		'</tr></table>' +
		'</div>' +
		'<div class="clearer"></div>' +
		'');
	if (ThsBlg_pg == "mainpage") {
		mainpage();
	}
	if (ThsBlg_pg == "itempage") {
		itempage();
	}
	if (ThsBlg_pg == "userpage") {
		userpage();
	}
	// ---- LAST EXEC ALL ----
	$('.container').prepend('<div style="padding:10px 0"><div id="cseForm"></div><div id="cseResults"></div></div>');
	// gCSE('cseResults', 'cseForm', ThsBlg_cse);
	$("#twBtn").html(tw_btn);
	// ---- /LAST EXEC ALL ---- 
}); //(document).ready(function
// ========= window on load ALL AFTER  =========
$(window).on("load", function() {
	// itempage
	if (ThsBlg_pg == 'itempage') {
		$(".disqcom").html('<div id="disqus_thread"></div><div style="padding: 150px 0"></div>');
		disqusAsync(ThsBlg_dsqs, 'disqus_thread');
		$('#ldngPrgssBar').remove();
	}
});
//
// -------------------------------------
// --- /EXEC 
// -------------------------------------
// === END