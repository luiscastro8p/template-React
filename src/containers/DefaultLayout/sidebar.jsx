import React, { useEffect } from 'react';
import './style.css';

const Sidebar = (props) => {
  const SignOut = () => props.history.push('/login');

  return (
    <>
      <div className='sidebar-container'>
        <div className='sidebar-logo'>
          {/* Logo empresa */}
          Logo
        </div>
        <ul className='sidebar-navigation'>
          {props.items.map((item, idx) => {
            return (
              <li key={idx} onClick={() => props.history.push(item.url)}>
                <a>
                  <div>
                    {item.icon && <em className={item.icon}></em>}
                    {item.name && <p> {item ? item.name : ''}</p>}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <i
          className='fa fa-sign-out pos-sign-out'
          aria-hidden='true'
          onClick={SignOut}
        ></i>
      </div>
    </>
  );
};

export default Sidebar;
