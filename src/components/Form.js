import React, { useState } from 'react';

const Form = (props) => {
  const [text, setText] = useState('');

  function handleChange(event) {
    let t = event.target.value;
    setText(t)
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text)
      setText('');
    }
  }

  return (
    <>
      <p>Digite uma tarefa</p>
      <form>
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={addItem}>Add</button>
      </form>
    </>
  )
}

export default Form;