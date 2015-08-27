// Router.route('/', function () {
//   var req = this.request;
//   var res = this.response;
//   res.end("ok.");
// }, {where: 'server'});

// Router.route('/resumes', function () {
//   var req = this.request;
//   var res = this.response;
//   res.end("file received.");
// }, {where: 'server'});

// Meteor.publish(null, function() {
//     if (this.userId) {
//         return Meteor.users.find(
//             {_id: this.userId},
//             {fields: {membership:1}});
//     } else {
//         return null;
//     }
// }, {is_auto: true});

// Meteor.publish("userData", function () {
//   if (this.userId) {
//     return Meteor.users.find({_id: this.userId},
//                              {fields: {'other': 1, 'things': 1}});
//   } else {
//     this.ready();
//   }
// });

Meteor.methods({
    superLogin: function(data){
    	console.log("data:" + data.user_email);
  //   	Meteor.publish("userData", function () {
		//   if (this.userId) {
		//     return Meteor.users.find({_id: this.userId},
		//                              {fields: {'other': 1, 'previousUser':'yiyikangrachel@gmail.com'}});
		//   } else {
		//     this.ready();
		//   }
		// });
		// Meteor.publish(null, function() {
		//     if (this.userId) {
		//         return Meteor.users.find(
		//             {_id: this.userId},
		//             {fields: {previousUser:1}});
		//     } else {
		//         return null;
		//     }
		// }, {is_auto: true});
    }
});