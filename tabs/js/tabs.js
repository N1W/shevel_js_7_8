$(function () {  
	var tab1 = $('.tabs_list1');
	var tab2 = $('.tabs_list2');
	var tab3 = $('.tabs_list3');
	var tab_container1 = $('.tabs__number1');
	var tab_container2 = $('.tabs__number2');
	var tab_container3 = $('.tabs__number3');

	tab1.click(function() {
		tab1.addClass("active");
		tab2.removeClass("active");
		tab3.removeClass("active");
		tab_container1.addClass("show");
		tab_container2.removeClass("show");
		tab_container3.removeClass("show");

	});
	tab2.click(function() {
		tab2.addClass("active");
		tab3.removeClass("active");
		tab1.removeClass("active");
		tab_container2.addClass("show");
		tab_container3.removeClass("show");
		tab_container1.removeClass("show");
	});
	tab3.click(function() {
		tab3.addClass("active");
		tab1.removeClass("active");
		tab2.removeClass("active");
		tab_container3.addClass("show");
		tab_container1.removeClass("show");
		tab_container2.removeClass("show");
	});
});