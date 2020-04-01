console.log("Javascript working");
var test = 1;
var chickenbreast = false;
var onion = false;
var celery = false;
var pasta = false;
var shrimp = false;
var zucchini = false;
var rice = false;
var sweetpotato = false;
var chorizo = false;
var groundbeef = false;
var potato = false;
var peas = false;

var jamba = 4; //jambalaya
var shrim = 3; //shrimpscampiwithpasta
var paela = 4; //paella
var sweet = 3; //sweetpotatosoup
var sheph = 4; //shepherdspie

function test_func() {
	console.log("function working");
}

function resize(html_id) {
	if (document.getElementById(html_id).style.height == '21px') {
		console.log('window height 21 px');
		document.getElementById(html_id).style.height = '300px';
	}
	else if (document.getElementById(html_id).style.height == '300px') {
		console.log('window height 300 px');
		document.getElementById(html_id).style.height = '21px';
	}
}

function jamba_func () {
	var total = 4;
	var count = 0;
	if (chickenbreast == true) {
		count++;
	}
	if (onion == true) {
		count++;
	}
	if (celery == true) {
		count++;
	}
	if (rice == true) {
		count++;
	}
	jamba = total - count;
	console.log("Missing ingredients = " + jamba);
}

function shrim_func () {
	var total = 3;
	var count = 0;
	if (pasta == true) {
		count++;
	}
	if (shrimp == true) {
		count++;
	}
	if (zucchini == true) {
		count++;
	}
	shrim = total - count;
	console.log("Missing ingredients = " + shrim);
}

function paela_func () {
	var total = 4;
	var count = 0;
	if (chickenbreast == true) {
		count++;
	}
	if (shrimp == true) {
		count++;
	}
	if (rice == true) {
		count++;
	}
	if (onion == true) {
		count++;
	}
	paela = total - count;
	console.log("Missing ingredients = " + paela);
}

function sweet_func () {
	var total = 3;
	var count = 0;
	if (sweetpotato == true) {
		count++;
	}
	if (chorizo == true) {
		count++;
	}
	if (celery == true) {
		count++;
	}
	sweet = total - count;
	console.log("Missing ingredients = " + sweet);
}

function sheph_func () {
	var total = 4;
	var count = 0;
	if (onion == true) {
		count++;
	}
	if (groundbeef == true) {
		count++;
	}
	if (peas == true) {
		count++;
	}
	if (potato == true) {
		count++;
	}
	paela = total - count;
	console.log("Missing ingredients = " + sheph);
}

function check_all () {
	jamba_func();
	shrim_func();
	paela_func();
	sweet_func();
	sheph_func();
	// verify if any recepies are complete
	if (jamba == 0 || shrim == 0 || paela == 0 || sweet == 0 || sheph == 0 ) {
		console.log("You have a complete recepie!");
		if (jamba == 0) {
			console.log("You have the ingredients to make Jambayala");
		}
		if (shrim == 0) {
			console.log("You have the ingredients to make Shrimp Scampi with Pasta");
		}
		if (paela == 0) {
			console.log("You have the ingredients to make Paella");
		}
		if (sweet == 0) {
			console.log("You have the ingredients to make Sweet Potato Soup");
		}
		if (sheph == 0) {
			console.log("You have the ingredients to make Shepherd's Pie");
		}
	}
	else if (jamba == 1 || shrim == 1 || paela == 1 || sweet == 1 || sheph == 1 ) {
		console.log("You have no complete recepies.");
		if (jamba == 1) {
			console.log("You are missing 1 ingredient in order to make Jambayala");
			if (chickenbreast == false) {
				console.log("You are missing chicken breasts");
			}
			else if (onion == false) {
				console.log("You are missing onion");
			}
			else if (celery == false) {
				console.log("You are missing celery");
			}
			else if (rice == false) {
				console.log("You are missing rice");
			}
		}
		if (shrim == 1) {
			console.log("You are missing 1 ingredient in order to make Shrimp Scampi with Pasta");
			if (pasta == false) {
				console.log("You are missing pasta");
			}
			else if (shrimp == false) {
				console.log("You are missing shrimp");
			}
			else if (zucchini == false) {
				console.log("You are missing Zucchini");
			}
		}
		if (paela == 1) {
			console.log("You are missing 1 ingredient in order to make Paella");
			if (chickenbreast == false) {
				console.log("You are missing chicken breasts");
			}
			else if (shrimp == false) {
				console.log("You are missing shrimp");
			}
			else if (rice == false) {
				console.log("You are missing rice");
			}
			else if (onion == false) {
				console.log("You are missing onions");
			}
		}
		if (sweet == 1) {
			console.log("You are missing 1 ingredient in order to make Sweet Potato Soup");
			if (sweetpotato == false) {
				console.log("You are missing sweet potato");
			}
			else if (chorizo == false) {
				console.log("You are missing chorizo");
			}
			else if (celery == false) {
				console.log("You are missing celery");
			}
		}
		if (sheph == 1) {
			console.log("You are missing 1 ingredient in order to make Shepherd's Pie");
			if (onion == false) {
				console.log("You are missing onions");
			}
			else if (groundbeef = false) {
				console.log("You are missing ground beef");
			}
			else if (peas == false) {
				console.log("You are missing peas");
			}
			else if (potato == false) {
				console.log("You are missing potatoes");
			}
		}
	}
	else {
		console.log("You have no good recepies avaliable right now");
	}
	
}










