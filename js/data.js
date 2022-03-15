import {getRandomUniqueId, getRandomArrayElement, getRandomNumber} from './utils.js';

const NAMES = [
  'Макар',
  'Виктор',
  'Анастасия',
  'Алексей',
  'Полина',
  'Вероника',
  'Серафима',
  'Артём',
  'Глеб',
  'Иван',
  'Никита',
  'Дмитрий',
  'Ника',
  'Ева',
  'Арина',
  'Алиса',
  'Фатима',
  'Александра',
  'Дарья',
  'Михаил',
  'Андрей',
  'Максим',
  'Богдан',
  'Мира',
  'Мия'
];
const COMMENTS_MESSAGE =
['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTO_DESCRIPTION = [
  'мое первое фото',
  'я купил камеру а мастерство не купил',
  'мои родственники в восторге',
  'просто описание',
  'вот как-то так',
  'Моя работа!',
  'Горжусь этим фото!',
  'Просто оставлю это здесь',
  'Как вам такое?!А? ))',
  'увидел и обомлел',
  'Поставьте лайк если не сложно',
  'Утреннее творчество',
  'Отзывы приветствуются',
];


const randomId = getRandomUniqueId(0, 9999);
const generateComment = () => ({
  id: randomId(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: COMMENTS_MESSAGE[getRandomNumber(0, COMMENTS_MESSAGE.length - 1)],
  name: getRandomArrayElement(NAMES),
});

const makePhotoDescription = (_, index) =>{
  const id = index+1;
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomNumber(15, 200),
    comments: Array.from ({length: getRandomNumber(1, 3)}, generateComment),
  };
};
const photoDescriptionSet = () => Array.from({length:25}, makePhotoDescription);

export {photoDescriptionSet};


