import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../../constant/data';
export interface SidebarItemProps {
  name: string;
  Icon: React.ComponentType; // Accepter n'importe quel composant React
  link: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, Icon, link }) => {
  return (
    <Link to={link}>
    <div className="sidebar__item">
      <span className="sidebar__item--icon">
        <Icon />
      </span>
      <span className="sidebar__item--text">{name}</span>
    </div>
    </Link>
  );
};

function Sidebar() {
  return (
    <div className={`sidebar`}>
      <div className="sidebar__left">
        <div className="sidebar__left--header">
            {/* {inactive ? <img src={Image_slim} alt="Logo" /> : <img src={Image} alt="Logo" />} */}
          
        </div>
      </div>
      <div className="sidebar__content">
        {menuItems.map((item) => (
          <SidebarItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
