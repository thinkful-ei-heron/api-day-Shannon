import $ from 'jquery';
import cuid from 'cuid';
import shoppingList from './scripts/shopping-list';
import './styles/index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
