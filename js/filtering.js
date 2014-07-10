var addFilter = function(field){
	var schema = data[field];
	console.log(schema[TYPE]);
	switch(schema[TYPE]){
		case STRING:
			addStringFilter(field);
		break;
		case NUMBER:
			addNumberFilter(field);
		break;
		case CATEGORY:
			addCategoryFilter(field);
		break;


	}
};

var isCategory = function(field){
	if(data[field][TYPE]===STRING){
		return typeof data[field]["$data"]  === "object" && Object.keys(data[field]["$data"]).length > 1;
	}
};

/* ADD EVENT LISTENERS TO UPDATE THE QUERY AND RENDER THE GRAPH ON CHANGE OF A FILTER FIELD */
var addStringFilter = function(field){
	var label = $("<label></label>").html(field),
	text = $("<input type='text' name='" + field + "'/><br/>");
	text.attr("filter_field", field);
	$(".filters").append(label);
	$(".filters").append(text);
};

var addNumberFilter = function(field){
	var label = $("<label></label>").html(field),
	slider = $("<div></div>"),
	amount = $("<label></label>");
	console.log(data[field]["$data"]);
	slider.slider({
		range: true,
		min: data[field]["$data"]["min"],
		max: data[field]["$data"]["max"],
		values: [data[field]["$data"]["min"], data[field]["$data"]["max"]],
		slide: function(event, ui){
			$(amount).html(ui.values[0] +" - " + ui.values[1]);
		}
	});

	$(".filters").append(label);
	$(".filters").append(amount);
	$(".filters").append(slider);
};

var addCategoryFilter = function(field){
	console.log("category");
	var label = $("<label></label>").html(field),
	selector = $("<select multiple></select>");
	var categories = Object.keys(data[field]["$data"]);
	categories.map(function(cat){
		var option = $("<option></option>");
		option.attr("value", cat).html(cat);
		$(selector).append(option);
	});
	$(".filters").append(label);
	$(".filters").append(selector);
};