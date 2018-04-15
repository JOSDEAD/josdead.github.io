//load animations of skill's bar
jQuery(window).scroll(function () {
	jQuery('.skillbar').each(function () {
		jQuery(this).find('.skillbar-bar').animate({
			width: jQuery(this).attr('data-percent')
		}, 4000);
	});
});