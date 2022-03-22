import {photoDescriptionSet} from './data.js';

const photoSet = photoDescriptionSet();
const CONTAINER = document.querySelector('.pictures');
const TEMPLATE = document.querySelector('#picture')
  .content
  .querySelector('a');

const elementsFragment = document.createDocumentFragment();
const thumbnailsRender = () => {
  photoSet.forEach(({url, likes, comments}) => {
    const ELEMENT = TEMPLATE.cloneNode(true);
    ELEMENT.querySelector('img').src = url;
    ELEMENT.querySelector('.picture__likes').textContent = likes;
    ELEMENT.querySelector('.picture__comments').textContent = comments.length;
    elementsFragment.append(ELEMENT);
  });
  CONTAINER.append(elementsFragment);
};

export {thumbnailsRender};
