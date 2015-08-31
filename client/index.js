(function(){

    //var firstUser = "";
    //var secondUser = "";

    Template.registerHelper('session',function(input){
        return Session.get(input);
    }); 

    Template.content.events({
        "click #loginOther": function(e, tmpl){
            // var scopes = ['https://www.googleapis.com/auth/gmail.readonly',
            //               'https://www.googleapis.com/auth/userinfo.profile'];
            var scopes = ['https://www.googleapis.com/auth/gmail.readonly'];

            Meteor.loginWithGoogle({
                requestPermissions: scopes,
                forceApprovalPrompt: false,
                loginHint: "yiyikangrachel@gmail.com",
                //loginStyle: "redirect",
                loginStyle: "popup",
                requestOfflineToken: true
            }, function(err) {
                //console.log("recall from login second.");
                if(err) {
                    //error handling
                    alert('error : '+ err);
                    throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
                } else {
                    //show an alert
                    //alert('logged in');
                    console.log("second login .....");
                    var user2 = Session.get("previousUser");
                    console.log("previous user = " + user2);
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
                forceApprovalPrompt: false,
                loginHint: "cluo@jobs2careers.com",
                //userEmail: "cluo@jobs2careers.com",
                //loginStyle: "redirect",
                loginStyle: "popup",
                requestOfflineToken: true
            }, function(err) {
                if(err) {
                    //error handling
                    alert('error : '+ err);
                    throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
                } else {
                    //show an alert
                    //alert('logged in');
                    console.log("first login .....");
                    Session.set("previousUser", "cluo@jobs2careers.com");
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
                    //alert('logged out');
                    console.log("logged out.");
                }
            });
        }
    });
}());
