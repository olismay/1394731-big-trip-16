const generateRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateType = () => {
  const types = [
    'Taxi',
    'Bus',
    'Train',
    'Ship',
    'Drive',
    'Flight',
    'Check-in',
    'Sightseeing',
    'Restaurant'
  ];

  const randomIndex = Math.floor(Math.random() * types.length);

  return types[randomIndex];
};

const generateCity = () => {
  const cities = [
    'Dubai',
    'London',
    'Dublin',
    'Playa Del Carmen',
    'Saint Petersburg',
    'Zurich',
    'Oxford',
    'New York',
    'Los Angeles',
    'Miami'
  ];

  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.'
  ];

  const sentencesCount = generateRandomInteger(1,5);
  descriptions.length = sentencesCount;

  return descriptions;
};

const generateSrc = () => `http://picsum.photos/248/152?r=${Math.random()}`;


const generatePictires = () => (
  [{
    src: generateSrc(),
  }]);


const generateTitle = () => {
  const titles = [
    'Upgrade to a business class',
    'Choose the radio station',
    'Upgrade to first class',
    'Access to premium lounge'
  ];

  const randomIndex = Math.floor(Math.random() * titles.length);
  return titles[randomIndex];
};


const generateOffer = () => {

  const offer = {
    id: generateRandomInteger(1, 20),
    title: generateTitle(),
    price: generateRandomInteger(10, 250),
  };

  return offer;
};


const createArrLength = (val) => {
  const offers = [];
  offers.length = generateRandomInteger(1, 5);
  return offers.fill(val);
};

const generateDestination = () => ({
  description: generateDescription(1, 5),
  name: generateCity(),
  pictures: generatePictires()
});


const generateOfferList = () => (
  { type: generateType(),
    offers: createArrLength(generateOffer()),
  });


export const generateTripPoint = () => ({
  destination: generateDestination(),
  offers: generateOfferList(),
});
