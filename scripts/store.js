/* global Item */
'use strict';
const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id) {
    return this.items.find(element => element.id === id);
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  }

  function findAndToggleChecked(id) {
    let item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;

    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  }

  function findAndDelete(id) {
    const index = this.items.findIndex(function (element) {

      return element.id === id;
    });

    this.items.splice(index, 1);
  }

  function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm(term) {
    this.searchTerm = term;
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };

}());