//получение случайного числа из диапазона
function getRandomNumber(from, to){
  let randomNumber;
  if(from < 0 || to < 0){
    return;
  } else {
    randomNumber = Math.floor(Math.random()*(to-from) + from);
  }
  return randomNumber;
}
getRandomNumber();

//функция проверки длины строки
function checkCommentMax(commentString, maxLength){
  return commentString.length <= maxLength;
}

checkCommentMax();
