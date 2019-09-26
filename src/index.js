import shoppingList from './scripts/shopping-list';
import $ from 'jquery';
import cuid from 'cuid';
import './styles/index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
