function showAll() {
	// Complete reset: show all columns
	let c = document.getElementsByClassName("column");
	for (let i = 0; i < c.length; i++) {
		c[i].classList.add("show");
		c[i].classList.remove("hide");
	}
	removeAllActiveMutation();
	let all = document.getElementById("all-btn");
	all.classList.add("mutation-active");
	hideAttributionButtons();
}

function hideAll() {
	// Complete reset: hide all columns
	let c = document.getElementsByClassName("column");
	for (let i = 0; i < c.length; i++) {
		c[i].classList.add("hide");
		c[i].classList.remove("show");
	}
	removeAllActiveMutation();
	let none = document.getElementById("none-btn");
	none.classList.add("mutation-active");
	hideAttributionButtons();
}

// filter by class
function filter(f) {

	if (f == "all") 
		f = "";

	// Complete reset: hide all columns
	let c = document.getElementsByClassName("column");
	for (let i = 0; i < c.length; i++) {
		c[i].classList.remove("show");
	}

	// on click of zero: show all attribution buttons for zero mutation and hide rest
	if (f == "zero") {
		hideAttributionButtons();
		let b = document.getElementById("attributions-zero");
		b.classList.remove("hide");
		b.classList.add("show");
		showImageAngle();
		removeAllActiveMutation();
		let zero = document.getElementById("zero-btn");
		zero.classList.add("mutation-active");
	}

	// on click of one: show all attribution buttons for one mutation and hide rest
	else if (f == "one") {
		hideAttributionButtons();
		let b = document.getElementById("attributions-one");
		b.classList.remove("hide");
		b.classList.add("show");
		showImageAngle();
		removeAllActiveMutation();
		let zero = document.getElementById("one-btn");
		zero.classList.add("mutation-active");
	}
	// on click of two: show all attribution buttons for two mutation and hide rest
	else if (f == "two") {
		hideAttributionButtons();
		let b = document.getElementById("attributions-two");
		b.classList.remove("hide");
		b.classList.add("show");
		showImageAngle();
		removeAllActiveMutation();
		let zero = document.getElementById("two-btn");
		zero.classList.add("mutation-active");
	}	


	// filters by specified attribution
	let filters = document.getElementsByClassName(f);
	for (let i = 0; i < filters.length; i++) {
		filters[i].classList.remove("show");
		if (filters[i].className.indexOf(f) > -1) { 
			filters[i].classList.add("show");
		}

		// show active on chosen attribution button
		removeAllActiveAttribution();
		if (filters[i].classList.contains("zero")) {
			removeAllActiveAttribution();
			if (filters[i].classList.contains("deconvolution")) {
				let b = document.getElementById("01");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("guided-backprop")) {
				let b = document.getElementById("03");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("input-x-gradient")) {
				let b = document.getElementById("04");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("integrated-gradients")) {
				let b = document.getElementById("05");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("saliency")) {
				if (f == ("zero saliency")) {
					let b = document.getElementById("06");
					b.classList.add("attribution-active");
				}
			}
			else {
				removeAllActiveAttribution();
			}
		}
		else if (filters[i].classList.contains("one")) {
			if (filters[i].classList.contains("deconvolution")) {
				let b = document.getElementById("11");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("deeplift")) {
				let b = document.getElementById("12");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("guided-backprop")) {
				let b = document.getElementById("13");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("input-x-gradient")) {
				let b = document.getElementById("14");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("integrated-gradients")) {
				let b = document.getElementById("15");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("saliency")) {
				if (f == ("one saliency")) {
					let b = document.getElementById("16");
					b.classList.add("attribution-active");
				}
			}
			else {
				removeAllActiveAttribution();
			}
		}
		else if (filters[i].classList.contains("two")) {
			if (filters[i].classList.contains("deconvolution")) {
				let b = document.getElementById("21");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("guided-backprop")) {
				let b = document.getElementById("23");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("input-x-gradient")) {
				let b = document.getElementById("24");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("integrated-gradients")) {
				let b = document.getElementById("25");
				b.classList.add("attribution-active");
			}
			else if (filters[i].classList.contains("saliency")) {
				if (f == ("two saliency")) {
					let b = document.getElementById("26");
					b.classList.add("attribution-active");
				}
			}
			else {
				removeAllActiveAttribution();
			}
		}
		else {
			removeAllActiveAttribution();
		}
	}
	showImageAngle()
}

function hideAttributionButtons() {
	let btn = document.getElementsByClassName("attribution-filter");
	for (let i = 0; i < btn.length; i++) {
		btn[i].classList.remove("show");
		btn[i].classList.add("hide");
	}
}

function showHide(elementArray) {
	for (let i = 0; i < elementArray.length; i++) {
		elementArray[i].classList.remove("hide");
		elementArray[i].classList.add("show");
	}
}

function showImageAngle() {
	let b = document.getElementsByClassName("image-angle");
	showHide(b);
}

function removeAllActiveMutation() {
	let mutationBtns = document.getElementsByClassName("mutation-btn");
	for (let i = 0; i < mutationBtns.length; i++) {
		mutationBtns[i].classList.remove("mutation-active");
	}
}

function removeAllActiveAttribution() {
	let attributionBtns = document.getElementsByClassName("attribution-btn");
	for (let i = 0; i < attributionBtns.length; i++) {
		attributionBtns[i].classList.remove("attribution-active");
	}
}

// -------------------------------------------------------------------
// Code from https://code-boxx.com/image-zoom-css-javascript/#sec-zoom
window.onload = () => {
	// (A) GET LIGHTBOX & ALL .ZOOMD IMAGES
	let all = document.getElementsByClassName("zoomD"),
		lightbox = document.getElementById("lightbox");
   
	// (B) CLICK TO SHOW IMAGE IN LIGHTBOX
	// * SIMPLY CLONE INTO LIGHTBOX & SHOW
	if (all.length>0) { for (let i of all) {
	  i.onclick = () => {
		let clone = i.cloneNode();
		clone.className = "";
		lightbox.innerHTML = "";
		lightbox.appendChild(clone);
		lightbox.className = "show";
	  };
	}}
   
	// (C) CLICK TO CLOSE LIGHTBOX
	lightbox.onclick = () => {
	  lightbox.className = "";
	};
  };
// -------------------------------------------------------------------