Meteor.startup(function () {
  if (Place.find().count() === 0) {
    var items = [
      {'name': 'Commons Ford Park',
       'desc': 'A good place for fishing.',
       'public' : true,
       'owner' : "luohuazju@gmail.com"
      },
      {'name': 'Brushy creek park',
       'desc': 'It is close.',
       'public' : true,
       'owner' : "luohuazju@gmail.com"     
      },
      {'name': 'Lago',
       'desc': 'It is far.',
       'public' : true,
       'owner' : "luohuazju@gmail.com"
      }
    ];
    for (var i = 0; i < items.length; i++){
      Place.insert({name: items[i].name, desc: items[i].desc, public: items[i].public, owner: items[i].owner});
    }
  }
});

