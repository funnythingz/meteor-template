if (Meteor.isClient) {
    Template.hello.helpers({
        greeting: function () {
            return "Welcome to public.";
        }
    });

    Template.hello.events({
        'click input': function () {
            if (typeof console !== 'undefined') {
                console.log("You pressed the button");
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    });
}
