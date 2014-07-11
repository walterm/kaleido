var addFilter = function(field){
	var schema = data[field];
	console.log(schema);
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

var addRemoveIcon = function(field){
	var icon = $('<i class="fa fa-trash-o"></i>');
	icon.click(function(evt){
		if(data[field][TYPE] === CATEGORY){
			$("." + field.replace(/\./g, "-")).remove();
		}
		$("[filter_field='"+field+"']").remove();

	});
	return icon;
};


/* ADD EVENT LISTENERS TO UPDATE THE QUERY AND RENDER THE GRAPH ON CHANGE OF A FILTER FIELD */
/* ADD REMOVE BUTTON FOR FILTERS */
var addStringFilter = function(field){
	var row = $("<div></div>");

	var label = $("<label></label>").html(field).append(addRemoveIcon(field)),
	text = $("<input class='stringFilter' style='width: 100%;' type='text' name='" + field + "'/><br/>");
	text.attr("filter_field", field);
	label.attr("filter_field", field);
	row.append(label);
	$(".filters").append(row).append(text);//.append(label).append(text);
};

var addNumberFilter = function(field){
	var row = $("<div></div>"),
	label = $("<label></label>").html(field).append(addRemoveIcon(field)),
	slider = $("<div></div>"),
	amount = $("<div class='col-md-1'></div>").html(data[field]["$data"]["min"]+ " - " + data[field]["$data"]["max"]);
	slider.attr("filter_field", field);
	label.attr("filter_field", field);
	amount.attr("filter_field", field);
	slider.slider({
		range: true,
		min: data[field]["$data"]["min"],
		max: data[field]["$data"]["max"],
		values: [data[field]["$data"]["min"], data[field]["$data"]["max"]],
		slide: function(event, ui){
			$(amount).html(ui.values[0] +" - " + ui.values[1]);
		}
	});

	$(row).append(label);
	$(".filters").append(row).append(amount).append($("<div class='col-md-10'></div>").append(slider)).append($("<br/>"));
};

var addCategoryFilter = function(field){
	var row = $("<div class='row'></div>"), 
	label = $("<label></label>").html(field).append(addRemoveIcon(field)),
	selector = $("<select style='width: 100%;' multiple></select>");
	selector.attr("filter_field", field);
	label.attr("filter_field", field);
	var categories = Object.keys(data[field]["$data"]);
	categories.map(function(cat){
		var option = $("<option></option>");
		option.attr("value", cat).html(cat);
		selector.append(option);
	});

	row.append($('<div class="col-md-3"></div>').append(label));
	row.append($('<div class="col-md-2"></div>').append(selector));
	$(".filters").append(row);

	$(".filters").append(selector);
	var newClass = field.replace(/\./g, "-");
	selector.select2({containerCssClass: newClass});
};