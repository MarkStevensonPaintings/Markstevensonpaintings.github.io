var step = 1;


function changeImage(event) {
	event = event || window.event;
	var targetElement = event.target || event.srcElement;
	var paintingName = document.getElementById("painting-name");
	var paintingInfo = document.getElementById("painting-info");
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
	var image15 = document.getElementById("image15");
	image15.src = "/img/paintings/image29P.jpg";
	image15 = image15.src



	var Name1 = "Narcissa with a hat";
	var Name2 = "Teresa";
	var Name3 = "Gudrun";
	var Name4 = "Lucy";
	var Name5 = "Two Nudes";
	var Name6 = "Gosia";
	var Name7 = "Jenny";
	var Name8 = "Portrait of a Woman";
	var Name9 = "Micky";
	var Name10 = "Artist’s Mother";
	var Name11 = "Rosalind Gilmore";
	var Name12 = "Self Portrait";
	var Name13 = "Ivor";
	var Name14 = "Marta";
	var Name15 = "Self Portrait";

	var Info1 = "Oil on Canvas 45x35cm";
	var Info2 = "Oil on Canvas 30x25cm";
	var Info3 = "Oil on Canvas 50x40cm";
	var Info4 = "Oil on Canvas 90x70cm";
	var Info5 = "Oil on Canvas 70x70cm";
	var Info6 = "Oil on Board 30x26cm";
	var Info7 = "Oil on Board 30x26";
	var Info8 = "Oil on Canvas 30x25cm";
	var Info9 = "Oil on Canvas 50x40cm";
	var Info10 = "Oil on Board 22x17cm";
	var Info11 = "Oil on Canvas 45x35cm";
	var Info12 = "Oil on Board 20x20cm";
	var Info13 = "Oil on Canvas 40x60cm";
	var Info14 = "Oil on Canvas 30x25cm";
	var Info15 = "unknown";


	//  Checks what is being clicked on
	if (targetElement.tagName == "IMG" && targetElement.className !== "arrow-left" && targetElement.className !== "arrow-right" && currentSrc.includes("P")) {
		document.getElementById("container-size").className = "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.02";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";
		mainImage.height = 700
		mainImage.width = 600

	
		//  Title for the painting
		if (currentSrc == "/img/paintings/image1P.png") {
			paintingName.innerHTML = Name1
			paintingInfo.innerHTML = Info1
			step = 1
		}
		else if (currentSrc == "/img/paintings/image2P.png") {
			paintingName.innerHTML = Name2
			paintingInfo.innerHTML = Info2
			step = 2
		}
		else if (currentSrc == "/img/paintings/image3P.png") {
			paintingName.innerHTML = Name3
			paintingInfo.innerHTML = Info3
			step = 3
		}
		else if (currentSrc == "/img/paintings/image4P.png") {
			paintingName.innerHTML = Name4
			paintingInfo.innerHTML = Info4
			step = 4
		}
		else if (currentSrc == "/img/paintings/image5P.png") {
			paintingName.innerHTML = Name5
			paintingInfo.innerHTML = Info5
			step = 5
		}
		else if (currentSrc == "/img/paintings/image6P.png") {
			paintingName.innerHTML = Name6
			paintingInfo.innerHTML = Info6
			step = 6
		}
		else if (currentSrc == "/img/paintings/image7P.png") {
			paintingName.innerHTML = Name7
			paintingInfo.innerHTML = Info7
			step = 7
		}
		else if (currentSrc == "/img/paintings/image8P.png") {
			paintingName.innerHTML = Name8
			paintingInfo.innerHTML = Info8
			step = 8
		}
		else if (currentSrc == "/img/paintings/image9P.png") {
			paintingName.innerHTML = Name9
			paintingInfo.innerHTML = Info9
			step = 9
		}
		else if (currentSrc == "/img/paintings/image10P.png") {
			paintingName.innerHTML = Name10
			paintingInfo.innerHTML = Info10
			step = 10
		}
		else if (currentSrc == "/img/paintings/image11P.png") {
			paintingName.innerHTML = Name11
			paintingInfo.innerHTML = Info11
			step = 11
		}
		else if (currentSrc == "/img/paintings/image12P.png") {
			paintingName.innerHTML = Name12
			paintingInfo.innerHTML = Info12
			step = 12
		}
		else if (currentSrc == "/img/paintings/image29P.jpg") {
			paintingName.innerHTML = Name15
			paintingInfo.innerHTML = Info15
			step = 15
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

	else if (targetElement.tagName == "IMG" && currentSrc.includes("L")) {
		document.getElementById("container-size").className = "col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.02";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";
		mainImage.height = 1080
		mainImage.width = 1920

		if (currentSrc == "/img/paintings/image27L.png") {
			paintingName.innerHTML = Name13
			paintingInfo.innerHTML = Info13
			step = 13
		}
		else if (currentSrc == "/img/paintings/image28L.png") {
			paintingName.innerHTML = Name14
			paintingInfo.innerHTML = Info14
			step = 14
		}




	}

	// Changes the to the next image
	else if (targetElement.className == "arrow-right") {
		if (step >= 15) {
			step = 0
		}
		step++

		if (step == 13 || step == 14) {
			document.getElementById("container-size").className = "col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3 || step == 4 || step == 5 || step == 6 || step == 7 || step == 8 || step == 9|| step == 10|| step == 11 || step == 12 || step == 15) {
			document.getElementById("container-size").className = "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 700
			mainImage.width = 600
		}

		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("Name" + step);
		paintingInfo.innerHTML = eval("Info" + step);

	}
	// shows the previos image
	else if (targetElement.className == "arrow-left") {
		if (step <= 1) {
			step = 16
		}
		step--

		if (step == 13 || step == 14) {
			document.getElementById("container-size").className = "col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3 || step == 4 || step == 5 || step == 6 || step == 7 || step == 8 || step == 9|| step == 10|| step == 11 || step == 12 || step == 15) {
			document.getElementById("container-size").className = "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 700
			mainImage.width = 600
		}

		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("Name" + step);
		paintingInfo.innerHTML = eval("Info" + step);
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
	var paintingInfo = document.getElementById("painting-info");
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

	var Name1 = "Lemons";
	var Name2 = "Sunflowers and Alstroes";
	var Name3 = "Coffee Cup";
	var Name4 = "Lemon";
	var Name5 = "Tomatoes and Knife";
	var Name6 = "Satsumas";
	var Name7 = "Apple and Knife";

	var Info1 = "Oil on Board";
	var Info2 = "Oil on Board";
	var Info3 = "Oil on Board";
	var Info4 = "Oil on Board";
	var Info5 = "Oil on Board";
	var Info6 = "Oil on Board";
	var Info7 = "Oil on Board";

	//  Checks what is being clicked on
	if (targetElement.tagName == "IMG" && targetElement.className !== "arrow-left" && targetElement.className !== "arrow-right" && currentSrc.includes("P")) {
		document.getElementById("container-size").className = "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.02";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";
		mainImage.height = 700
		mainImage.width = 600


	
		//  Title for the painting
		if (currentSrc == "/img/paintings/image13P.png") {
			paintingName.innerHTML = Name1
			paintingInfo.innerHTML = Info1
			step = 1
		}
		else if (currentSrc == "/img/paintings/image14P.png") {
			paintingName.innerHTML = Name2
			paintingInfo.innerHTML = Info2
			step = 2
		}
		else if (currentSrc == "/img/paintings/image15P.png") {
			paintingName.innerHTML = Name3
			paintingInfo.innerHTML = Info3
			step = 3
		}
		else if (currentSrc == "/img/paintings/image16P.png") {
			paintingName.innerHTML = Name4
			paintingInfo.innerHTML = Info4
			step = 4
		}
		else if (currentSrc == "/img/paintings/image17P.png") {
			paintingName.innerHTML = Name5
			paintingInfo.innerHTML = Info5
			step = 5
		}
	}

	else if (targetElement.tagName == "IMG" && currentSrc.includes("L")) {
		document.getElementById("container-size").className = "col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.02";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";
		mainImage.height = 1080
		mainImage.width = 1920

		if (currentSrc == "/img/paintings/image25L.png") {
			paintingName.innerHTML = Name6
			paintingInfo.innerHTML = Info6
			step = 6
		}
		else if (currentSrc == "/img/paintings/image26L.png") {
			paintingName.innerHTML = Name7
			paintingInfo.innerHTML = Info7
			step = 7
		}
	}
	
	// Changes the to the next image
	else if (targetElement.className == "arrow-right") {
		if (step >= 7) {
			step = 0
		}
		step++

		if (step == 6 || step == 7) {
			document.getElementById("container-size").className = "col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3 || step == 4 || step == 5) {
			document.getElementById("container-size").className = "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 700
			mainImage.width = 600
		}
		
		
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("Name" + step);
		paintingInfo.innerHTML = eval("Info" + step);

	}
	// shows the previos image
	else if (targetElement.className == "arrow-left") {
		if (step <= 1) {
			step = 8
		}
		step--

		if (step == 6 || step == 7) {
			document.getElementById("container-size").className = "col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3 || step == 4 || step == 5) {
			document.getElementById("container-size").className = "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 700
			mainImage.width = 600
		}

		
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("Name" + step);
		paintingInfo.innerHTML = eval("Info" + step);
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
	var paintingInfo = document.getElementById("painting-info");
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

	var Name1 = "Crenmore";
	var Name2 = "Soane Museum";
	var Name3 = "Garden";
	var Name4 = "Small flowers";
	var Name5 = "Esher Pond";
	var Name6 = "St James Park";
	var Name7 = "Stormy Sky";

	var Info1 = "Oil on Board 28x22 cm";
	var Info2 = "Oil on Board 28x22 cm";
	var Info3 = "Oil on Canvas";
	var Info4 = "Oil on Board";
	var Info5 = "Oil on Board";
	var Info6 = "Oil on Board 27x22 cm";
	var Info7 = "Chelsea Harbour 27x22 cm";

	//  Checks what is being clicked on
	if (targetElement.tagName == "IMG" && targetElement.className !== "arrow-left" && targetElement.className !== "arrow-right" && currentSrc.includes("P")) {
		document.getElementById("container-size").className = "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.02";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";
		mainImage.height = 700
		mainImage.width = 600

	
		//  Title for the painting
		if (currentSrc == "/img/paintings/image18P.png") {
			paintingName.innerHTML = Name1
			paintingInfo.innerHTML = Info1
			step = 1
		}
		else if (currentSrc == "/img/paintings/image19P.png") {
			paintingName.innerHTML = Name2
			paintingInfo.innerHTML = Info2
			step = 2
		}
		else if (currentSrc == "/img/paintings/image20P.png") {
			paintingName.innerHTML = Name3
			paintingInfo.innerHTML = Info3
			step = 3
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

	else if (targetElement.tagName == "IMG" && currentSrc.includes("L")) {
		document.getElementById("container-size").className = "col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
		$('.container-hide').show(300);
		mainImage.src = targetElement.getAttribute("src");
		document.getElementById("container2").style.opacity = "0.02";
		document.getElementsByTagName("body")[0].style.backgroundColor = "#404040";
		document.getElementById("mynavbar").style.opacity = "0.01";
		document.getElementById("footer-hide").style.opacity = "0.01";
		mainImage.height = 1080
		mainImage.width = 1920

		if (currentSrc == "/img/paintings/image21L.png") {
			paintingName.innerHTML = Name4
			paintingInfo.innerHTML = Info4
			step = 4
		}
		else if (currentSrc == "/img/paintings/image22L.png") {
			paintingName.innerHTML = Name5
			paintingInfo.innerHTML = Info5
			step = 5
		}
		else if (currentSrc == "/img/paintings/image23L.png") {
			paintingName.innerHTML = Name6
			paintingInfo.innerHTML = Info6
			step = 6
		}
		else if (currentSrc == "/img/paintings/image24L.png") {
			paintingName.innerHTML = Name7
			paintingInfo.innerHTML = Info7
			step = 7
		}
	}
	// Changes the to the next image
	else if (targetElement.className == "arrow-right") {
		if (step >= 7) {
			step = 0
		}
		step++

		if (step == 4 || step == 5 || step == 6 || step == 7) {
			document.getElementById("container-size").className = "col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3) {
			document.getElementById("container-size").className = "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 700
			mainImage.width = 600
		}
		
		
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("Name" + step);
		paintingInfo.innerHTML = eval("Info" + step);

	}
	// shows the previos image
	else if (targetElement.className == "arrow-left") {
		if (step <= 1) {
			step = 8
		}
		step--

		if (step == 4 || step == 5 || step == 6 || step == 7) {
			document.getElementById("container-size").className = "col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 1080
			mainImage.width = 1920
		}
		if (step == 1 || step == 2 || step == 3) {
			document.getElementById("container-size").className = "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10";
			mainImage.height = 700
			mainImage.width = 600
		}

		
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("Name" + step);
		paintingInfo.innerHTML = eval("Info" + step);
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