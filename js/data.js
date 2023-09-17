import { getRandomArbitrary, getRandomInteger, getRandomArrayElement } from './util.js';
import { getRandomArray } from './create-random-array.js';
import { getRandomPhotoId } from './create-photo-id.js';

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
];

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
];

const PHOTOS_ID = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];


const createAnnouncement = () => ({
  author: [
    {
      avatar: getRandomPhotoId
    }
  ],
  offer: [
    {
      title: getRandomArrayElement(TITLES),
      address: 'getRandomArbitrary(35.65000, 35.70000) getRandomArbitrary(139.70000, 139.80000)',
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

export { createAnnouncement };
