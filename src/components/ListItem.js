import React from 'react';
import Card from './Card';


function DoneImg(props) {
  if (props.done) {
    return (<img alt="done" src="../assets/check.png"></img>)
  } else {
    return (<img alt="undone" src="../assets/nocheck.png"></img>)

  }
}

const ListItem = (props) => {
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button className="btn" onClick={() => { props.onDone(props.item) }}><DoneImg className="done" done={props.item.done}></DoneImg></button>
          <button className="btn" onClick={() => { props.onItemDeleted(props.item) }}><img alt="delete" src="./assets/bin.png"></img></button>
        </div>
      </Card>
    </li>
  )
}

export default ListItem;