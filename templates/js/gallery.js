// Execute the function and show all columns
filterSelection("all"); 

function filterSelection(c) {
	let x, i;
	x = document.getElementsByClassName("column");
	if (c == "all") 
		c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		removeClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
	}
}

// Show filtered elements
function addClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
		arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer1 = document.getElementById("mutation-filter");
if (btnContainer1 !== null) {
	let btns = btnContainer1.getElementsByClassName("mutation-btn");
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("mutation-active");
			current[0].className = current[0].className.replace(" mutation-active", "");
			this.className += " mutation-active";
		});
	}	
}

// Add active class to the current button (highlight it)
let btnContainer2 = document.getElementById("attribution-filter");
if (btnContainer2 !== null) {
	let btns = btnContainer2.getElementsByClassName("attribution-btn");
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("attribution-active");
			current[0].className = current[0].className.replace(" attribution-active", "");
			this.className += " attribution-active";
		});
	}	
}

// TODO: fix active button display - could be js or css problem
// TODO: add function to filter by mutation before filtering by attribution - or make them compounding somehow 