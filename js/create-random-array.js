
import { getRandomInteger } from './util.js';

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

export {getRandomArray};
