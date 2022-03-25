import {photoDescriptionSet} from './data.js';

const photoSet = photoDescriptionSet();
const CONTAINER = document.querySelector('.pictures');
const TEMPLATE = document.querySelector('#picture')
  .content
  .querySelector('a');


const thumbnailsRender = () => {
  const elementsFragment = document.createDocumentFragment();
  photoSet.forEach(({url, likes, comments}) => {
    const element = TEMPLATE.cloneNode(true);
    element.querySelector('img').src = url;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__comments').textContent = comments.length;
    elementsFragment.append(element);
  });
  CONTAINER.append(elementsFragment);
};

export {thumbnailsRender};
