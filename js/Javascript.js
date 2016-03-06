var step = 1;


function changeImage(event) {
	event = event || window.event;

	var targetElement = event.target || event.srcElement;
	var paintingName = document.getElementById("painting-name");
	var currentSrc = targetElement.getAttribute("src");
	var mainImage = document.getElementById("mainImage");
	var image1 = document.getElementById("image1");
	image1.src = "/img/paintings/image1.jpg";
	image1 = image1.src
	var image2 = document.getElementById("image2");
	image2.src = "/img/paintings/image2.jpg";
	image2 = image2.src
	var image3 = document.getElementById("image3");
	image3.src = "/img/paintings/image3.jpg";
	image3 = image3.src
	var image4 = document.getElementById("image4");
	image4.src = "/img/paintings/image4.jpg";
	image4 = image4.src
	var image5 = document.getElementById("image5");
	image5.src = "/img/paintings/image5.jpg";
	image5 = image5.src
	var image6 = document.getElementById("image6");
	image6.src = "/img/paintings/image6.jpg";
	image6 = image6.src
	var image7 = document.getElementById("image7");
	image7.src = "/img/paintings/image7.jpg";
	image7 = image7.src
	var image8 = document.getElementById("image8");
	image8.src = "/img/paintings/image8.jpg";
	image8 = image8.src
	var image9 = document.getElementById("image9");
	image9.src = "/img/paintings/image9.jpg";
	image9 = image9.src
	var image10 = document.getElementById("image10");
	image10.src = "/img/paintings/image10.jpg";
	image10 = image10.src
	var image11 = document.getElementById("image11");
	image11.src = "/img/paintings/image11.jpg";
	image11 = image11.src
	var image12 = document.getElementById("image12");
	image12.src = "/img/paintings/image12.jpg";
	image12 = image12.src

	var text1 = "Painting1";
	var text2 = "Painting2";
	var text3 = "Painting3";
	var text4 = "Painting4";




	if (targetElement.tagName == "IMG" && targetElement.className !== "arrow-left" && targetElement.className !== "arrow-right") {
		mainImage.src = targetElement.getAttribute("src");

	

		if (currentSrc == "/img/paintings/image1.jpg") {
		paintingName.innerHTML = "Painting1";
		}
		else if (currentSrc == "/img/paintings/image2.jpg") {
			paintingName.innerHTML = "Painting2"
		}
		else if (currentSrc == "/img/paintings/image3.jpg") {
			paintingName.innerHTML = "Painting3"
		}
		else if (currentSrc == "/img/paintings/image4.jpg") {
			paintingName.innerHTML = "Painting4"
		}
		else if (currentSrc == "/img/paintings/image5.jpg") {
			paintingName.innerHTML = "Painting5"
		}
		else if (currentSrc == "/img/paintings/image6.jpg") {
			paintingName.innerHTML = "Painting6"
		}
		else if (currentSrc == "/img/paintings/image7.jpg") {
			paintingName.innerHTML = "Painting7"
		}
		else if (currentSrc == "/img/paintings/image8.jpg") {
			paintingName.innerHTML = "Painting8"
		}
		else if (currentSrc == "/img/paintings/image9.jpg") {
			paintingName.innerHTML = "Painting9"
		}
		else if (currentSrc == "/img/paintings/image10.jpg") {
			paintingName.innerHTML = "Painting10"
		}
		else if (currentSrc == "/img/paintings/image11.jpg") {
			paintingName.innerHTML = "Painting11"
		}
		else if (currentSrc == "/img/paintings/image12.jpg") {
			paintingName.innerHTML = "Painting12"
		}

	}


	else if (targetElement.className == "arrow-right") {
		if (step > 12) {
			step--
		}
		
		step++
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("text" + step);

	}
	else if (targetElement.className == "arrow-left") {
		if (step < 1) {
			step++
		}

		step--
		mainImage.src = eval("image" + step);
		paintingName.innerHTML = eval("text" + step);
	}
}