import React from 'react';
import './Menu.css';
import { menu_list } from '../../assets/assets';

const Menu = ({category,setCategory}) => {

  return (
    <div className="menu-container">
      <div className="exploreMenu" id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='Explore-menu-text'>Indulge in a variety of delicious dishes crafted with the freshest ingredients. From appetizers to desserts, our menu offers something for everyone. Discover your new favorite meal today!</p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} className="explore-menu-item m-5 text-xl " key={index}>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Menu;