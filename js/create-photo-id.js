import { addNumberNull } from './add-null.js';
import { getRandomInteger } from './util.js';

const createRandomPhotoId = (min, max) => {
  const previousOptions = [];

  return function () {
    let currentOption = getRandomInteger(min, max);
    if (previousOptions.length >= (max - min + 1)) {
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

export {getRandomPhotoId};
