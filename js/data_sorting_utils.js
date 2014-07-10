

var TYPE = "$type", STRING = "text", COUNT = "$count", NUMBER="number", DATE = "date", QUANTITY = "quant", CATEGORY = "category";
var findCategories = function(data){
	var stringFields = Object.keys(data);
	stringFields = stringFields.filter(function(field){
		if(! ( data[field].hasOwnProperty(TYPE) && data[field].hasOwnProperty(COUNT) ) ){
			return false;
		}

		return data[field][TYPE] === CATEGORY;
	});
	stringFields = stringFields.sort(function(a, b){
		return data[a][COUNT] - data[b][COUNT];
	});
	return stringFields;
};

var findQuantities = function(data){
	var stringFields = Object.keys(data);
	stringFields = stringFields.filter(function(field){
		if(! ( data[field].hasOwnProperty(TYPE) && data[field].hasOwnProperty(COUNT) ) ){
			return false;
		}

		return data[field][TYPE] === NUMBER;
	});

	stringFields = stringFields.sort(function(a, b){
		return data[a][COUNT] - data[b][COUNT];
	});
	return stringFields;
};

var findBoth = function(data){
	var stringFields = Object.keys(data);
	stringFields = stringFields.filter(function(field){
		if(! ( data[field].hasOwnProperty(TYPE) && data[field].hasOwnProperty(COUNT) ) ){
			return false;
		}

		return data[field][TYPE] !== "const" && data[field][TYPE] !== "boolean" && data[field][TYPE] !== "date";
	});

	stringFields = stringFields.sort(function(a, b){
		return data[a][COUNT] - data[b][COUNT];
	});
	return stringFields;
};

var textFields = function(elem){
	return function(){

		var cls = $(elem).attr("class");
		var fields = [];
		if(cls.indexOf(QUANTITY) != -1){
			fields = fields.concat(findQuantities(data));
		}
		if(cls.indexOf("cat") != -1){
			fields = fields.concat(findCategories(data));
		}
		return fields;
	}
}