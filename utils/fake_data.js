var faker = require('faker');

var dataGenerator = (num) => {
  var results = {
    properties: [],
    owners: [],
    reviews: []
  };

  for (var i = 1; i <= num; i++) {
    var property = {};
    // property.id = faker.random.uuid();
    property.title = faker.lorem.words();
    property.description = {};
    property.description.short = {
      guests: faker.random.number({min: 1, max: 5}),
      bedrooms: faker.random.number({min: 1, max: 5}),
      beds: faker.random.number({min: 1, max: 5}),
      baths: faker.random.number({min: 1, max: 5})
    };
    property.description.long = faker.lorem.paragraphs();
    property.amenities = {};
    property.amenities.basic = [
      {wifi: faker.random.boolean()}, 
      {laptop: faker.random.boolean()},
      {dryer: faker.random.boolean()},
      {washer: faker.random.boolean()},
      {iron: faker.random.boolean()},
      {essentials: faker.random.boolean()},
      {heating: faker.random.boolean()},
      {tv: faker.random.boolean()},
      {ac: faker.random.boolean()}
    ];
    property.amenities.facilities = [
      {parking: faker.random.boolean()},
      {entrance: faker.random.boolean()},
      {smokedetector: faker.random.boolean()},
      {cmdetector: faker.random.boolean()}
    ];
    property.amenities.dining = [
      {kitchen: faker.random.boolean()},
      {breakfast: faker.random.boolean()}
    ];
    property.amenities.bedbath = [
      {hangers: faker.random.boolean()},
      {dryer: faker.random.boolean()},
      {shampoo: faker.random.boolean()}
    ];
    property.location = {};
    property.location.line1 = faker.address.streetAddress();
    property.location.line2 = faker.address.secondaryAddress();
    property.location.city = faker.address.city();
    property.location.state = faker.address.state();
    property.location.zip = faker.address.zipCode();
    property.reviewIds = [];

    var owner = {};
    //owner.id = i;
    owner.name = faker.name.firstName() + ' ' + faker.name.lastName();
    owner.superStatus = faker.random.boolean();
    owner.avatar = faker.image.avatar();
    owner.contact = {};
    owner.contact.email = faker.internet.email();
    owner.contact.phone = faker.phone.phoneNumber();
    owner.propertyId = i;

    property.ownersId = i;

    var rN = faker.random.number({min: 3, max: 10});

    var reviewCollection = [];
    for (var j = 1; j <= rN; j++) {
      var review = {};
      review.id = (i*10) + j;
      review.created = faker.date.month() + ' ' + faker.random.number({min: 2012, max: 2018});
      review.ratings = {};
      review.ratings.accuracy = Number(faker.finance.amount(0, 5, 2));
      review.ratings.communication = Number(faker.finance.amount(0, 5, 2));
      review.ratings.cleanliness = Number(faker.finance.amount(0, 5, 2));
      review.ratings.location = Number(faker.finance.amount(0, 5, 2));
      review.ratings.checkin = Number(faker.finance.amount(0, 5, 2));
      review.ratings.value = Number(faker.finance.amount(0, 5, 2));
      review.propertyId = i;

      //reviewCollection.push(review);
      results.reviews.push(review);
      property.reviewIds.push(review.id);
    }
    results.properties.push(property);
    results.owners.push(owner);
    //results.reviews.push(reviewCollection);
  }
  return results;
};

module.exports = dataGenerator;