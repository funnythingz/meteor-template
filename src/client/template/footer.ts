if (Meteor.isClient) {

    Template.footer.helpers({

        copyright: ()=> {
            return "funnythingz";
        }

    });

}
