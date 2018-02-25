var button1 = document.getElementById("button-version-1");
var button2 = document.getElementById("button2-version-1");
var spacingBoxOne = document.getElementById("spacing-box-version-1");
var spacingBoxTwo = document.getElementById("spacing-box-version-2");


function formatUrl(url) {
	var regexPattern = /\"|\'|\)/g;
	return url.split('/').pop().replace(regexPattern,'');
}

button1.onclick = function() {
	var currentBackgroundUrl = window.getComputedStyle(document.body).getPropertyValue('background-image');
	var currentBackground = formatUrl(currentBackgroundUrl).toUpperCase();
	switch (currentBackground) {
		case "NK1.JPG":
			document.body.style.backgroundImage = "url('img/NK2.jpg')";
			document.getElementById("spacing-box-version-1").id = "spacing-box-version-2";
			document.getElementById("button-version-1").id = "button-version-2";
			document.getElementById("button2-version-1").id = "button2-version-2";
		break;
		case "NK2.JPG":
			document.body.style.backgroundImage = "url('img/NK1.jpg')";
			document.getElementById("spacing-box-version-2").id = "spacing-box-version-1";
			document.getElementById("button-version-2").id = "button-version-1";
			document.getElementById("button2-version-2").id = "button2-version-1";
		break;
		case "NK3.JPG":
			document.body.style.backgroundImage = "url('img/NK2.jpg')";
			document.getElementById("spacing-box-version-3").id = "spacing-box-version-2";
			document.getElementById("button-version-3").id = "button-version-2";
			document.getElementById("button2-version-3").id = "button2-version-2";
		break;
	}
}

button2.onclick = function() {
	var currentBackgroundUrl = window.getComputedStyle(document.body).getPropertyValue('background-image');
	var currentBackground = formatUrl(currentBackgroundUrl).toUpperCase();
	switch (currentBackground) {
		case "NK1.JPG":
			document.body.style.backgroundImage = "url('img/NK3.jpg')";
			document.getElementById("spacing-box-version-1").id = "spacing-box-version-3";
			document.getElementById("button-version-1").id = "button-version-3";
			document.getElementById("button2-version-1").id = "button2-version-3";
		break;
		case "NK2.JPG":
			document.body.style.backgroundImage = "url('img/NK3.jpg')";
			document.getElementById("spacing-box-version-2").id = "spacing-box-version-3";
			document.getElementById("button-version-2").id = "button-version-3";
			document.getElementById("button2-version-2").id = "button2-version-3";
		break;
		case "NK3.JPG":
			document.body.style.backgroundImage = "url('img/NK1.jpg')";
			document.getElementById("spacing-box-version-3").id = "spacing-box-version-1";
			document.getElementById("button-version-3").id = "button-version-1";
			document.getElementById("button2-version-3").id = "button2-version-1";
		break;
	}
}