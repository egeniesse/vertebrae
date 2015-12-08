var vt = {validate: true};

var Person = Backbone.Model.extend({
	defaults : {
		name: "Eric",
		occupation: "student",
	}, 
	
	validate: function(attrs) {
		console.log('yay!!');
		// if( !attrs.name ){
		// 	return 'this is not a valid name';
		// }
	},

	work: function(){ 
		console.log(this.get('name') + ' is working hard today.');
	},

});

var hello = function(){console.log('hi')}