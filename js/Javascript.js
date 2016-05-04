var step = 1;


function changeImage(event) {
	event = event || window.event;
	var targetElement = event.target || event.srcElement;
	var paintingName = document.getElementById("painting-name");
	var currentSrc = targetElement.getAttribute("src");
	var mainImage = document.getElementById("mainImage");
	
	var image1 = document.getElementById("image1");
	image1.src = "/img/paintings/image1.png";
	image1 = image1.src
	var image2 = document.getElementById("image2");
	image2.src = "/img/paintings/image2.png";
	image2 = image2.src
	var image3 = document.getElementById("image3");
	image3.src = "/img/paintings/image3.png";
	image3 = image3.src
	var image4 = document.getElementById("image4");
	image4.src = "/img/paintings/image4.png";
	image4 = image4.src
	var image5 = document.getElementById("image5");
	image5.src = "/img/paintings/image5.png";
	image5 = image5.src
	var image6 = document.getElementById("image6");
	image6.src = "/img/paintings/image6.png";
	image6 = image6.src
	var image7 = document.getElementById("image7");
	image7.src = "/img/paintings/image7.png";
	image7 = image7.src
	var image8 = document.getElementById("image8");
	image8.src = "/img/paintings/image8.png";
	image8 = image8.src
	var image9 = document.getElementById("image9");
	image9.src = "/img/paintings/image9.png";
	image9 = image9.src
	var image10 = document.getElementById("image10");
	image10.src = "/img/paintings/image10.png";
	image10 = image10.src
	var image11 = document.getElementById("image11");
	image11.src = "/img/paintings/image11.png";
	image11 = image11.src
	var image12 = document.getElementById("image12");
	image12.src = "/img/paintings/image12.png";
	image12 = image12.src



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


	//  Checks what is being clicked on
	if (targetElement.tagName == "IMG" && targetElement.className !== "arrow-left" && targetElement.className !== "arrow-right") {
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.07";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";

	
		//  Title for the painting
		if (currentSrc == "/img/paintings/image1.png") {
			paintingName.innerHTML = "Painting1";
			step = 1
		}
		else if (currentSrc == "/img/paintings/image2.png") {
			paintingName.innerHTML = "Painting2"
			step = 2
		}
		else if (currentSrc == "/img/paintings/image3.png") {
			paintingName.innerHTML = "Painting3"
			step = 3
		}
		else if (currentSrc == "/img/paintings/image4.png") {
			paintingName.innerHTML = "Painting4"
			step = 4
		}
		else if (currentSrc == "/img/paintings/image5.png") {
			paintingName.innerHTML = "Painting5"
			step = 5
		}
		else if (currentSrc == "/img/paintings/image6.png") {
			paintingName.innerHTML = "Painting6"
			step = 6
		}
		else if (currentSrc == "/img/paintings/image7.png") {
			paintingName.innerHTML = "Painting7"
			step = 7
		}
		else if (currentSrc == "/img/paintings/image8.png") {
			paintingName.innerHTML = "Painting8"
			step = 8
		}
		else if (currentSrc == "/img/paintings/image9.png") {
			paintingName.innerHTML = "Painting9"
			step = 9
		}
		else if (currentSrc == "/img/paintings/image10.png") {
			paintingName.innerHTML = "Painting10"
			step = 10
		}
		else if (currentSrc == "/img/paintings/image11.png") {
			paintingName.innerHTML = "Painting11"
			step = 11
		}
		else if (currentSrc == "/img/paintings/image12.png") {
			paintingName.innerHTML = "Painting12"
			step = 12
		}

	}

	// Changes the to the next image
	else if (targetElement.className == "arrow-right") {
		if (step >= 12) {
			step = 0
		}
		
		step++
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("text" + step);

	}
	// shows the previos image
	else if (targetElement.className == "arrow-left") {
		if (step <= 1) {
			step = 13
		}

		step--
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
	image1.src = "/img/paintings/image13.png";
	image1 = image1.src
	var image2 = document.getElementById("image14");
	image2.src = "/img/paintings/image14.png";
	image2 = image2.src
	var image3 = document.getElementById("image15");
	image3.src = "/img/paintings/image15.png";
	image3 = image3.src
	var image4 = document.getElementById("image16");
	image4.src = "/img/paintings/image16.png";
	image4 = image4.src
	var image5 = document.getElementById("image17");
	image5.src = "/img/paintings/image17.png";
	image5 = image5.src
	var image6 = document.getElementById("image18");
	image6.src = "/img/paintings/image25.png";
	image6 = image6.src
	var image7 = document.getElementById("image19");
	image7.src = "/img/paintings/image26.png";
	image7 = image7.src



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


	//  Checks what is being clicked on
	if (targetElement.tagName == "IMG" && targetElement.className !== "arrow-left" && targetElement.className !== "arrow-right") {
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.07";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";

	
		//  Title for the painting
		if (currentSrc == "/img/paintings/image13.png") {
			paintingName.innerHTML = "Painting1";
			step = 1
		}
		else if (currentSrc == "/img/paintings/image14.png") {
			paintingName.innerHTML = "Painting2"
			step = 2
		}
		else if (currentSrc == "/img/paintings/image15.png") {
			paintingName.innerHTML = "Painting3"
			step = 3
		}
		else if (currentSrc == "/img/paintings/image16.png") {
			paintingName.innerHTML = "Painting4"
			step = 4
		}
		else if (currentSrc == "/img/paintings/image17.png") {
			paintingName.innerHTML = "Painting5"
			step = 5
		}
		else if (currentSrc == "/img/paintings/image25.png") {
			paintingName.innerHTML = "Painting6"
			step = 6
		}
		else if (currentSrc == "/img/paintings/image26.png") {
			paintingName.innerHTML = "Painting7"
			step = 7
		}
	}

	// Changes the to the next image
	else if (targetElement.className == "arrow-right") {
		if (step >= 7) {
			step = 0
		}
		
		step++
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("text" + step);

	}
	// shows the previos image
	else if (targetElement.className == "arrow-left") {
		if (step <= 1) {
			step = 8
		}

		step--
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