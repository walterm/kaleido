var parseOptions = function(){
	var options = {
		"match": { },
		"group": { },
		"agg": { }
	};

	var labels = $(".filters").find("label").each(function(index, label){
		return $(label).html();
	}).each(function(index, field){
		switch(data[field][TYPE]){
			case STRING:
				options["match"][''+field+''] = $("input[filter_field='" + field + "']").val();
			break;
			case NUMBER:
				options["match"][''+field+''] = $("div[filter_field='" + field + "']").slider("option", "values");
			break;
			case CATEGORY:
				options["match"][''+field+''] = $("select[filter_field='" + field + "']")
													.find(":selected").each(function(index, option){
														return $(option).val();
													});
			break;
		}
	});

	$("." + graph + "_selection input.group").each(function(index, elem){
		options["group"][$(elem).attr("name")] = [];
	}).each(function(index, elem){
		options["group"][$(elem).attr("name")].push($(elem).val());
	});

	var aggregation_func = $("." + graph + "_options select.aggregate").find(":selected").val();
	if(aggregation_func === "count"){
		options["agg"][count] = 1;
	}else {
		options["agg"][aggregation_func] = $("." + graph + "_options input.aggregate").val()
	}
	return options;
};