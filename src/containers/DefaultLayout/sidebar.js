import React, { useEffect } from 'react';
import './style.css';

const Sidebar = ({ history, items }) => {
  console.log(items);
  return (
    <>
      {items.map((item,idx) => {
        return <p key={idx}>{item ? item.name : ''}</p>;
      })}
    </>
  );
};

export default Sidebar;
