// if (Meteor.isServer) {

// // Meteor.publish("allUsers", function () {
// //   return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
// // });

// // Meteor.publish("messages", function () {
// //   return Meteor.users.find({});
// // });

// }

if (Meteor.isClient) {
  // This code is executed on the client only
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
  });

  // Meteor.subscribe("allUsers");
  // Meteor.subscribe("messages");
 
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}
