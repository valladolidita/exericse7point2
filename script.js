// "Vamos a la playa..." content from: http://www.oneseedexpeditions.com/blog/be-a-know-it-all-7-fun-facts-about-colombia

// to create new elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

// to create child nodes manually
var h1Text = document.createTextNode("Vamos a la playa...");
var paraText = document.createTextNode("Colombia is the only South American country with Atlantic and Pacific coastlines. With over 300 beaches in the country, you can have your pick.");

// to add as child nodes to new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

// to attach to document
document.getElementById("mainContent").appendChild(newHeading);
document.getElementById("mainContent").appendChild(newParagraph);

// to change text alignment
var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align", "center");

// to utilize onClick handler function
function preparePage() {
	document.getElementById("mainContent").onclick = function() {
		if (document.getElementById("mainContent").className == "example") {
			document.getElementById("mainContent").className = "";
		} else {
			document.getElementById("mainContent").className = "example";
		}
	};
}

window.onload = function() {
	preparePage();
}