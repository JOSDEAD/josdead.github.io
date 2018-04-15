//filter gallery's images
$('.portfolio-item').isotope({
	itemSelector: '.item',
	masonry: {
		columnWidth: 354,
		isFitWidth: true
	}
});
//active animation from gallery menu
$('.portfolio-menu ul li').click(function () {
	$('.portfolio-menu ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.portfolio-item').isotope({
		filter: selector
	});
	return false;
});