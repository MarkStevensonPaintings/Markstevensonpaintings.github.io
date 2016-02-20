var Paintings = function() {
	var painting_name = document.getElementById("painting-name");
	var painting_info = document.getElementById("painting-info");
	$('.image1').click(function() {
		$('.image-hide').show(100).attr('id', 'image1');
		painting_name.innerHTML = "Painting 1";
		painting_info.innerHTML = "Here goes some information about the painting for painting 1";
	});
	$('.image2').click(function() {
		$('.image-hide').show(100).attr('id', 'image2');
		painting_name.innerHTML = "Painting 2";
		painting_info.innerHTML = "Here goes some information about the painting for painting 2";
	});
	$('.image3').click(function() {
		$('.image-hide').show(100).attr('id', 'image3');
		painting_name.innerHTML = "Painting 3";
		painting_info.innerHTML = "Here goes some information about the painting for painting 3";
	});
	$('.image4').click(function() {
		$('.image-hide').show(100).attr('id', 'image4');
		painting_name.innerHTML = "Painting 4";
		painting_info.innerHTML = "Here goes some information about the painting for painting 4";
	});
	$('.image5').click(function() {
		$('.image-hide').show(100).attr('id', 'image5');
		painting_name.innerHTML = "Painting 5";
		painting_info.innerHTML = "Here goes some information about the painting for painting 5";
	});
	$('.image6').click(function() {
		$('.image-hide').show(100).attr('id', 'image6');
		painting_name.innerHTML = "Painting 6";
		painting_info.innerHTML = "Here goes some information about the painting for painting 6";
	});
	$('.image7').click(function() {
		$('.image-hide').show(100).attr('id', 'image7');
		painting_name.innerHTML = "Painting 7";
		painting_info.innerHTML = "Here goes some information about the painting for painting 7";
	});
	$('.image8').click(function() {
		$('.image-hide').show(100).attr('id', 'image8');
		painting_name.innerHTML = "Painting 8";
		painting_info.innerHTML = "Here goes some information about the painting for painting 8";
	});
	$('.image9').click(function() {
		$('.image-hide').show(100).attr('id', 'image9');
		painting_name.innerHTML = "Painting 9";
		painting_info.innerHTML = "Here goes some information about the painting for painting 9";
	});
	$('.image10').click(function() {
		$('.image-hide').show(100).attr('id', 'image10');
		painting_name.innerHTML = "Painting 10";
		painting_info.innerHTML = "Here goes some information about the painting for painting 10";
	});
	$('.image11').click(function() {
		$('.image-hide').show(100).attr('id', 'image11');
		painting_name.innerHTML = "Painting 11";
		painting_info.innerHTML = "Here goes some information about the painting for painting 11";
	});
	$('.image12').click(function() {
		$('.image-hide').show(100).attr('id', 'image12');
		painting_name.innerHTML = "Painting 12";
		painting_info.innerHTML = "Here goes some information about the painting for painting 12";
	});
};

$(document).ready(Paintings);