/// <reference path='../definitions/meteor.d.ts'/>
/// <reference path='view-model-types.ts'/>

if (Meteor.isClient) {
    Template.hello.helpers({
        greeting: function() {
            return "Welcome to public.";
        }
    });

    Template.hello.events({
        'click input' : function () {
            // template data, if any, is available in 'this'
            if (typeof console !== 'undefined') {
                console.log("You pressed the button");
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
