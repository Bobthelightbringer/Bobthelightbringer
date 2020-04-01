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

function resize(html_id) {
	if (document.getElementById(html_id).style.height == '21px') {
		console.log('window height 21 px');
		document.getElementById(html_id).style.height = '170px';
	}
	else if (document.getElementById(html_id).style.height == '170px') {
		console.log('window height 170 px');
		document.getElementById(html_id).style.height = '21px';
	}
}

function set_ingredient(ingredient) {
	console.log("Your ingredient is: " + ingredient);
	if (ingredient == 'chickenbreasts') {
		if (chickenbreast == false) {
			chickenbreast = true;
			console.log(chickenbreast);
			document.getElementById('chick_button_1').style.color = '#c44';
		}
		else if (chickenbreast == true) {
			chickenbreast = false;
			document.getElementById('chick_button_1').style.color = '#fff';
			console.log(chickenbreast);
		}
	}
	if (ingredient == 'onion') {
		if (onion == false) {
			onion = true;
			console.log(onion);
			document.getElementById('onion_button_1').style.color = '#c44';
		}
		else if (onion == true) {
			onion = false;
			document.getElementById('onion_button_1').style.color = '#fff';
			console.log(onion);
		}
	}
	if (ingredient == 'celery') {
		if (celery == false) {
			celery = true;
			console.log(celery);
			document.getElementById('celry_button_1').style.color = '#c44';
		}
		else if (celery == true) {
			celery = false;
			document.getElementById('celry_button_1').style.color = '#fff';
			console.log(celery);
		}
	}
	if (ingredient == 'pasta') {
		if (pasta == false) {
			pasta = true;
			console.log(pasta);
			document.getElementById('pasta_button_1').style.color = '#c44';
		}
		else if (pasta == true) {
			pasta = false;
			document.getElementById('pasta_button_1').style.color = '#fff';
			console.log(pasta);
		}
	}
	if (ingredient == 'shrimp') {
		if (shrimp == false) {
			shrimp = true;
			console.log(shrimp);
			document.getElementById('shrim_button_1').style.color = '#c44';
		}
		else if (shrimp == true) {
			shrimp = false;
			document.getElementById('shrim_button_1').style.color = '#fff';
			console.log(shrimp);
		}
	}
	if (ingredient == 'zucchini') {
		if (zucchini == false) {
			zucchini = true;
			console.log(zucchini);
			document.getElementById('zuchn_button_1').style.color = '#c44';
		}
		else if (zucchini == true) {
			zucchini = false;
			document.getElementById('zuchn_button_1').style.color = '#fff';
			console.log(zucchini);
		}
	}
	if (ingredient == 'rice') {
		if (rice == false) {
			rice = true;
			console.log(rice);
			document.getElementById('rice_button_1').style.color = '#c44';
		}
		else if (rice == true) {
			rice = false;
			document.getElementById('zrice_button_1').style.color = '#fff';
			console.log(rice);
		}
	}
	if (ingredient == 'sweetpotato') {
		if (sweetpotato == false) {
			sweetpotato = true;
			console.log(sweetpotato);
			document.getElementById('sweet_button_1').style.color = '#c44';
		}
		else if (sweetpotato == true) {
			sweetpotato = false;
			document.getElementById('sweet_button_1').style.color = '#fff';
			console.log(sweetpotato);
		}
	}
	if (ingredient == 'chorizo') {
		if (chorizo == false) {
			chorizo = true;
			console.log(chorizo);
			document.getElementById('chrzo_button_1').style.color = '#c44';
		}
		else if (chorizo == true) {
			chorizo = false;
			document.getElementById('chrzo_button_1').style.color = '#fff';
			console.log(chorizo);
		}
	}
	if (ingredient == 'groundbeef') {
		if (groundbeef == false) {
			groundbeef = true;
			console.log(groundbeef);
			document.getElementById('gndbf_button_1').style.color = '#c44';
		}
		else if (groundbeef == true) {
			groundbeef = false;
			document.getElementById('gndbf_button_1').style.color = '#fff';
			console.log(groundbeef);
		}
	}
	if (ingredient == 'potato') {
		if (potato == false) {
			potato = true;
			console.log(potato);
			document.getElementById('potat_button_1').style.color = '#c44';
		}
		else if (potato == true) {
			potato = false;
			document.getElementById('potat_button_1').style.color = '#fff';
			console.log(potato);
		}
	}
	if (ingredient == 'peas') {
		if (peas == false) {
			peas = true;
			console.log(peas);
			document.getElementById('peas_button_1').style.color = '#c44';
		}
		else if (peas == true) {
			peas = false;
			document.getElementById('peas_button_1').style.color = '#fff';
			console.log(peas);
		}
	}
	check_all();
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
	document.getElementById('general_status').innerHTML = '';
	document.getElementById('jamba_status').innerHTML = '';
	document.getElementById('shrim_status').innerHTML = '';
	document.getElementById('paela_status').innerHTML = '';
	document.getElementById('sweet_status').innerHTML = '';
	document.getElementById('sweet_status').innerHTML = '';
	
	jamba_func();
	shrim_func();
	paela_func();
	sweet_func();
	sheph_func();
	// verify if any recepies are complete
	if (jamba == 0 || shrim == 0 || paela == 0 || sweet == 0 || sheph == 0 ) {
		console.log("You have a complete recipe!");
		document.getElementById('general_status').innerHTML = 'You have a complete recipe!<br>';
		if (jamba == 0) {
			console.log("You have the ingredients to make Jambayala");
			document.getElementById('jamba_status').innerHTML = 'You have the ingredients to make Jambayala.<br>';
		}
		if (shrim == 0) {
			console.log("You have the ingredients to make Shrimp Scampi with Pasta");
			document.getElementById('shrim_status').innerHTML = 'You have the ingredients to make Shrimp Scampi with Pasta.<br>';
		}
		if (paela == 0) {
			console.log("You have the ingredients to make Paella");
			document.getElementById('paela_status').innerHTML = 'You have the ingredients to make Paella.<br>';
		}
		if (sweet == 0) {
			console.log("You have the ingredients to make Sweet Potato Soup");
			document.getElementById('sweet_status').innerHTML = 'You have the ingredients to make Sweet Potato Soup.<br>';
		}
		if (sheph == 0) {
			console.log("You have the ingredients to make Shepherd's Pie");
			document.getElementById('sweet_status').innerHTML = "You have the ingredients to make Shepherd's Pie.<br>";
		}
	}
	else if (jamba == 1 || shrim == 1 || paela == 1 || sweet == 1 || sheph == 1 ) {
		console.log("You have no complete recepies.");
		document.getElementById('general_status').innerHTML = 'You have no complete recipes!<br>';
		if (jamba == 1) {
			console.log("You are missing 1 ingredient in order to make Jambayala");
			if (chickenbreast == false) {
				console.log("You are missing chicken breasts");
				document.getElementById('jamba_status').innerHTML = 'You are missing 1 ingredient in order to make Jambayala.<br> You are missing chicken breasts <br>';
			}
			else if (onion == false) {
				console.log("You are missing onion");
				document.getElementById('jamba_status').innerHTML = 'You are missing 1 ingredient in order to make Jambayala.<br> You are missing onions <br>';
			}
			else if (celery == false) {
				console.log("You are missing celery");
				document.getElementById('jamba_status').innerHTML = 'You are missing 1 ingredient in order to make Jambayala.<br> You are missing celery <br>';
			}
			else if (rice == false) {
				console.log("You are missing rice");
				document.getElementById('jamba_status').innerHTML = 'You are missing 1 ingredient in order to make Jambayala.<br> You are missing rice <br>';
			}
		}
		if (shrim == 1) {
			console.log("You are missing 1 ingredient in order to make Shrimp Scampi with Pasta");
			if (pasta == false) {
				console.log("You are missing pasta");
				document.getElementById('shrim_status').innerHTML = 'You are missing 1 ingredient in order to make Shrimp Scampi with Pasta.<br> You are missing pasta <br>';
			}
			else if (shrimp == false) {
				console.log("You are missing shrimp");
				document.getElementById('shrim_status').innerHTML = 'You are missing 1 ingredient in order to make Shrimp Scampi with Pasta.<br> You are missing shrimp <br>';
			}
			else if (zucchini == false) {
				console.log("You are missing Zucchini");
				document.getElementById('shrim_status').innerHTML = 'You are missing 1 ingredient in order to make Shrimp Scampi with Pasta.<br> You are missing zucchini <br>';
			}
		}
		if (paela == 1) {
			console.log("You are missing 1 ingredient in order to make Paella");
			if (chickenbreast == false) {
				console.log("You are missing chicken breasts");
				document.getElementById('paela_status').innerHTML = 'You are missing 1 ingredient in order to make Paella.<br> You are missing chicken breasts <br>';
			}
			else if (shrimp == false) {
				console.log("You are missing shrimp");
				document.getElementById('paela_status').innerHTML = 'You are missing 1 ingredient in order to make Paella.<br> You are missing shrimp <br>';
			}
			else if (rice == false) {
				console.log("You are missing rice");
				document.getElementById('paela_status').innerHTML = 'You are missing 1 ingredient in order to make Paella.<br> You are missing rice <br>';
			}
			else if (onion == false) {
				console.log("You are missing onions");
				document.getElementById('paela_status').innerHTML = 'You are missing 1 ingredient in order to make Paella.<br> You are missing onion <br>';
			}
		}
		if (sweet == 1) {
			console.log("You are missing 1 ingredient in order to make Sweet Potato Soup");
			if (sweetpotato == false) {
				console.log("You are missing sweet potato");
				document.getElementById('sweet_status').innerHTML = 'You are missing 1 ingredient in order to make Sweet Potato Soup.<br> You are missing sweet potato <br>';
			}
			else if (chorizo == false) {
				console.log("You are missing chorizo");
				document.getElementById('sweet_status').innerHTML = 'You are missing 1 ingredient in order to make Sweet Potato Soup.<br> You are missing chorizo <br>';
			}
			else if (celery == false) {
				console.log("You are missing celery");
				document.getElementById('sweet_status').innerHTML = 'You are missing 1 ingredient in order to make Sweet Potato Soup.<br> You are missing celery <br>';
			}
		}
		if (sheph == 1) {
			console.log("You are missing 1 ingredient in order to make Shepherd's Pie");
			if (onion == false) {
				console.log("You are missing onions");
				document.getElementById('sweet_status').innerHTML = "You are missing 1 ingredient in order to make Shepherd's Pie.<br> You are missing onion <br>";
			}
			else if (groundbeef = false) {
				console.log("You are missing ground beef");
				document.getElementById('sweet_status').innerHTML = "You are missing 1 ingredient in order to make Shepherd's Pie.<br> You are missing grounded beef <br>";
			}
			else if (peas == false) {
				console.log("You are missing peas");
				document.getElementById('sweet_status').innerHTML = "You are missing 1 ingredient in order to make Shepherd's Pie.<br> You are missing peas <br>";
			}
			else if (potato == false) {
				console.log("You are missing potatoes");
				document.getElementById('sweet_status').innerHTML = "You are missing 1 ingredient in order to make Shepherd's Pie.<br> You are missing potato <br>";
			}
		}
	}
	else {
		document.getElementById('general_status').innerHTML = 'No recipes are found with your available ingredients.';
	}
	
}










