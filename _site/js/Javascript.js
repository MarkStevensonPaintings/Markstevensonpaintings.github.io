var step = 1;


function changeImage(event) {
	event = event || window.event;
	var targetElement = event.target || event.srcElement;
	var paintingName = document.getElementById("painting-name");
	var currentSrc = targetElement.getAttribute("src");
	var mainImage = document.getElementById("mainImage");
	
	var image1 = document.getElementById("image1");
	image1.src = "/img/paintings/image1P.png";
	image1 = image1.src
	var image2 = document.getElementById("image2");
	image2.src = "/img/paintings/image2P.png";
	image2 = image2.src
	var image3 = document.getElementById("image3");
	image3.src = "/img/paintings/image3P.png";
	image3 = image3.src
	var image4 = document.getElementById("image4");
	image4.src = "/img/paintings/image4P.png";
	image4 = image4.src
	var image5 = document.getElementById("image5");
	image5.src = "/img/paintings/image5P.png";
	image5 = image5.src
	var image6 = document.getElementById("image6");
	image6.src = "/img/paintings/image6P.png";
	image6 = image6.src
	var image7 = document.getElementById("image7");
	image7.src = "/img/paintings/image7P.png";
	image7 = image7.src
	var image8 = document.getElementById("image8");
	image8.src = "/img/paintings/image8P.png";
	image8 = image8.src
	var image9 = document.getElementById("image9");
	image9.src = "/img/paintings/image9P.png";
	image9 = image9.src
	var image10 = document.getElementById("image10");
	image10.src = "/img/paintings/image10P.png";
	image10 = image10.src
	var image11 = document.getElementById("image11");
	image11.src = "/img/paintings/image11P.png";
	image11 = image11.src
	var image12 = document.getElementById("image12");
	image12.src = "/img/paintings/image12P.png";
	image12 = image12.src
	var image13 = document.getElementById("image13");
	image13.src = "/img/paintings/image27L.png";
	image13 = image13.src
	var image14 = document.getElementById("image14");
	image14.src = "/img/paintings/image28L.png";
	image14 = image14.src



	var text1 = "Painting1";
	var text2 = "Painting2";
	var text3 = "Painting3";
	var text4 = "Painting4";
	var text5 = "Painting5";
	var text6 = "Painting6";
	var text7 = "Painting7";
	var text8 = "Painting8";
	var text9 = "Painting9";
	var text10 = "Painting10";
	var text11 = "Painting11";
	var text12 = "Painting12";
	var text13 = "Painting13";
	var text14 = "Painting14";


	//  Checks what is being clicked on
	if (targetElement.tagName == "IMG" && targetElement.className !== "arrow-left" && targetElement.className !== "arrow-right") {
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.07";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";

	
		//  Title for the painting
		if (currentSrc == "/img/paintings/image1P.png") {
			paintingName.innerHTML = "Painting1";
			step = 1
		}
		else if (currentSrc == "/img/paintings/image2P.png") {
			paintingName.innerHTML = "Painting2"
			step = 2
		}
		else if (currentSrc == "/img/paintings/image3P.png") {
			paintingName.innerHTML = "Painting3"
			step = 3
		}
		else if (currentSrc == "/img/paintings/image4P.png") {
			paintingName.innerHTML = "Painting4"
			step = 4
		}
		else if (currentSrc == "/img/paintings/image5P.png") {
			paintingName.innerHTML = "Painting5"
			step = 5
		}
		else if (currentSrc == "/img/paintings/image6P.png") {
			paintingName.innerHTML = "Painting6"
			step = 6
		}
		else if (currentSrc == "/img/paintings/image7P.png") {
			paintingName.innerHTML = "Painting7"
			step = 7
		}
		else if (currentSrc == "/img/paintings/image8P.png") {
			paintingName.innerHTML = "Painting8"
			step = 8
		}
		else if (currentSrc == "/img/paintings/image9P.png") {
			paintingName.innerHTML = "Painting9"
			step = 9
		}
		else if (currentSrc == "/img/paintings/image10P.png") {
			paintingName.innerHTML = "Painting10"
			step = 10
		}
		else if (currentSrc == "/img/paintings/image11P.png") {
			paintingName.innerHTML = "Painting11"
			step = 11
		}
		else if (currentSrc == "/img/paintings/image12P.png") {
			paintingName.innerHTML = "Painting12"
			step = 12
		}
		else if (currentSrc == "/img/paintings/image27L.png") {
			paintingName.innerHTML = "Painting13"
			step = 13
		}
		else if (currentSrc == "/img/paintings/image28L.png") {
			paintingName.innerHTML = "Painting14"
			step = 14
		}

		if (currentSrc.includes("L")) {
			mainImage.height = 1080
			mainImage.width = 1920
		}
		else if (currentSrc.includes("P")) {
			mainImage.height = 700
			mainImage.width = 600
		}
	}

	// Changes the to the next image
	else if (targetElement.className == "arrow-right") {
		if (step >= 14) {
			step = 0
		}
		step++

		if (step == 13 || step == 14) {
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3 || step == 4 || step == 5 || step == 6 || step == 7 || step == 8 || step == 9|| step == 10|| step == 11 || step == 12) {
			mainImage.height = 700
			mainImage.width = 600
		}

		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("text" + step);

	}
	// shows the previos image
	else if (targetElement.className == "arrow-left") {
		if (step <= 1) {
			step = 15
		}
		step--

		if (step == 13 || step == 14) {
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3 || step == 4 || step == 5 || step == 6 || step == 7 || step == 8 || step == 9|| step == 10|| step == 11 || step == 12) {
			mainImage.height = 700
			mainImage.width = 600
		}

		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("text" + step);
	}
	// To close the full image preview
	else {
		$('.container-hide').hide();
		document.getElementById("container2").style.opacity = "1";
		document.getElementsByTagName("body")[0].style.backgroundColor = "transparent";
		document.getElementById("mynavbar").style.opacity = "1";
		document.getElementById("footer-hide").style.opacity = "1";
	}
}


function changeImage2(event) {
	event = event || window.event;
	var targetElement = event.target || event.srcElement;
	var paintingName = document.getElementById("painting-name");
	var currentSrc = targetElement.getAttribute("src");
	var mainImage = document.getElementById("mainImage");
	
	
	var image1 = document.getElementById("image13");
	image1.src = "/img/paintings/image13P.png";
	image1 = image1.src
	var image2 = document.getElementById("image14");
	image2.src = "/img/paintings/image14P.png";
	image2 = image2.src
	var image3 = document.getElementById("image15");
	image3.src = "/img/paintings/image15P.png";
	image3 = image3.src
	var image4 = document.getElementById("image16");
	image4.src = "/img/paintings/image16P.png";
	image4 = image4.src
	var image5 = document.getElementById("image17");
	image5.src = "/img/paintings/image17P.png";
	image5 = image5.src
	var image6 = document.getElementById("image18");
	image6.src = "/img/paintings/image25L.png";
	image6 = image6.src
	var image7 = document.getElementById("image19");
	image7.src = "/img/paintings/image26L.png";
	image7 = image7.src

	var text1 = "Painting1";
	var text2 = "Painting2";
	var text3 = "Painting3";
	var text4 = "Painting4";
	var text5 = "Painting5";
	var text6 = "Painting6";
	var text7 = "Painting7";

	//  Checks what is being clicked on
	if (targetElement.tagName == "IMG" && targetElement.className !== "arrow-left" && targetElement.className !== "arrow-right") {
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.07";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";

	
		//  Title for the painting
		if (currentSrc == "/img/paintings/image13P.png") {
			paintingName.innerHTML = "Painting1";
			step = 1
		}
		else if (currentSrc == "/img/paintings/image14P.png") {
			paintingName.innerHTML = "Painting2"
			step = 2
		}
		else if (currentSrc == "/img/paintings/image15P.png") {
			paintingName.innerHTML = "Painting3"
			step = 3
		}
		else if (currentSrc == "/img/paintings/image16P.png") {
			paintingName.innerHTML = "Painting4"
			step = 4
		}
		else if (currentSrc == "/img/paintings/image17P.png") {
			paintingName.innerHTML = "Painting5"
			step = 5
		}
		else if (currentSrc == "/img/paintings/image25L.png") {
			paintingName.innerHTML = "Painting6"
			step = 6
		}
		else if (currentSrc == "/img/paintings/image26L.png") {
			paintingName.innerHTML = "Painting7"
			step = 7
		}

		if (currentSrc.includes("L")) {
			mainImage.height = 1080
			mainImage.width = 1920
		}
		else if (currentSrc.includes("P")) {
			mainImage.height = 700
			mainImage.width = 600
		}
	}

	// Changes the to the next image
	else if (targetElement.className == "arrow-right") {
		if (step >= 7) {
			step = 0
		}
		step++

		if (step == 6 || step == 7) {
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3 || step == 4 || step == 5) {
			mainImage.height = 700
			mainImage.width = 600
		}
		
		
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("text" + step);

	}
	// shows the previos image
	else if (targetElement.className == "arrow-left") {
		if (step <= 1) {
			step = 8
		}
		step--

		if (step == 6 || step == 7) {
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3 || step == 4 || step == 5) {
			mainImage.height = 700
			mainImage.width = 600
		}

		
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("text" + step);
	}
	// To close the full image preview
	else {
		$('.container-hide').hide();
		document.getElementById("container2").style.opacity = "1";
		document.getElementsByTagName("body")[0].style.backgroundColor = "transparent";
		document.getElementById("mynavbar").style.opacity = "1";
		document.getElementById("footer-hide").style.opacity = "1";
	}
}

function changeImage3(event) {
	event = event || window.event;
	var targetElement = event.target || event.srcElement;
	var paintingName = document.getElementById("painting-name");
	var currentSrc = targetElement.getAttribute("src");
	var mainImage = document.getElementById("mainImage");
	
	
	var image1 = document.getElementById("image20");
	image1.src = "/img/paintings/image18P.png";
	image1 = image1.src
	var image2 = document.getElementById("image21");
	image2.src = "/img/paintings/image19P.png";
	image2 = image2.src
	var image3 = document.getElementById("image22");
	image3.src = "/img/paintings/image20P.png";
	image3 = image3.src
	var image4 = document.getElementById("image23");
	image4.src = "/img/paintings/image21L.png";
	image4 = image4.src
	var image5 = document.getElementById("image24");
	image5.src = "/img/paintings/image22L.png";
	image5 = image5.src
	var image6 = document.getElementById("image25");
	image6.src = "/img/paintings/image23L.png";
	image6 = image6.src
	var image7 = document.getElementById("image26");
	image7.src = "/img/paintings/image24L.png";
	image7 = image7.src

	var text1 = "Painting1";
	var text2 = "Painting2";
	var text3 = "Painting3";
	var text4 = "Painting4";
	var text5 = "Painting5";
	var text6 = "Painting6";
	var text7 = "Painting7";

	//  Checks what is being clicked on
	if (targetElement.tagName == "IMG" && targetElement.className !== "arrow-left" && targetElement.className !== "arrow-right") {
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.07";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";

	
		//  Title for the painting
		if (currentSrc == "/img/paintings/image18P.png") {
			paintingName.innerHTML = "Painting1";
			step = 1
		}
		else if (currentSrc == "/img/paintings/image19P.png") {
			paintingName.innerHTML = "Painting2"
			step = 2
		}
		else if (currentSrc == "/img/paintings/image20P.png") {
			paintingName.innerHTML = "Painting3"
			step = 3
		}
		else if (currentSrc == "/img/paintings/image21L.png") {
			paintingName.innerHTML = "Painting4"
			step = 4
		}
		else if (currentSrc == "/img/paintings/image22L.png") {
			paintingName.innerHTML = "Painting5"
			step = 5
		}
		else if (currentSrc == "/img/paintings/image23L.png") {
			paintingName.innerHTML = "Painting6"
			step = 6
		}
		else if (currentSrc == "/img/paintings/image24L.png") {
			paintingName.innerHTML = "Painting7"
			step = 7
		}

		if (currentSrc.includes("L")) {
			mainImage.height = 1080
			mainImage.width = 1920
		}
		else if (currentSrc.includes("P")) {
			mainImage.height = 700
			mainImage.width = 600
		}
	}

	// Changes the to the next image
	else if (targetElement.className == "arrow-right") {
		if (step >= 7) {
			step = 0
		}
		step++

		if (step == 4 || step == 5 || step == 6 || step == 7) {
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3) {
			mainImage.height = 700
			mainImage.width = 600
		}
		
		
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("text" + step);

	}
	// shows the previos image
	else if (targetElement.className == "arrow-left") {
		if (step <= 1) {
			step = 8
		}
		step--

		if (step == 4 || step == 5 || step == 6 || step == 7) {
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3) {
			mainImage.height = 700
			mainImage.width = 600
		}

		
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("text" + step);
	}
	// To close the full image preview
	else {
		$('.container-hide').hide();
		document.getElementById("container2").style.opacity = "1";
		document.getElementsByTagName("body")[0].style.backgroundColor = "transparent";
		document.getElementById("mynavbar").style.opacity = "1";
		document.getElementById("footer-hide").style.opacity = "1";
	}
}