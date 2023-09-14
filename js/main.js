const TITLES = [
  'Змечательная квартира в центре города!',
  'Хорошие аппартаменты с видом на главную улицу',
  'Квартира рядом с торговым центром и метро',
  'Уютное место для семьи',
  'Прекрасная квартира для молодожёнов',
  'Место празднества для всей семьи!',
  'Отдых в тихом местечке!',
  'Квартира для снятия около вокзала',
  'Апартаменты для отдыха от детей и мужа',
  'Местечко в оживленном квартале Москвы'
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
]

const DESCRIPTION = [
  'Хорошо обставленная квартира с удобствами',
  'Местечко с приятной глазу мебелью, где всё хорошо сочетается',
  'Апартаменты с красивыми видами из окон! Вы не соскучитесь!',
  'Куча активностей совершенно рядом, всего в одном километре!',
  'Мебель и квартира находятся в надлежащем виду, всё убрано, есть предметы первой необходимости',
  'Квартира полностью укомплектована для комфортного проживания',
  'Место уютное, теплое и очень светлое с высококачественным ремонтом. Вы не пожалеете',
  'Качественный ремонт, дизайнерская планировка. Имеется все необходимое для жизни и отдыха',
  'Очень удобное расположение к станции метро и торговым центрам',
  'Ремонт выполнен из качественных дорогостоящих материалов, в квартире все продумано до мелочей!'
]

const PHOTOS_ID = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
]

const addNumberNull = (number) => {
  var NULL = String(0);
  return NULL += number;
}

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


const createRandomPhotoId = (min, max) => {
  const previousOptions = [];

  return function () {
    var currentOption = getRandomInteger(min, max);
    if (previousOptions.length >= (max - min + 1)) {
      console.error('Перебраны все допустимые значения');
      return null;
    }
    while (previousOptions.includes(currentOption)) {
      currentOption = getRandomInteger(min, max);
    }
    previousOptions.push(currentOption);
    if (currentOption < 10) {
      currentOption = addNumberNull(currentOption);
    }
    return currentOption;
  };
};

const getRandomPhotoId = createRandomPhotoId(1, 10);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomArray = (someArray) => {
  const lengthOfArray = getRandomInteger(1, someArray.length);
  const newRandomArray = [];

  while (newRandomArray.length < lengthOfArray) {
    const indexOfArray = getRandomInteger(0, someArray.length - 1);
    const arrayIndex = someArray[indexOfArray];

    if (!newRandomArray.includes(arrayIndex)) {
      newRandomArray.push(arrayIndex);
    }
  }
  return newRandomArray;
};

const createAnnouncement = () => ({
  author: [
    {
      avatar: 'img/avatars/user${getRandomPhotoId}.png'
    }
  ],
  offer: [
    {
      title: getRandomArrayElement(TITLES),
      address: '${getRandomArbitrary(35.65000, 35.70000)} ${getRandomArbitrary(139.70000, 139.80000)}',
      price: getRandomInteger(1000, 75000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(2, 7),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArray(PHOTOS_ID),
    }
  ],
  location: [
    {
      lat: getRandomArbitrary(35.65000, 35.70000),
      lng: getRandomArbitrary(139.70000, 139.80000)
    }
  ]
});

console.log(createAnnouncement());
