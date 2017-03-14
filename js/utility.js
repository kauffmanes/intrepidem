$(document).ready(function () {

	var $w = $(window),
		$d = $(document);

	//add opacity here in case jquery doesn't work
	// $d.find('body').css('opacity', 0).animate({ 'opacity': 1}, 3000);

	$($w).scroll(function () {

		var $h1 = $('.hero h1');

		if ($w.scrollTop() > 0) {
			$h1.addClass('scrollingHeader');
		} else {
			$h1.removeClass('scrollingHeader');
		}

	});

});