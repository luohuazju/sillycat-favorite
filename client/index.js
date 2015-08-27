(function(){

    //var firstUser = "";
    //var secondUser = "";

    Template.content.events({
        "click #loginOther": function(e, tmpl){
            // var scopes = ['https://www.googleapis.com/auth/gmail.readonly',
            //               'https://www.googleapis.com/auth/userinfo.profile'];
            var scopes = ['https://www.googleapis.com/auth/gmail.readonly'];

            

            Meteor.loginWithGoogle({
                requestPermissions: scopes,
                forceApprovalPrompt: true,
                loginHint: "luohuazju@gmail.com",
                //userEmail: "luohuazju@gmail.com",
                loginStyle: "redirect",
                requestOfflineToken: true
            }, function(err) {
                alert("second login.");
                //console.log("recall from login second.");
                if(err) {
                    //error handling
                    alert('error : '+ err);
                    throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
                } else {
                    //show an alert
                    alert('logged in');
                    //console.log("second login .....");
                }
            });

            // Meteor.call("superLogin", {
            //                             "user_email":"luohuazju@gmail.com", 
            //                             "company_email":"cluo@gmail.com"
            //                             }, function(err, response){
            //                                 //Session.set("response", response);
            //                                 //var user = Meteor.subscribe("userData");
            //                                 //console.log("I get the user = " + JSON.stringify(user, null, 4));
            //                             });
        }
    });

    Template.user_loggedout.events({
        "click #login": function(e, tmpl){
        	// var scopes = ['https://www.googleapis.com/auth/gmail.readonly',
        	//               'https://www.googleapis.com/auth/userinfo.profile'];
            var scopes = ['https://www.googleapis.com/auth/gmail.readonly'];

            Meteor.loginWithGoogle({
                requestPermissions: scopes,
                forceApprovalPrompt: true,
                loginHint: "cluo@jobs2careers.com",
                //userEmail: "cluo@jobs2careers.com",
                loginStyle: "redirect",
                requestOfflineToken: true
            }, function(err) {
                alert("first login");
                if(err) {
                    //error handling
                    alert('error : '+ err);
                    throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
                } else {
                    //show an alert
                    alert('logged in');
                    //console.log("first login .....");
                }
            });
        }
    });

    Template.user_loggedin.events({
        "click #logout": function(e, tmpl) {
            Meteor.logout(function(err) {
                if(err) {
                    //sow err message
                } else {
                    //show alert that says logged out
                    alert('logged out');
                }
            });
        }
    });
}());
