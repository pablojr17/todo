import React, { useEffect, useState } from 'react';
import List from './components/List';
import Item from './components/Item';
import Form from './components/Form';
import './Todo.css';
import Modal from './components/Modal';

const SAVED_ITEMS = "savedItems"

const Todo = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items])

  function onAddItem(text) {
    let item = new Item(text);
    setItems([...items, item]);
    onHideModal();
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter(it => it.id != item.id);
    setItems(filteredItems);
  }

  function onDone(item) {

    let updatedItems = items.map(it => {
      if (it.id === item.id) {
        it.done = !it.done;
      };
      return it;
    })
    setItems(updatedItems);
  }

  function onHideModal() {
    setShowModal(false)
  }
  return (
    <div className="body">
      <div className="container" >
        <header className="header">
          <h1>Todo</h1>
          <button onClick={() => { setShowModal(true) }} className="addButton">+</button>
        </header>
        <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />
        <Modal show={showModal} onHideModal={onHideModal}><Form onAddItem={onAddItem} /></Modal>
      </div>
    </div>
  )
}

export default Todo;