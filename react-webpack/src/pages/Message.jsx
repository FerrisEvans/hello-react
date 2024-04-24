import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

const Message = () => {
  const [msg] = useState([
    {
      id: 1,
      title: 'T01',
      content: 'Content 01'
    },
    {
      id: 2,
      title: 'T02',
      content: 'Content 02'
    },
    {
      id: 3,
      title: 'T03',
      content: 'Content 03'
    },
    {
      id: 4,
      title: 'T04',
      content: 'Content 04'
    }
  ])
  return (
    <div>
      <ul>
        {msg.map(item => (
          <li key={item.id}>
            <Link to={`detail/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet></Outlet>
    </div>
  );
};

export default Message;