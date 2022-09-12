import React from 'react';
import {NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';

export const Navbar = () => {
  const links = [
    { href: '/', label: 'Home', title: 'Vai alla home' },
    { href: '/catalogo', label: 'Catalogo' },
  ];
 
  //NOTA
  // Destructoring di un object:
  // const obj = { href: '/', label: 'Home' };
  // const { href, label } = obj;
  // sotto lo usiamo nel parametro della funzione passata al map
  
  return (
      <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map(({ href, label, title }) => (
            <li key={href} className={styles.item}>
            <NavLink 
              to={href}
              title={title ? title : label}
              style={({ isActive }) => ({
                  pointerEvents: isActive ? 'none' : 'auto',
                  opacity: isActive ? 0.4 : 1,
                })}
                className={`${({ isActive }) =>
                isActive ? 'nav nav--active' : 'nav'
            } ${styles.navLink}`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};