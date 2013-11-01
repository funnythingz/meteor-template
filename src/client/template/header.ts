/// <reference path='../../reference.ts'/>

if (Meteor.isClient) {

    Template.header.helpers({
        title: ()=> {
            return "title";
        },

        description: ()=> {
            return "description";
        }

    });

    Template.header.events({
        'click input' : ()=> {
            // template data, if any, is available in 'this'
            if (typeof console !== 'undefined') {
                console.log("You pressed the button");
            }
        }
    });

}
