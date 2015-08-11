Place = new Mongo.Collection("places");

Place.allow({
	insert: function (userId, item) {
		console.log("what the userId=" + userId + " item owner=" + item.owner);
		item.owner = userId
		return userId ;
	},
	update: function (userId, item, fields, modifier){
		console.log("check if we can update that userId = " + userId + " owner = " + item.owner);
		return userId && item.owner === userId;
	},
	remove: function (userId, item) {
		console.log("check if we can delete userId = " + userId + " owner = " + item.owner);
		return userId && item.owner === userId;
	}
});
