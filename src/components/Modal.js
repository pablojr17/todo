import React, { useState } from 'react';
import Card from './Card';

const Modal = (props) => {

  function HideModal(e) {
    let target = e.target;
    if (target.id == 'modal') {
      props.onHideModal()
    }
  }


  return (
    <div id="modal" onClick={HideModal} className={props.show ? 'modal' : 'modal hide'}>
      <Card className="CardModal">{props.children}</Card>
    </div>
  )

}

export default Modal;