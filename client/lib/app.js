//console.log("it runs here.");
var scopes = ['https://www.googleapis.com/auth/gmail.readonly',
              'https://www.googleapis.com/auth/userinfo.profile'];
Accounts.ui.config({'requestPermissions':{'google':scopes}});