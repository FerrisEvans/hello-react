import React, {useState} from 'react';

import './index.css'
import Date from "../Date";
import Content from "../Content";
import Card from "../../ui/card";
import Modal from "../../ui/Modal";

interface ItemProps {
  date: Date,
  desc: string,
  time: number,
  del: Del,
  index: number
}

const Item: React.FC<ItemProps> = ({date, desc, time, del, index}) => {

  const [showModal, setShowModal] = useState(false)

  const text = 'Are you sure you want to delete?'
  const modal = () => {
    setShowModal(true)
  }
  const doDel = () => {
    del(index)()
    setShowModal(false)
  }
  const cancel = () => {
    setShowModal(false)
  }

  return (
    <>
      <Card className='item'>
        {showModal && <Modal
          text={text}
          confirm={doDel}
          cancel={cancel}
        ></Modal>}
        <Date date={date}></Date>
        <Content desc={desc} time={time}></Content>
        <div>
          <div className='delete' onClick={modal}>⤬</div>
        </div>
      </Card>
    </>
  );
};

export default Item;