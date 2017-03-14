$(document).ready(function () {

	var $w = $(window),
		$d = $(document);

	//add opacity here in case jquery doesn't work
	// $d.find('body').css('opacity', 0).animate({ 'opacity': 1}, 3000);

	$($w).scroll(function () {

		var $header = $('header');

		if ($w.scrollTop() > 0) {
			$header.addClass('scrollingHeader');
		} else {
			$header.removeClass('scrollingHeader');
		}

	});

});