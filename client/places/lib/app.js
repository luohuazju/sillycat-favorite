//load the modules
angular.module('favorite',['angular-meteor', 'ui.router']);



function onReady(){
	angular.bootstrap(document, ["favorite"]);
}

if(Meteor.isCordova){
	angular.element(document).on("deviceready", onReady);
}else{
	angular.element(document).ready(onReady);
}

var scopes = ['https://www.googleapis.com/auth/gmail.readonly']
Accounts.ui.config({'requestPermissions':{'google':scopes}});

function loadingAuth(){
  console.log(gapi.client);
}
