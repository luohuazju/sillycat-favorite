
initGoogle();

function initGoogle() {
  console.log('loading google apis...');
  if (typeof gapi.auth === 'undefined') {
    setTimeout(initGoogle, 1000);
  } else {
    console.log(gapi.auth);
    checkAuth();
  }
}

var CLIENT_ID = '399670218895-7udn2k468l25g1rfta91djdbrklrs0p1.apps.googleusercontent.com';

var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
/**
* Check if current user has authorized this application.
*/
function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES,
            'immediate': false
          }, handleAuthResult);
}

function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    gapi.client.load('gmail', 'v1', listLabels);
  } else {
    console.log("auth error!");
    console.log(authResult.error);
  }
}

function listLabels() {
        var request = gapi.client.gmail.users.labels.list({
          'userId': 'me'
        });

        request.execute(function(resp) {
          var labels = resp.labels;

          if (labels && labels.length > 0) {
            for (i = 0; i < labels.length; i++) {
              var label = labels[i];
              //console.log(label);
            }
          }
        });
}