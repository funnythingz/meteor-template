if (Meteor.isClient) {

    Template.body.helpers({

        greeting: ()=> {
            return "oh yeah!";
        }

    });

}
