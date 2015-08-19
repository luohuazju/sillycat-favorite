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

Meteor.methods({
    resumes: function(data){
    	console.log("data:" + data);
    }
});