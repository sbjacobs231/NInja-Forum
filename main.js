function post() {
	//collect user input
	var username = document.getElementById("username").value
	var pictureURL = document.getElementById("pictureURL").value
	var comment = document.getElementById("comment").value
	var emptyDiv = document.getElementById("emptyDiv").value
	//creating new tags
	var d = new Date()
	var p = document.createElement("p")
	var img = document.createElement("img")
	var h1 = document.createElement("h1")
	var h3 = document.createElement("h3")
	//putting information into the new tags
	p.innerHTML = d.toString()
	img.setAttribute("src", pictureURL)
	h1.innerHTML = username
	h3.innerHTML = comment
	//putting the new tags into the emptyDiv on page
	document.getElementById("emptyDiv").appendChild(p)
	document.getElementById("emptyDiv").appendChild(img)
	document.getElementById("emptyDiv").appendChild(h1)
	document.getElementById("emptyDiv").appendChild(h3)
	//if user does not addd image URL
	if (pictureURL == "") {
		img.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/236x/31/fb/3f/31fb3f434f11ad4c5674e87079008ba6.jpg")
	}
}