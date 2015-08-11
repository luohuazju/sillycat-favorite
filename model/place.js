Place = new Mongo.Collection("places");

Place.allow({
	insert: function (userId, item) {
		return userId && item.userId === userId;
	},
	update: function (userId, item, fields, modifier){
		return userId && item.userId === userId;
	},
	remove: function (userId, item) {
		return userId && item.userId === userId;
	}
});
