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

//Bearer ya29.1QGes21Nm_m4e_E48MLY6WhStIbRnofAw_ofygfwxjc87mqbvIPbJogmTiCkdjiAaC8KzA

function getAttachmentCallback(res){
  //console.log("attachment get response:" + JSON.stringify(res.data, null, 4));
  //var url = "http://requestb.in/18q28jd1";
  //var url = "http://localhost:3000/resumes";
  // Meteor.http.post(url, {
  // 	data: res.data
  // }, function(error, result){
  // 	 console.log(result.statusCode);
  // });
  Meteor.call("resumes", res.data);	
}
