$(function () {  
	var $fName = $('.firstname');
	var $lName = $('.lastname');
	var $eMail = $('.email');
	var $fNameHelp = $('.firstname__help');
	var $lNameHelp = $('.lastname__help');
	var $eMailHelp = $('.email__help');

	$fName.hover(
		function() {
			$fNameHelp.addClass("show");
		},
		function() {
			$fNameHelp.removeClass("show");
	});
	$lName.hover(
		function() {
			$lNameHelp.addClass("show");
		},
		function() {
			$lNameHelp.removeClass("show");
	});
	$eMail.hover(
		function() {
			$eMailHelp.addClass("show");
		},
		function() {
			$eMailHelp.removeClass("show");
	});
});