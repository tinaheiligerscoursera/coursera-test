"use strict";

(function () {

var shoppingList = [
  {
    name: "Onions",
    quantity: "2"
  },
  {
    name: "Garlic",
    quantity: "1"
  },
  {
    name: "Carrots",
    quantity: "5"
  },
  {
    name: "Celery Sticks",
    quantity: "10"
  },
  {
    name: "Potatoes",
    quantity: "3"
  }
];

var shoppingList2 = [
  {
    name: "testing",
    quantity: "10"
  }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
}

})();
