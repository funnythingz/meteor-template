if (Meteor.isClient) {
    Template.body.helpers({
        greeting: function () {
            return "oh yeah!";
        }
    });
}
;if (Meteor.isClient) {
    Template.footer.helpers({
        copyright: function () {
            return "funnythingz";
        }
    });
}
;if (Meteor.isClient) {
    Template.header.helpers({
        title: function () {
            return "title";
        },
        description: function () {
            return "description";
        }
    });

    Template.header.events({
        'click input': function () {
            if (typeof console !== 'undefined') {
                console.log("You pressed the button");
            }
        }
    });
}
;if (Meteor.isServer) {
    Meteor.startup(function () {
    });
}
