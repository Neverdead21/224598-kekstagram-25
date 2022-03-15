const getRandomNumber = (from, to) => {
  let randomNumber;
  if(from < 0 || to < 0){
    return;
  } else {
    randomNumber = Math.floor(Math.random()*(to - from + 1 ) + from);
  }
  return randomNumber;
};

const checkCommentMax = (commentString, maxLength) => commentString.length <= maxLength;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

function getRandomUniqueId (min, max){
  const lastValues = [];

  return function () {
    let uniqueId = getRandomNumber(min, max);
    while (lastValues.includes(uniqueId)) {
      uniqueId = getRandomNumber(min, max);
    }
    lastValues.push(uniqueId);
    return uniqueId;
  };
}

export {checkCommentMax, getRandomArrayElement, getRandomNumber, getRandomUniqueId};

