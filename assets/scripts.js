$(document).ready(function() {

/**
	Firefox
*/

	/*changes image and link*/
	$('.firefox').mouseover(function() {
		var image = $(this).attr('id');
		$('#firefox').attr('src', 'assets' + '/' + 'images' + '/'  + 'cropped' + '/' + image + '.png');		
		$('#firelink').attr('href', 'assets' + '/' + 'images' + '/' + image + '.png');		
	});
	
	$('#nobg').mouseover(function() {
		$('#firefox').attr('src', 'assets' + '/' + 'images' + '/' + 'cropped' + '/' + 'nobg' + '.gif');
		$('#firelink').attr('href', 'assets' + '/' + 'images' + '/' + 'nobg' + '.gif');	
	});

	/*adds / removes class to link*/
	$('.firefox').hover(function() {
			$('.firefox').removeClass('active');
			$(this).removeClass('hover').addClass('active');
	});
	
	/*changes description after hovering link*/
	$('#userchrome').hover(function() {
		$('.ff').html('Gives a clean, simple design to firefox.');
	});
	
	/*changes description after hovering link*/
	$('#nobg').hover(function() {
		$('.ff').html('Removes the background on transparent images');
	});

	
/**
	4chan
*/

  /*changes image and link*/
	$('.4chan').mouseover(function() {
		var image = $(this).attr('id');
		$('#4chan').attr('src', 'assets' + '/' + 'images' + '/'  + 'cropped' + '/' + image + '.png');		
		$('#4clink').attr('href', 'assets' + '/' + 'images' + '/' + image + '.png');		
	});

	/*adds / removes class to link*/
	$('.4chan').hover(function() {
			$('.4chan').removeClass('active');
			$(this).removeClass('hover').addClass('active');
	});
	
	$('#stilig').hover(function() {
		$('.4c').html('A bright, simple userstyle for 4chan. Original concept by <a href="https://github.com/Mysoon">Myson</a>');
	});
	
	$('#stilfuld').hover(function() {
		$('.4c').html('A bright, simple userstyle for 4chan.');
	});	
	
	$('#svalish').hover(function() {
		$('.4c').html('A bright, simple userstyle for 4chan.');
	});


});


