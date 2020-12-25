$(document).ready(function(){
	var add_fruits = document.querySelector("#add-fruits");
	$(add_fruits).on("click",function(){
		add_fruits_field();
	});
	
});
// add fruits input fields
function add_fruits_field(){
	var fruits_area = document.getElementsByClassName("fruits-area");
	var input = document.createElement("INPUT");
	input.placeholder = "Enter fruits name";
	input.className = "fruits-input";
	$(fruits_area).append(input);
	$(".add").removeClass("d-none");
	$(".add").click(function(){
		add_fruit();
	});
}

// add fruits
function add_fruit(){
	var fruits = [];
	var inpu_length = $(".fruits-input").length;
	var i;
	for(i=0;i<inpu_length;i++){
		fruits[i] = document.getElementsByClassName("fruits-input")[i].value;
	}
	var object = JSON.stringify(fruits);
	localStorage.setItem("fruits", object);
	setTimeout(function(){
		$(".fruits-area").html("");
		window.location = location.href;
	},300);
	
}

// choose fruits coding............
$(document).ready(function(){
	var fruits = JSON.parse(localStorage.getItem("fruits"));
		var i ; 
		for(i=0;i<fruits.length;i++){
			var option = document.createElement("OPTION");
			option.innerHTML = fruits[i];
			$("#choose-fruits").append(option);
		}
});


// show fruits and weigh...

$(document).ready(function(){
	$("#choose-fruits").on("change",function(){
		$(".result").html("");
		var fruits = $(this).val();
		var fruits_name = document.createElement("H2");
		fruits_name.innerHTML = fruits;
		var color = document.createElement("INPUT");
		color.type = "color";
		var qty_input = document.createElement("INPUT");
		qty_input.placeholder = "Enter Qty";
		qty_input.type = "number";
		var result = $(".result");
		result.append(fruits_name);
		result.append(color);
		result.append(qty_input);
	})
});
