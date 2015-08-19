

// //initGoogle();

// function initGoogle() {
//   console.log('loading google apis...');
//   if (typeof gapi.auth === 'undefined') {
//     setTimeout(initGoogle, 1000);
//   } else {
//     console.log(gapi.auth);
//     checkAuth();
//   }
// }

// //localhost
// var CLIENT_ID = '399670218895-7udn2k468l25g1rfta91djdbrklrs0p1.apps.googleusercontent.com';
// //var CLIENT_ID = '399670218895-vtk01621ldoket9mehi90qf73r307vhg.apps.googleusercontent.com';
// //var CLIENT_ID = '399670218895-m3tj0hpu3b5sa2bmih4vh212g3eclmq3.apps.googleusercontent.com';

// var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
// /**
// * Check if current user has authorized this application.
// */
// function checkAuth() {
//         gapi.auth.authorize(
//           {
//             'client_id': CLIENT_ID,
//             'scope': SCOPES,
//             'immediate': true
//           }, handleAuthResult);
// }

// function handleAuthResult(authResult) {
//   if (authResult && !authResult.error) {
//       alert("good");
//       gapi.client.load('gmail', 'v1', function(){
//           listMessages("me", "craigslist.org has:attachment larger:50K", messageQueryCallback); 
//       });
//   } else {
//     console.log("auth error!");
//     console.log(authResult.error);
//   }
// }


// /**
//  * Retrieve Messages in user's mailbox matching query.
//  *
//  * @param  {String} userId User's email address. The special value 'me'
//  * can be used to indicate the authenticated user.
//  * @param  {String} query String used to filter the Messages listed.
//  * @param  {Function} callback Function to call when the request is complete.
//  */
// function listMessages(userId, query, callback) {
//   var getPageOfMessages = function(request, result) {
//     request.execute(function(resp) {
//       result = result.concat(resp.messages);
//       var nextPageToken = resp.nextPageToken;
//       if (nextPageToken) {
//         request = gapi.client.gmail.users.messages.list({
//           'userId': userId,
//           'pageToken': nextPageToken,
//           'q': query
//         });
//         getPageOfMessages(request, result);
//       } else {
//         callback(result);
//       }
//     });
//   };
//   var initialRequest = gapi.client.gmail.users.messages.list({
//     'userId': userId,
//     'q': query
//   });
//   getPageOfMessages(initialRequest, []);
// }

// /**
//  * Get Message with given ID.
//  *
//  * @param  {String} userId User's email address. The special value 'me'
//  * can be used to indicate the authenticated user.
//  * @param  {String} messageId ID of Message to get.
//  * @param  {Function} callback Function to call when the request is complete.
//  */
// function getMessage(userId, messageId, callback) {
//   var request = gapi.client.gmail.users.messages.get({
//     'userId': userId,
//     'id': messageId
//   });
//   request.execute(callback);
// }

// function getAttachments(userId, attachmentId, messageId, callback) {
//       var request = gapi.client.gmail.users.messages.attachments.get({
//         'id': attachmentId,
//         'messageId': messageId,
//         'userId': userId
//       });
//       request.execute(function(attachment) {
//         callback(attachment);
//       });
// }

// //callback
// function messageQueryCallback(res){
//   //console.log("message query response:" + JSON.stringify(res, null, 4));
//   gapi.client.load('gmail', 'v1', function(){
//     getMessage("me", "14eff5cb8cb80cc1", getMessageCallback); 
//   });
// }

// function getMessageCallback(res){
//   //console.log("message get response:" + JSON.stringify(res.payload.parts, null, 4));
//   var parts = res.payload.parts;
//   for(var i = 0; i < parts.length; i++){
//     //console.log("message get response:" + JSON.stringify(parts[i].mimeType));
//     var type = parts[i].mimeType;
//     if( type === 'application/pdf' || type === 'application/doc'){
//       //console.log("message get response:" + JSON.stringify(parts[i].body.attachmentId));
//       var attachmentId = JSON.stringify(parts[i].body.attachmentId);
//       console.log("attachment get response:" + attachmentId);

//       //ANGjdJ9aTmyFK0k1cALbkoCRlDgod1XGyToze4WWlMEGblTIfRBbTK_qncNkeHDe-wUuyamLvESVVRAluQn7F13PlYHemT1KT5GjITs8bcT5akLGmZzigoq8Z4BDrWxyTDQXqeX5JSjNFwjJAbw_Sg1ekZ46EdZOcu4L_p_sIuJNbVWx9Iy4kLvzRiEG0CsEA12LDcoxVry-f1dx_qkvYy2ngHvhEftqk0YaV9X2fnr6gI9l_BiTo4lnguOf2E20oQ3zjCPEeVyGL3mDi49CXujuvXBQGUrNJda-dAsXxw
//       var attachmentId = "ANGjdJ9aTmyFK0k1cALbkoCRlDgod1XGyToze4WWlMEGblTIfRBbTK_qncNkeHDe-wUuyamLvESVVRAluQn7F13PlYHemT1KT5GjITs8bcT5akLGmZzigoq8Z4BDrWxyTDQXqeX5JSjNFwjJAbw_Sg1ekZ46EdZOcu4L_p_sIuJNbVWx9Iy4kLvzRiEG0CsEA12LDcoxVry-f1dx_qkvYy2ngHvhEftqk0YaV9X2fnr6gI9l_BiTo4lnguOf2E20oQ3zjCPEeVyGL3mDi49CXujuvXBQGUrNJda-dAsXxw";
//       gapi.client.load('gmail', 'v1', function(){
//         getAttachments("me", attachmentId, "14eff5cb8cb80cc1", getAttachmentCallback); 
//       });

//     }
//   }
// }

// function getAttachmentCallback(res){
//   //console.log("attachment get response:" + JSON.stringify(res.data, null, 4));
//   //var url = "http://requestb.in/18q28jd1";
//   //var url = "http://localhost:3000/resumes";
//   // Meteor.http.post(url, {
//   // 	data: res.data
//   // }, function(error, result){
//   // 	 console.log(result.statusCode);
//   // });
//   //Meteor.call("resumes", res.data);	
//   console.log("sending the data...");
// }

// // Meteor.subscribe("files");

// // var fileDBs = Meteor.users.find();
// // console.log(fileDBs);
// // Template.body.helpers({
// //     files: fileDBs
// // });
