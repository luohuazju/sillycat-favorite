Meteor.startup(function () {
  if (Place.find().count() === 0) {
    var items = [
      {'name': 'Commons Ford Park',
              'desc': 'A good place for fishing.'},
      {'name': 'Brushy creek park',
              'desc': 'It is close.'},
      {'name': 'Lago',
              'desc': 'It is far.'}
    ];
    for (var i = 0; i < items.length; i++){
      Place.insert({name: items[i].name, desc: items[i].desc});
    }
  }
});

