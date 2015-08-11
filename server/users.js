Meteor.publish("users", function () {
  return Meteor.users.find({}, {fields: {"services.google.email": 1, profile: 1}});
});