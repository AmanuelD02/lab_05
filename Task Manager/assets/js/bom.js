/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/

// Define UI Variables  here
const spans = document.querySelectorAll('span');
const reloadIcon = document.querySelector('.fa');
var spanItems = document.getElementsByClassName('badge');

//location information
var href = window.location.href;
var host = window.location.host;
var protocol = window.location.protocol;
var port = window.location.port;
var hostName = window.location.hostname;

//browser information
var appName = window.navigator.appName;
var appVersion = window.navigator.appVersion;
var platform = window.navigator.platform;
var language = window.navigator.language;
var cookieEnabled = window.navigator.cookieEnabled;

//screen information
var height = screen.height;
var width = screen.width;
var pixelDepth = screen.pixelDepth;
var colorDepth = screen.colorDepth;
var availableHeight = screen.availHeight;
var availableWidth = screen.availWidth;

//history information
var length = window.history.length;
var state = window.history.state;

spanItems[0].innerHTML = href;
spanItems[1].innerHTML = protocol;
spanItems[2].innerHTML = host;
spanItems[3].innerHTML = port;
spanItems[4].innerHTML = hostName;

spanItems[5].innerHTML = appName;
spanItems[6].innerHTML = appVersion;
spanItems[7].innerHTML = platform;
spanItems[8].innerHTML = language;
spanItems[9].innerHTML = cookieEnabled;

spanItems[10].innerHTML = height;
spanItems[11].innerHTML = width;
spanItems[12].innerHTML = pixelDepth;
spanItems[13].innerHTML = colorDepth;
spanItems[14].innerHTML = availableHeight;
spanItems[15].innerHTML = availableWidth;

spanItems[16].innerHTML = length;
spanItems[17].innerHTML = state;

// Reload Page Function

reloadIcon.addEventListener('click', reloadPage);

function reloadPage() {
	//using the reload fun on location object
	location.reload();
}
