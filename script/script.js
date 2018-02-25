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
			var spacingBox1 = document.getElementById("spacing-box-version-1");
			document.body.removeChild(spacingBox1);
			document.getElementById("date_time_1").id = "date_time_2";
			document.body.appendChild(spacingBox1);
			document.getElementById("spacing-box-version-1").id = "spacing-box-version-2";
			document.getElementById("button-version-1").id = "button-version-2";
			document.getElementById("button2-version-1").id = "button2-version-2";

		break;
		case "NK2.JPG":
			document.body.style.backgroundImage = "url('img/NK1.jpg')";
			var date_time = document.getElementById("date_time_2");
			document.body.removeChild(date_time);
			date_time.id = "date_time_1";
			document.body.appendChild(date_time);
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
			document.getElementById("date_time_1").id = "date_time_3";
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

function blink() {
	var colon = document.getElementById("colon");
	colon.style.visibility = colon.style.visibility == "hidden" ? "visible" : "hidden";
}

document.body.onload = function() {
	updateClock();
	setInterval("updateClock()", 1000);
	setInterval("blink()", 500);
}

function updateClock() {
    var today = new Date();
    var hours = today.getHours() % 12;
    var minutes = today.getMinutes();
    var timeOfDay = (today.getHours()) < 12 ? "오전" : "오후";
    var day = today.getDay();
    var date = today.getDate();
    var year = today.getFullYear();
    var month = today.getMonth();
    if (hours == 0) { hours = 12; }
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    var time = hours + "<span id='colon'>:</span>" + minutes + timeOfDay;
    var days = ["일요일","월요일","火曜日","화요일","목요일","금요일","토요일"]; // fix these
    var date_string = days[day] + " " + (month + 1) + "/" + date + "/" + year; 
    document.getElementById('clock').innerHTML = time;
    document.getElementById('date').innerHTML = date_string;
}