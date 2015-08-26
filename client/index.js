(function(){
    Template.user_loggedout.events({
        "click #login": function(e, tmpl){
        	// var scopes = ['https://www.googleapis.com/auth/gmail.readonly',
        	//               'https://www.googleapis.com/auth/userinfo.profile'];
            var scopes = ['https://www.googleapis.com/auth/gmail.readonly'];

            Meteor.loginWithGoogle({
                requestPermissions: scopes,
                forceApprovalPrompt: true,
                loginStyle: "redirect"
                //userEmail: "luohuazju@gmail.com"
                //requestOfflineToken: true
            }, function (err) {
                if(err) {
                    //error handling
                    alert('error : '+ err);
                    throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
                } else {
                    //show an alert
                    // alert('logged in');
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
                }
            });
        }
    });
}());
